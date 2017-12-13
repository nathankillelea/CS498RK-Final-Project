import React from 'react';
import { StyleSheet, Text, View, AppRegistry, TouchableOpacity, Alert, TextInput, KeyboardAvoidingView, Image } from 'react-native';
import axios from 'axios';

export default class SignUp extends React.Component {
	static navigationOptions = {
		title: 'Sign Up',
	};
	constructor() {
		super();
		this.state = {
				showCreated: false,
				username: '',
				email: '',
				password: '',
		}
	}
	createAccount = () => {
		body = {
			"username": this.state.username,
			"email": this.state.email,
			"password": this.state.password,
		}
		console.log(body)
		let hostname = "10.193.238.104"; //NATHAN's computer
		let bottleEndpt = "http://" + hostname + ":3000/api/register";
		axios.post(bottleEndpt, body)
			.then((response) => {
				console.log("Response went through.");
				console.log(response);
				console.log("Is your response.");
			})
			.catch((error) => {
				console.log('Error', JSON.stringify(error));
			});
	}
	render() {
		const { navigate } = this.props.navigation;
		return (
    		<View style={styles.container}>
				<KeyboardAvoidingView behavior="padding">
					<View style={styles.formContainer}>
						<TextInput style={styles.input}
							placeholder="Username"
							returnKeyType="next"
							autoCapitalize="none"
							autoCorrect={false}
							onChangeText={(text) => this.setState({username: text})}
							onSubmitEditing={() => this.emailInput.focus()}
						/>
						<TextInput style={styles.input}
							placeholder="Email Address"
							returnKeyType="next"
							autoCapitalize="none"
							autoCorrect={false}
							keyboardType="email-address"
							onChangeText={(text) => this.setState({email: text})}
							ref={(input) => this.emailInput = input}
							onSubmitEditing={() => this.passwordInput.focus()}
						/>
						<TextInput style={styles.input}
							placeholder="Password"
							returnKeyType="done"
							secureTextEntry
							onChangeText={(text) => this.setState({password: text})}
							ref={(input) => this.passwordInput = input}
						/>
					</View>
					<TouchableOpacity style={styles.createButtonContainer} onPress={this.createAccount}>
						<Text style={styles.buttonText}>Create My Account</Text>
					</TouchableOpacity>
				</KeyboardAvoidingView>
    		</View>
    	);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#96ceb4',
		padding: 20,
	},
	createButtonContainer: {
		backgroundColor: '#74BE9B',
		paddingVertical: 15,
		marginBottom: 10,
	},
	buttonText: {
		textAlign: 'center',
		color: '#fff',
		fontWeight: '700',
	},
	input: {
		height: 40,
		backgroundColor: 'rgba(255, 255, 255, 0.7)',
		paddingHorizontal: 10,
		marginBottom: 10,
	},
});

AppRegistry.registerComponent('SignUp', () => SignUp);
