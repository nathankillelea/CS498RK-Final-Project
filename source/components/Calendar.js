import React from 'react';
import { StyleSheet, Text, View, Modal, AppRegistry, TouchableOpacity, Alert, TextInput, KeyboardAvoidingView, Image } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import axios from 'axios';

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
			tasksForModal: []
		}
	};

	componentWillMount(){
        let hostname = "192.168.1.67"; //Doug's computer

        let taskEndpt = 'http://' + hostname + '/api/tasks?where={\"owner\":\"boog\"}';
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

		if(displayTasks.length > 0){
			console.log("Set the Modal to True");
			this.setState({showTaskModal:true});
		}
		else{
			this.setState({showTaskModal:false});
		}

		this.setState({tasksForModal:displayTasks});

		console.log(this.state.tasksForModal.length);
		console.log(this.state.showTaskModal);
	};

	render() {
		const { navigate } = this.props.navigation;
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

				markedDates={{
                    '2017-12-16': {selected: true, marked: true},
                    '2017-12-17': {marked: true},
                    '2017-12-18': {disabled: true}
                }}
			/>

    	);
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
});

AppRegistry.registerComponent('Calendar', () => CalendarView);
