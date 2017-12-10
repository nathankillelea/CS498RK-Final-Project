import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Button, Alert, TextInput, KeyboardAvoidingView, Image } from 'react-native';

export default class Settings extends React.Component {
	static navigationOptions = {
		title: 'Settings',
		header: null,
	};
	constructor() {
		super();
		this.state = {
			username: "Jamaul the Titan",
			profilePicture: 1,
			password: "",
			preference: 1

		}
	}

	changeUsername = () => {

	};

    changeProfilePicture = () => {

    };

    changePassword = () => {

    };

    changePreference = () => {

    };

    logOut = () => {

	};

	render() {
		const { navigate } = this.props.navigation;
		return (
    		<View style={styles.container}>
				<Image
					source={require('../assets/userfrog.jpg')}
					style={styles.background}
				/>
				<Text>{this.state.username}</Text>
				<Text>Preference: {this.state.preference}</Text>
				<Button
					title="Change Profile Picture"
					onPress={this.changeProfilePicture}
				/>
				<Button
					title="Change Username"
					onPress={this.changeUsername}
				/>
				<Button
					title="Change Password"
					onPress={this.changePassword}
				/>
				<Button
					title="Change Quote Preference"
					onPress={this.changePreference}
				/>
				<Button
					title="Log Out"
					onPress={this.logOut}
				/>
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
    background: {
        flex: 1,
        width: 150,
        height: 20,
		padding: 10,
		margin: 10,
    },
});

AppRegistry.registerComponent('Settings', () => Settings);
