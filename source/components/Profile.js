import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Button, Modal, Alert, TextInput, KeyboardAvoidingView, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements'
import axios from 'axios';

export default class Settings extends React.Component {
		static navigationOptions = {
        title: 'Settings',
        header: null,
    };
    constructor(props) {
        super(props);
				// CHANGE THIS TO B E THE REAL USERNAME LOL
        this.state = {
            username: this.props.navigation.state.params.user_data.username,
            profilePicture: this.props.navigation.state.params.user_data.profilePicture,
            password: "",
						uri: require('../assets/avatars/beachball.jpg'),
						showUsername: false,
						showPassword: false,
						showProfilePicture: false,
						textField: '',
						user_data: this.props.navigation.state.params.user_data,
						available_list: this.props.navigation.state.params.available_list,
						owned_list_bottles: this.props.navigation.state.params.owned_list_bottles,
        }
    }

    componentWillMount() {


        let imgPath = require('../assets/avatars/beachball.jpg');
        if(this.state.profilePicture === "0") {
        	imgPath = require('../assets/avatars/beachball.jpg');
        }
				else if(this.state.profilePicture === "1") {
        	imgPath = require('../assets/avatars/crab.jpg');
        }
				else if(this.state.profilePicture === "2") {
        	imgPath = require('../assets/avatars/frog.jpg');
        }
				else if(this.state.profilePicture === "3") {
        	imgPath = require('../assets/avatars/mermaid.png');
        }
				else if(this.state.profilePicture === "4") {
        	imgPath = require('../assets/avatars/pelican.jpg');
        }
				else if(this.state.profilePicture === "5") {
        	imgPath = require('../assets/avatars/shark.png');
        }
				else if(this.state.profilePicture === "6") {
        	imgPath = require('../assets/avatars/treasurechest.jpg');
        }
        this.setState({uri: imgPath})
	}

	toggleUserName = () => {
		this.setState({showUsername:true});
	};

    toggleProfilePicture = () => {
        this.setState({showProfilePicture:true});
    };
    changeUsername = () => {
    	let newUsername = this.state.textField;
    	console.log(newUsername);
    	this.setState({username: newUsername});
			this.setState({showUsername: false});
			let hostname = "messageinarawr498.herokuapp.com";
			let bottleEndpt = "https://" + hostname + "/api/users/" + this.state.user_data._id;
			body = {
				username: newUsername,
			}
			axios.put(bottleEndpt, body)
								.then((response) => {
									console.log("username changed!!")
								})
								.catch((error) => {
									console.log('Error With Put', JSON.stringify(error));
								})
    };

    changeProfilePictureBall = () => {
	    	this.setState({profilePicture:0});
	      this.setState({showProfilePicture:false});
				this.setState({uri: require('../assets/avatars/beachball.jpg')});
				let hostname = "messageinarawr498.herokuapp.com";
				let bottleEndpt = "https://" + hostname + "/api/users/" + this.state.user_data._id;
				body = {
					profilePicture: "0",
				}
				axios.put(bottleEndpt, body)
									.then((response) => {

									})
									.catch((error) => {
										console.log('Error With Put', JSON.stringify(error));
									})
    };

    changeProfilePictureCrab = () => {
	      this.setState({profilePicture:1});
	      this.setState({showProfilePicture:false});
				this.setState({uri: require('../assets/avatars/crab.jpg')});
				let hostname = "messageinarawr498.herokuapp.com";
				let bottleEndpt = "https://" + hostname + "/api/users/" + this.state.user_data._id;
				body = {
					profilePicture: "1",
				}
				axios.put(bottleEndpt, body)
									.then((response) => {

									})
									.catch((error) => {
										console.log('Error With Put', JSON.stringify(error));
									})
    };

    changeProfilePictureFrog = () => {
        this.setState({profilePicture:2});
        this.setState({showProfilePicture:false});
				this.setState({uri: require('../assets/avatars/frog.jpg')});
				let hostname = "messageinarawr498.herokuapp.com";
				let bottleEndpt = "https://" + hostname + "/api/users/" + this.state.user_data._id;
				body = {
					profilePicture: "2",
				}
				axios.put(bottleEndpt, body)
									.then((response) => {

									})
									.catch((error) => {
										console.log('Error With Put', JSON.stringify(error));
									})
    };

    changeProfilePictureMermaid = () => {
        this.setState({profilePicture:3});
        this.setState({showProfilePicture:false});
				this.setState({uri: require('../assets/avatars/mermaid.png')});
				let hostname = "messageinarawr498.herokuapp.com";
				let bottleEndpt = "https://" + hostname + "/api/users/" + this.state.user_data._id;
				body = {
					profilePicture: "3",
				}
				axios.put(bottleEndpt, body)
									.then((response) => {

									})
									.catch((error) => {
										console.log('Error With Put', JSON.stringify(error));
									})
    };

    changeProfilePicturePelican = () => {
        this.setState({profilePicture:4});
        this.setState({showProfilePicture:false});
				this.setState({uri: require('../assets/avatars/pelican.jpg')});
				let hostname = "messageinarawr498.herokuapp.com";
				let bottleEndpt = "https://" + hostname + "/api/users/" + this.state.user_data._id;
				body = {
					profilePicture: "4",
				}
				axios.put(bottleEndpt, body)
									.then((response) => {

									})
									.catch((error) => {
										console.log('Error With Put', JSON.stringify(error));
									})
    };

    changeProfilePictureShark = () => {
        this.setState({profilePicture:5});
        this.setState({showProfilePicture:false});
				this.setState({uri: require('../assets/avatars/shark.png')});
				let hostname = "messageinarawr498.herokuapp.com";
				let bottleEndpt = "https://" + hostname + "/api/users/" + this.state.user_data._id;
				body = {
					profilePicture: "5",
				}
				axios.put(bottleEndpt, body)
									.then((response) => {

									})
									.catch((error) => {
										console.log('Error With Put', JSON.stringify(error));
									})
    };

    changeProfilePictureTreasure = () => {
        this.setState({profilePicture:6});
        this.setState({showProfilePicture:false});
				this.setState({uri: require('../assets/avatars/treasurechest.jpg')});
				let hostname = "messageinarawr498.herokuapp.com";
				let bottleEndpt = "https://" + hostname + "/api/users/" + this.state.user_data._id;
				body = {
					profilePicture: "6",
				}
				axios.put(bottleEndpt, body)
									.then((response) => {

									})
									.catch((error) => {
										console.log('Error With Put', JSON.stringify(error));
									})
    };
    updateText = (text) => {
        this.setState({textField: text})
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
					<View style={styles.container}>
					<Modal id='Username' visible={this.state.showUsername}>
						<View style={styles.container}>
							<Text style={styles.headerText}>Change Username</Text>
							<KeyboardAvoidingView behavior="padding">
								<TextInput style={styles.input}
											 placeholder='New Username'
											 autoCapitalize="none"
											 blurOnSubmit={true}
											 onChangeText={this.updateText}
								/>
								<TouchableOpacity style={[styles.button, {backgroundColor: '#2C5461'}]} onPress={this.changeUsername}>
									<Text style={[styles.buttonText, {color: '#fff'}]}>Save Username</Text>
								</TouchableOpacity>
								<TouchableOpacity style={[styles.button, {backgroundColor: '#2C5461'}]} onPress={ () => {this.setState({showUsername: false});}}>
									<Text style={[styles.buttonText, {color: '#fff'}]}>Cancel</Text>
								</TouchableOpacity>
							</KeyboardAvoidingView>
						</View>
					</Modal>

					<Modal id='Username' visible={this.state.showProfilePicture}>
						<View style={styles.container}>
							<Text style={styles.headerText}>Change Profile Picture</Text>
							<View style={styles.pictureContainer}>
							<TouchableOpacity style={[styles.button, {backgroundColor: '#2C5461'}]} onPress={this.changeProfilePictureBall}>
								<Text style={[styles.buttonText, {color: '#fff'}]}>Beach Ball</Text>
							</TouchableOpacity>
							<TouchableOpacity style={[styles.button, {backgroundColor: '#2C5461'}]} onPress={this.changeProfilePictureCrab}>
								<Text style={[styles.buttonText, {color: '#fff'}]}>Crab</Text>
							</TouchableOpacity>
							<TouchableOpacity style={[styles.button, {backgroundColor: '#2C5461'}]} onPress={this.changeProfilePictureFrog}>
								<Text style={[styles.buttonText, {color: '#fff'}]}>Frog</Text>
							</TouchableOpacity>

							<TouchableOpacity style={[styles.button, {backgroundColor: '#2C5461'}]} onPress={this.changeProfilePictureMermaid}>
								<Text style={[styles.buttonText, {color: '#fff'}]}>Mermaid</Text>
							</TouchableOpacity>
							<TouchableOpacity style={[styles.button, {backgroundColor: '#2C5461'}]} onPress={this.changeProfilePicturePelican}>
								<Text style={[styles.buttonText, {color: '#fff'}]}>Pelican</Text>
							</TouchableOpacity>
							<TouchableOpacity style={[styles.button, {backgroundColor: '#2C5461'}]} onPress={this.changeProfilePictureShark}>
								<Text style={[styles.buttonText, {color: '#fff'}]}>Shark</Text>
							</TouchableOpacity>
							<TouchableOpacity style={[styles.button, {backgroundColor: '#2C5461'}]} onPress={this.changeProfilePictureTreasure}>
								<Text style={[styles.buttonText, {color: '#fff'}]}>Treasure</Text>
							</TouchableOpacity>
							</View>
						</View>
					</Modal>
				<View style={styles.avatarContainer}>
					<Avatar
						xlarge
						rounded
						source={this.state.uri}
					/>
					<Text style={{marginTop: 10, fontWeight: "bold", fontSize: 24,}}>{this.state.username}</Text>
				</View>
				<View style={styles.buttonContainer}>
					<TouchableOpacity style={styles.button} onPress={this.toggleProfilePicture}>
						<Text style={styles.buttonText}>Change Profile Picture</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={this.toggleUserName}>
						<Text style={styles.buttonText}>Change Username</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={() => navigate('Login')}>
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
				backgroundColor: '#ADD8E6',
    },
	avatarContainer: {
		flex: 1,
		backgroundColor: '#ADD8E6',
		width: Dimensions.get('window').width,
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 10,
		paddingTop: 30,
		marginBottom: 20,
	},
	buttonContainer: {
		flex: 2,
		backgroundColor: '#fff',
		width: Dimensions.get('window').width,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgb(252, 215, 178)'
	},
	button: {
		backgroundColor: '#DBBB9B',
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
	headerText: {
		marginTop: 10,
		marginBottom: 10,
		fontWeight: "bold",
		fontSize: 36,
	},
	input: {
		height: 40,
		backgroundColor: 'rgba(255, 255, 255, 0.7)',
		paddingHorizontal: 10,
		marginBottom: 10,
		width: 250,
		marginTop: 225,
	},
	pictureContainer: {
		marginTop: 75,
	}
});

AppRegistry.registerComponent('Settings', () => Settings);
