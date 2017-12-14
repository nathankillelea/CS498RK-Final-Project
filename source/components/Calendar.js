import React from 'react';
import {  StyleSheet, Text, View, FlatList, AppRegistry, Button, TouchableOpacity, Alert, TextInput, KeyboardAvoidingView, Image, Modal } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { List, ListItem, SearchBar } from 'react-native-elements';
import axios from 'axios';

export default class CalendarView extends React.Component {
        static navigationOptions = {
            title: 'Calendar',
            header: null,
        };
        constructor(props) {
            super(props);
            this.state = {
                user_data: this.props.navigation.state.params.user_data,
                all_tasks: [],
                my_tasks: [],
                day_tasks: [], //tasks for the day selected on calendar
                showTaskModal: false,
                //tasksForModal: [],  tHIS IS NOW DAY_TASKS
                title: '',
                description: '',
                deadline: '',
                showModal: false,
                currDay: 13,
                currMonth: 12,
                currYear: 2017,
                currEpoch: 123
            }
        };

        componentWillMount() {
            let hostname = "messageinarawr498.herokuapp.com";
            let taskEndpt = 'https://' + hostname + '/api/tasks';

            //Get all tasks and put them in a state
            //Then set the state of tasks that our current user has
            axios.get(taskEndpt)
                .then((response) => {
                    this.setState({
                        all_tasks: response.data.data
                    });
                    for (i = 0; i < this.state.all_tasks.lenght; i++) {
                        if (this.state.all_tasks[i].owner === this.state.user_data._id) {
                            this.state.my_tasks.push(this.state.all_tasks[i]);
                        }
                    }
                })
                .catch((error) => {
                    console.log('Error', JSON.stringify(error));
                });
        }

        getTasksGivenDay = (day) => {
            console.log("Today is ", day.day);
            let temp = [];
            let dayTimeStamp = day.timestamp;
            let tomorrowTimeStamp = day.timestamp + 86400000;
            for (let i = 0; i < this.state.all_tasks.length; i++) {
                let taskDate = Date.parse(this.state.all_tasks[i].deadline);
                console.log("What we are comparing to timestamps: " + taskDate);
                if (taskDate >= dayTimeStamp && taskDate < tomorrowTimeStamp) {
                    console.log("We got a hit!");
                    temp.push(this.state.all_tasks[i]);
                }
            }
            this.setState({
                day_tasks: temp
            });
            this.setState({
                currDay: day.day,
                currMonth: day.month,
                currYear: day.year,
                currEpoch: day.timestamp
            });
            this.setState({
                showTaskModal: true
            });
        };

        returnToCalendar = () => {
            this.setState({
                showTaskModal: false
            });
        };

        updateCompleteTask = (item) => {
            //console.log(item);
            //update states first
            for (i = 0; i < this.state.all_tasks.length; i++) {
                if (this.state.all_tasks[i]._id === item._id) {
                    this.state.all_tasks[i].completed = true;
                }
            }
            for (i = 0; i < this.state.my_tasks.length; i++) {
                if (this.state.my_tasks[i]._id === item._id) {
                    this.state.my_tasks[i].completed = true;
                }
            }
            //now update task info on backend
            body = {
                title: item.title,
                deadline: item.deadline,
                owner: item.owner,
                description: item.description,
                completed: true
            };
            let hostname = "messageinarawr498.herokuapp.com"; //Alec's IP
            let taskEndpt = 'https://' + hostname + '/api/tasks/' + item._id;
            axios.put(taskEndpt, body)
                .then((response) => {
                    console.log(response);
                })
                .catch((err) => {
                    console.log("Error Updating Task to Complete: " + err);
                });
        };

        addTask = () => {
            // do stuff and submit some data
            let hostname = "messageinarawr498.herokuapp.com"; //Alec's IP
            let taskEndpt = 'https://' + hostname + '/api/tasks';
            body = {
                title: this.state.title,
                deadline: this.state.currEpoch,
                owner: this.state.user_data._id,
                description: this.state.description,
                completed: false
            };
            axios.post(taskEndpt, body)
                .then((response) => {
                    console.log("Post successful:");
                    console.log(response.data);


                    this.state.all_tasks.push(response.data);
                    this.state.my_tasks.push(response.data);
                })
                .catch((err) => {
                    console.log("Error adding task:" + err);
                });
            this.setState({showModal: false}); // if it doesnt fail or something?, else do error blah blah
            this.setState({showTaskModal: false});
        };

        renderSeparator = () => {
            return ( <
                View style = {
                    {
                        height: 1,
                        backgroundColor: '#CED0CE',
                        width: '100%',
                    }
                }
                />
            );
        };
        render() {
				const { navigate } = this.props.navigation;

				if(this.state.showTaskModal === false) {
		       return (
								<CalendarList
									// Max amount of months allowed to scroll to the past. Default = 50
									pastScrollRange={24}
									// Max amount of months allowed to scroll to the future. Default = 50
									futureScrollRange={24}
									// Enable or disable scrolling of calendar list
									scrollEnabled={true}
									// Enable or disable vertical scroll indicator. Default = false
									showScrollIndicator={true}
									// callback that gets called on day press
									onDayPress={(day) => this.getTasksGivenDay(day)}
								/>
		        );
		     }
		     else{
		         return (
									<View style={{backgroundColor: '#fff', height: '100%'}}>
										<View style={{}}>
										<List containerStyle={{borderTopWidth: 0, borderBottomWidth: 0, backgroundColor: '#FFFFFF', height: 400}}>
											<FlatList
												style={{backgroundColor: 'white'}}
												removeClippedSubviews={false}
												data={this.state.day_tasks}
												renderItem={({ item }) => (
													<ListItem
														title={item.title}
														subtitle={"Completed: " + item.completed}
														containerStyle={{borderBottomWidth: 0, borderTopWidth: 0, backgroundColor: '#fff', borderColor: '#fff'}}
														button
														onPress={(item) => {
															this.updateCompleteTask(item)
													}}
												/>
		                    )}
												keyExtractor={item => item._id}
												ItemSeparatorComponent={this.renderSeparator}
											/>
										</List>
									</View>
									<View style={styles.buttonContainer}>
										<TouchableOpacity style={styles.button} onPress={() => this.setState({showModal: true})}>
												<Text style={styles.buttonText}>Create New Task</Text>
										</TouchableOpacity>
										<TouchableOpacity style={[styles.button,{marginTop: 20,}]} onPress={this.returnToCalendar}>
												<Text style={styles.buttonText}>Return to Calendar</Text>
										</TouchableOpacity>
										<Modal visible={this.state.showModal} onRequestClose={()=>setState(showModal: false)}>
											<View style={[styles.container, {backgroundColor: '#ADD8E6'}]}>
												<TextInput style={styles.input}
													placeholder="Title"
													returnKeyType="next"
													onChangeText={(text) => this.setState({title: text})}
													onSubmitEditing={() => this.descriptionInput.focus()}
												/>
												<TextInput style={styles.input}
													placeholder="Description"
													returnKeyType="done"
													onChangeText={(text) => this.setState({description: text})}
													ref={(input) => this.descriptionInput = input}
												/>
												<TouchableOpacity style={[styles.modalButton, {marginTop: 20,}]} onPress={this.addTask}>
														<Text style={{textAlign: 'center',fontWeight: '700',}}>Done</Text>
												</TouchableOpacity>
											</View>
										</Modal>
									</View>
									</View>
		            );
				   }
			}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        //padding: 20,
        //paddingTop: 30,
    },
    button: {
        backgroundColor: '#ADD8E6',
        paddingVertical: 15,
        //marginBottom: 20,
        width: 250,
        borderRadius: 10,
        height: 50,
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: '700',
        color: '#fff',
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        paddingHorizontal: 10,
        marginBottom: 10,
        width: 250,
    },
    modalButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        paddingVertical: 15,
        //marginBottom: 20,
        width: 250,
        borderRadius: 10,
    }
});

AppRegistry.registerComponent('Calendar', () => CalendarView);
