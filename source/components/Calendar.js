import React from 'react';
import { StyleSheet, Text, View, AppRegistry, TouchableOpacity, Alert, TextInput, KeyboardAvoidingView, Image } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default class CalendarView extends React.Component {
	static navigationOptions = {
		title: 'Calendar',
		header: null,
	};
	constructor() {
		super();
		this.state = {

		}
	};

	getTasksGivenDay = (day) => {
		console.log("Today is", day.day);
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
