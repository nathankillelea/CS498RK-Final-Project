import React from 'react';
import { StyleSheet, Text, View, AppRegistry, TouchableOpacity, TextInput, KeyboardAvoidingView, Image, StatusBar } from 'react-native';

export default class Login extends React.Component {
	static navigationOptions = {
		title: 'Login',
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

				/>
				<View style={styles.logoContainer}>
					<Image style={styles.logo}
						source={require('../assets/paper.png')}
					/>
				</View>
				<KeyboardAvoidingView behavior="padding">
					<View style={styles.formContainer}>
						<TextInput style={styles.input}
							placeholder="Email"
							returnKeyType="next"
							onSubmitEditing={() => this.passwordInput.focus()}
							autoCapitalize="none"
							autoCorrect={false}
						/>
						<TextInput style={styles.input}
							placeholder="Password"
							secureTextEntry
							returnKeyType="done"
							ref={(input) => this.passwordInput = input}
						/>
					</View>
					<TouchableOpacity style={styles.loginButtonContainer} onPress={() => navigate('Home')}>
						<Text style={styles.buttonText}>Login</Text>
					</TouchableOpacity>
					<View style={styles.signUpWrapper}>
						<Text style={styles.signUpText}>Not a user?</Text>
						<TouchableOpacity style={styles.signUpButtonContainer} onPress={() => navigate('SignUp')}>
							<Text style={styles.buttonText}>Sign Up</Text>
						</TouchableOpacity>
					</View>
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
	loginButtonContainer: {
		backgroundColor: '#74BE9B',
		paddingVertical: 15,
		marginBottom: 10,
	},
	signUpWrapper: {
		alignSelf: 'flex-end',
		flexDirection: 'row',
		alignItems: 'center',
	},
	signUpText: {
		color: '#fff',
	},
	signUpButtonContainer: {
		backgroundColor: '#74BE9B',
		paddingVertical: 15,
		width: 65,
		marginLeft: 10,
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

AppRegistry.registerComponent('Login', () => Login);
