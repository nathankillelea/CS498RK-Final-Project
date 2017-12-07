import React from 'react';
import { StyleSheet, Text, View, AppRegistry, TouchableOpacity, Alert, TextInput, KeyboardAvoidingView, Image, StatusBar } from 'react-native';

export default class Home extends React.Component {
	static navigationOptions = {
		title: 'Home',
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
				<StatusBar
					barStyle="light-content"
				/>
				<Text>HOME</Text>
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

AppRegistry.registerComponent('Home', () => Home);
