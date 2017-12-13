import React from 'react';
import { StyleSheet, Text, View, ScrollView, AppRegistry, Button, TouchableOpacity, Alert, TextInput, KeyboardAvoidingView, Image, Modal } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import axios from 'axios'


export default class CalendarView extends React.Component {
	static navigationOptions = {
		title: 'Calendar',
		header: null,
	};
	constructor() {
		super();
		this.state = {
			taskData: [],
			showTaskModal: false,
			tasksForModal: [],
			title: '',
			description: '',
			deadline: '',
			showModal: false,
		}
	};

	componentWillMount(){
        let hostname = "messageinarawr498.herokuapp.com"; //Alec's IP
        let taskEndpt = 'https://' + hostname + '/api/tasks?where={\"owner\":\"boog\"}';
        axios.get(taskEndpt)
            .then((response) => {

                let newTaskData = [];

                //console.log(response.data.data);

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

		console.log(this.state.tasksForModal.length);
		console.log(this.state.showTaskModal);
	};

	returnToCalendar = () => {
		this.setState({showTaskModal: false});
	};

	submitDataAndReturn = () => {
		// do stuff and submit some data
		this.setState({showModal: false}); // if it doesnt fail or something?, else do error blah blah
		this.setState({showTaskModal: false});
	}

	render() {
		const { navigate } = this.props.navigation;

		if(this.state.showTaskModal === false) {
            return (

				<CalendarList
					// Callback which gets executed when visible months change in scroll view. Default = undefined
					// onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
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
								<TouchableOpacity style={styles.button} onPress={() => this.setState({showModal: true})}>
										<Text style={styles.buttonText}>Create New Task</Text>
								</TouchableOpacity>
								<TouchableOpacity style={[styles.button,{marginTop: 20,}]} onPress={this.returnToCalendar}>
										<Text style={styles.buttonText}>Return to Calendar</Text>
								</TouchableOpacity>
								<Modal visible={this.state.showModal} onRequestClose={()=> setState({showModal: false})}>
									<View style={[styles.container, {backgroundColor: '#ADD8E6'}]}>
										<TextInput style={styles.input}
											placeholder="Title"
											returnKeyType="next"
											onChangeText={(text) => this.setState({title: text})}
											onSubmitEditing={() => this.descriptionInput.focus()}
										/>
										<TextInput style={styles.input}
											placeholder="Description"
											returnKeyType="next"
											onChangeText={(text) => this.setState({description: text})}
											ref={(input) => this.descriptionInput = input}
											onSubmitEditing={() => this.deadlineInput.focus()}
										/>
										<TextInput style={styles.input}
											placeholder="Deadline"
											returnKeyType="done"
											onChangeText={(text) => this.setState({deadline: text})}
											ref={(input) => this.deadlineInput = input}
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
		alignItems: 'center',
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
