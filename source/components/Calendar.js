import React from 'react';
import { StyleSheet, Text, View, AppRegistry, TouchableOpacity, Alert, TextInput, KeyboardAvoidingView, Image } from 'react-native';

export default class Calendar extends React.Component {
	static navigationOptions = {
		title: 'Calendar',
		header: null,
	};
	constructor() {
		super();
		this.state = {

		}
	}
	render() {
		const { navigate } = this.props.navigation;
		return (
    		<View style={styles.container}>
				<Text>CALENDAR</Text>
    		</View>
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

AppRegistry.registerComponent('Calendar', () => Calendar);
