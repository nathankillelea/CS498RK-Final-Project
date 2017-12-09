import React from 'react';
import { StyleSheet, Text, View, AppRegistry, TouchableOpacity, Alert, TextInput, KeyboardAvoidingView, Image } from 'react-native';

export default class SignUp extends React.Component {
	static navigationOptions = {
		title: 'Sign Up',
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
				<KeyboardAvoidingView behavior="padding">
					<View style={styles.formContainer}>
						<TextInput style={styles.input}
							placeholder="Username"
							returnKeyType="next"
							autoCapitalize="none"
							autoCorrect={false}
							onSubmitEditing={() => this.emailInput.focus()}
						/>
						<TextInput style={styles.input}
							placeholder="Email Address"
							returnKeyType="next"
							autoCapitalize="none"
							autoCorrect={false}
							keyboardType="email-address"
							ref={(input) => this.emailInput = input}
							onSubmitEditing={() => this.passwordInput.focus()}
						/>
						<TextInput style={styles.input}
							placeholder="Password"
							returnKeyType="done"
							secureTextEntry
							ref={(input) => this.passwordInput = input}
						/>
					</View>
					<TouchableOpacity style={styles.createButtonContainer} onPress={this.loginHandler}>
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
