import React from 'react';
import { StyleSheet, Text, View, FlatList, AppRegistry, Button, TouchableOpacity, Alert, TextInput, KeyboardAvoidingView, Image, Modal } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { List, ListItem, SearchBar } from 'react-native-elements';
import axios from 'axios'


export default class CalendarView extends React.Component {
	static navigationOptions = {
		title: 'Calendar',
		header: null,
	};
	constructor(props) {
		super(props);
		this.state = {
            user_data: this.props.navigation.state.params.user_data,
			taskData: [],
			showTaskModal: false,
			tasksForModal: [],
			title: '',
			description: '',
			deadline: '',
			showModal: false,
			currDay: 13,
			currMonth: 12,
			currYear: 2017,
			epoch: 123
		}
	};

	componentWillMount(){
        let hostname = "messageinarawr498.herokuapp.com"; //Alec's IP
        let taskEndpt = 'https://' + hostname + '/api/tasks';

        console.log(this.state.user_data.tasks);

        axios.get(taskEndpt)
            .then((response) => {

                let newTaskData = [];

                console.log(response.data.data);

                for (let i= 0; i < response.data.data.length; i++){
                	let id = i;
                	let description = response.data.data[i].description;
                	let title = response.data.data[i].title;
                	let deadline = response.data.data[i].deadline;
                	let completed = response.data.data[i].completed;

                	newTaskData.push({
						"id" : id,
						"description" : description,
						"title" : title,
						"deadline" : deadline,
						"completed" : completed
					})
				}
				this.setState({taskData:newTaskData});
				console.log(this.state.taskData.length);
            })
            .catch((error) => {
                console.log('Error', JSON.stringify(error));
            });
	}

	getTasksGivenDay = (day) => {
		console.log("Today is", day.day);
		tasksOnDay = [];

		let dayTimeStamp = day.timestamp;
		let tomorrowTimeStamp = day.timestamp + 86400000;
		let displayTasks = [];
		let allTasks = this.state.taskData;

		console.log(dayTimeStamp);

		for (let i = 0; i < allTasks.length; i++){
			let taskDate = Date.parse(allTasks[i].deadline);
			console.log(taskDate);

			if(taskDate	 >= dayTimeStamp && taskDate < tomorrowTimeStamp){
				console.log("We got a hit!");
				displayTasks.push(allTasks[i]);
			}

		}

		console.log(displayTasks.length);


		this.setState({showTaskModal:true});

		this.setState({tasksForModal:displayTasks});

		this.setState({
			day: day.day,
			month: day.month,
			year: day.year,
			epoch: day.timestamp
		});

		console.log(displayTasks);
		console.log(this.state.showTaskModal);
	};

	returnToCalendar = () => {
		this.setState({showTaskModal: false});
	};

    updateCompleteTask = (item) => {

    	let taskID = item._id;
    	let allTasks = this.state.taskData;
    	task = {

		};

        for (let i = 0; i < allTasks.length; i++){
            if(taskID === allTasks[i]._id) {
                task = allTasks[i];
                allTasks[i].completed = true;
                break;
            }
		}

		console.log(task);


        body = {
            title: task.title,
            deadline: task.deadline,
            owner: task.owner,
            description: task.description,
            completed: true
        };

        let hostname = "messageinarawr498.herokuapp.com"; //Alec's IP
        let taskEndpt = 'https://' + hostname + '/api/tasks/' + task._id;
        axios.put(taskEndpt, body)
            .then((response) => {
                console.log("put successful.");
                console.log(response.data);
                let hostname = "messageinarawr498.herokuapp.com";
                let bottleEndpt = "https://" + hostname + "/api/users/" + this.state.user_data._id;
                let completedTasks = this.state.user_data.completedTasks;
                body = {
                    completedTasks: completedTasks,
                }
                axios.put(bottleEndpt, body)
                    .then((response) => {
						console.log(response.data);
                    })
                    .catch((error) => {
                        console.log('Error With Put', JSON.stringify(error));
                    })
            })
            .catch((err) => {
                console.log(err);
            });
	};

	submitDataAndReturn = () => {
		// do stuff and submit some data
        let hostname = "messageinarawr498.herokuapp.com"; //Alec's IP
        let taskEndpt = 'https://' + hostname + '/api/tasks';

        let epoch = this.state.epoch;

        console.log(epoch);
        console.log(this.state.taskData);
        let title = this.state.title;
        let owner = this.state.user_data._id;

        body = {
        	title: title,
        	deadline: epoch,
			owner: owner,
			description: this.state.description,
			completed: false
		};

		axios.post(taskEndpt, body)
			.then((response) => {
				console.log("post successful.");
				console.log(response.data);

                let newList = this.state.taskData;
                newList.push(response.data);
                this.setState({taskData: newList});

			})
			.catch((err) => {
				console.log(err);
			});





		this.setState({showModal: false}); // if it doesnt fail or something?, else do error blah blah
		this.setState({showTaskModal: false});
	};

    renderSeparator = () => {
        return (
			<View
				style={{
                    height: 1,
                    backgroundColor: '#CED0CE',
                    width: '100%',
                }}
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
							<View style={styles.buttonContainer}>

								<List containerStyle={{borderTopWidth: 0, borderBottomWidth: 0, marginTop: 20, backgroundColor: '#FFFFFF'}}>
									<FlatList
										data={this.state.tasksForModal}
										renderItem={({ item }) => (
											<ListItem
												title={item.title}
												subtitle={"Completed: " + item.completed}
												containerStyle={{borderBottomWidth: 0, borderTopWidth: 0, backgroundColor: '#fff', borderColor: '#fff'}}
												button
												onPress={(item) => {
													this.updateCompleteTask(item)
                                                }}/>
                                        )}
										keyExtractor={item => item._id}
										ItemSeparatorComponent={this.renderSeparator}
									/>
								</List>
								<TouchableOpacity style={styles.button} onPress={() => this.setState({showModal: true})}>
										<Text style={styles.buttonText}>Create New Task</Text>
								</TouchableOpacity>
								<TouchableOpacity style={[styles.button,{marginTop: 20,}]} onPress={this.returnToCalendar}>
										<Text style={styles.buttonText}>Return to Calendar</Text>
								</TouchableOpacity>
								<Modal visible={this.state.showModal}>
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
										<TouchableOpacity style={[styles.modalButton, {marginTop: 20,}]} onPress={this.submitDataAndReturn}>
												<Text style={{textAlign: 'center',fontWeight: '700',}}>Done</Text>
										</TouchableOpacity>
									</View>
								</Modal>
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
		justifyContent: 'center',
		padding: 20,
	},
	button: {
		backgroundColor: '#ADD8E6',
		paddingVertical: 15,
		//marginBottom: 20,
		width: 250,
		borderRadius: 10,
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
