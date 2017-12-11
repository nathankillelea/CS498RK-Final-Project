import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Button, Alert, TextInput, KeyboardAvoidingView, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements'

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
						<View style={styles.avatarContainer}>
							<Avatar
							  xlarge
								rounded
							  source={require('../assets/userfrog.jpg')}
							  onPress={() => console.log("Works!")}
							/>
							<Text style={{marginTop: 10, fontWeight: "bold", fontSize: 24,}}>{this.state.username}</Text>
							<Text style={{marginBottom: 25, marginTop: 5, fontSize: 20}}>Preference: {this.state.preference}</Text>
						</View>
						<View style={styles.buttonContainer}>
							<TouchableOpacity style={styles.button} onPress={this.changeProfilePicture}>
								<Text style={styles.buttonText}>Change Profile Picture</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.button} onPress={this.changeUsername}>
								<Text style={styles.buttonText}>Change Username</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.button} onPress={this.changePreference}>
								<Text style={styles.buttonText}>Change Quote Preference</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.button} onPress={this.logOut}>
								<Text style={styles.buttonText}>Logout</Text>
							</TouchableOpacity>
						</View>
					</View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 20,
				backgroundColor: '#FE6F69',
    },
		avatarContainer: {
				flex: 1,
				backgroundColor: '#FE6F69',
				width: Dimensions.get('window').width,
				justifyContent: 'center',
				alignItems: 'center',
				paddingVertical: 10,
				marginTop: 15,
		},
		buttonContainer: {
				flex: 2,
				backgroundColor: '#fff',
				width: Dimensions.get('window').width,
				justifyContent: 'center',
				alignItems: 'center',
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
});

AppRegistry.registerComponent('Settings', () => Settings);
