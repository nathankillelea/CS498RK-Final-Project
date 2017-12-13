import React from 'react';
import { StyleSheet, Text, View, AppRegistry, TouchableOpacity, Alert, TextInput, KeyboardAvoidingView, Image, Modal, Keyboard } from 'react-native';
import axios from 'axios';

export default class SignUp extends React.Component {
	static navigationOptions = {
		title: 'Sign Up',
		header: null,
	};
	constructor() {
		super();
		this.state = {
				showCreated: false,
				username: '',
				email: '',
				password: '',
				errorMessage: false,
				createMessage: false,
		}
	}
	createAccount = () => {
		Keyboard.dismiss();
		this.setState({errorMessage: false})
		this.setState({createMessage: false})
		body = {
			"username": this.state.username,
			"email": this.state.email,
			"password": this.state.password,
		}
		console.log(body)
		let hostname = "messageinarawr498.herokuapp.com"; //NATHAN's computer
		let bottleEndpt = "https://" + hostname + "/api/register";
		axios.post(bottleEndpt, body)
			.then((response) => {
				console.log("Response went through.");
				console.log(response);
				console.log("Is your response.");
				this.setState({createMessage: true});
				this.props.navigation.navigate('Login')
			})
			.catch((error) => {
				console.log('Error', JSON.stringify(error));
				this.setState({errorMessage: true})
			});
	}
	render() {
		const { navigate } = this.props.navigation;
		return (
    		<View style={styles.container}>
				<View style={styles.logoContainer}>
					<Image style={styles.logo}
						source={require('../assets/paper.png')}
					/>
				</View>
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
					<TouchableOpacity style={styles.createButtonContainer} onPress={() => navigate('Login')}>
						<Text style={styles.buttonText}>Cancel</Text>
					</TouchableOpacity>
					{this.state.errorMessage &&
				  	<Text style={{color: 'red'}}>Error Creating Account!</Text>
					}
					{this.state.createMessage &&
						<Text style={{color: 'green'}}>Account Created!</Text>
					}
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
	logoContainer: {
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center',
	},
	logo: {
		width: 150,
		height: 150,
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
	button: {
		backgroundColor: '#E4645E',
		paddingVertical: 15,
		marginBottom: 20,
		width: 250,
		borderRadius: 10,
	},
	buttonText: {
		textAlign: 'center',
		color: '#fff',
		fontWeight: '700',
	},
	formContainer: {

	}
});

AppRegistry.registerComponent('SignUp', () => SignUp);
