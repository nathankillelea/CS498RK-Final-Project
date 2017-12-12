import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Button, Modal, Alert, TextInput, KeyboardAvoidingView, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
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
            profilePicture: 4,
            password: "",
            preference: 0,
			uri: require('../assets/avatars/beachball.jpg'),
			pref: '',
			showUsername: false,
			showPassword: false,
			showProfilePicture: false,
			showPreferences: false,
			textField: ''

        }
    }

    componentWillMount(){
        let pref = '';

        //thankful, inspirational, comical, meme
        switch(this.state.preference){
            case 0:
                pref = 'Thankful';
                break;
            case 1:
                pref = 'Inspirational';
                break;
            case 2:
                pref = 'Comical';
                break;
            case 3:
                pref = 'Meme';
                break;
            //TODO: Personal Bottle Type Add to Schema
        }

        this.setState({pref: pref});

        let imgPath = require('../assets/avatars/beachball.jpg');
        switch(this.state.profilePicture){
            case 0:
                imgPath = require('../assets/avatars/beachball.jpg'); // Okay
                break;
            case 1:
                imgPath = require('../assets/avatars/crab.jpg'); // Okay
                break;
            case 2:
                imgPath = require('../assets/avatars/frog.jpg'); //
                break;
            case 3:
                imgPath = require('../assets/avatars/mermaid.png'); //Okay
                break;
            case 4:
                imgPath = require('../assets/avatars/pelican.jpg'); // Okay
                break;
            case 5:
                imgPath = require('../assets/avatars/shark.png'); //Okay
                break;
            case 6:
                imgPath = require('../assets/avatars/treasurechest.jpg'); //Okay
                break;
        }

        this.setState({uri: imgPath})
	}

	updateProfilePath = () => {
        let imgPath = require('../assets/avatars/beachball.jpg');
        switch(this.state.profilePicture){
            case 0:
                imgPath = require('../assets/avatars/beachball.jpg'); // Okay
                break;
            case 1:
                imgPath = require('../assets/avatars/crab.jpg'); // Okay
                break;
            case 2:
                imgPath = require('../assets/avatars/frog.jpg'); //
                break;
            case 3:
                imgPath = require('../assets/avatars/mermaid.png'); //Okay
                break;
            case 4:
                imgPath = require('../assets/avatars/pelican.jpg'); // Okay
                break;
            case 5:
                imgPath = require('../assets/avatars/shark.png'); //Okay
                break;
            case 6:
                imgPath = require('../assets/avatars/treasurechest.jpg'); //Okay
                break;
        }

        this.setState({uri: imgPath})
	};

	toggleUserName = () => {
		this.setState({showUsername:true});
	};

    toggleProfilePicture = () => {
        this.setState({showProfilePicture:true});
    };

    togglePreference = () => {
        this.setState({showPreferences:true});
    };

    changeUsername = () => {

    	let newUsername = this.state.textField;
    	console.log(this.newUsername);
    	this.setState({username: newUsername});
		this.setState({showUsername: false});
    };

    changeProfilePictureBall = () => {
    	this.setState({profilePicture:0});
        this.setState({showProfilePicture:false});
        this.updateProfilePath();
    };

    changeProfilePictureCrab = () => {
        this.setState({profilePicture:1});
        this.setState({showProfilePicture:false});
        this.updateProfilePath();
    };

    changeProfilePictureFrog = () => {
        this.setState({profilePicture:2});
        this.setState({showProfilePicture:false});
        this.updateProfilePath();
    };

    changeProfilePictureMermaid = () => {
        this.setState({profilePicture:3});
        this.setState({showProfilePicture:false});
        this.updateProfilePath();
    };

    changeProfilePicturePelican = () => {
        this.setState({profilePicture:4});
        this.setState({showProfilePicture:false});
        this.updateProfilePath();
    };

    changeProfilePictureShark = () => {
        this.setState({profilePicture:5});
        this.setState({showProfilePicture:false});
        this.updateProfilePath();
    };

    changeProfilePictureTreasure = () => {
        this.setState({profilePicture:6});
        this.setState({showProfilePicture:false});
        this.updateProfilePath();
    };

    changePreferenceThankful = () => {
        this.setState({preference:0});
        this.setState({showPreferences:false});
    };

    changeProfilePicturePelican = () => {
        this.setState({preference:1});
        this.setState({showPreferences:false});
    };

    changeProfilePictureShark = () => {
        this.setState({preference:2});
        this.setState({showPreferences:false});
    };

    changeProfilePictureTreasure = () => {
        this.setState({preference:3});
        this.setState({showPreferences:false});
    };

    changePassword = () => {

    };

    changePreference = () => {
        this.setState({showPreferences:false});
    };

    logOut = () => {

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
						<Text>Change UserName</Text>
						<TextInput style={styles.input}
								   placeholder='New UserName'
								   autoCapitalize="none"
								   autoCorrect={true}
								   multiline={true}
								   numberOfLines={10}
								   blurOnSubmit={true}
								   onChangeText={this.updateText}
						/>
						<TouchableOpacity style={[styles.modalButton, {backgroundColor: '#17c11a'}]} onPress={this.changeUsername}>
							<Text style={[styles.buttonText, {color: '#fff'}]}>Keep Bottle</Text>
						</TouchableOpacity>
					</View>
				</Modal>

				<Modal id='Username' visible={this.state.showProfilePicture}>
					<View style={styles.container}>
						<Text>Change Profile Picture</Text>
						<TouchableOpacity style={[styles.modalButton, {backgroundColor: '#17c11a'}]} onPress={this.changeProfilePictureBall}>
							<Text style={[styles.buttonText, {color: '#fff'}]}>Beach Ball</Text>
						</TouchableOpacity>
						<TouchableOpacity style={[styles.modalButton, {backgroundColor: '#17c11a'}]} onPress={this.changeProfilePictureCrab}>
							<Text style={[styles.buttonText, {color: '#fff'}]}>Crab</Text>
						</TouchableOpacity>
						<TouchableOpacity style={[styles.modalButton, {backgroundColor: '#17c11a'}]} onPress={this.changeProfilePictureFrog}>
							<Text style={[styles.buttonText, {color: '#fff'}]}>Frog</Text>
						</TouchableOpacity>

						<TouchableOpacity style={[styles.modalButton, {backgroundColor: '#17c11a'}]} onPress={this.changeProfilePictureMermaid}>
							<Text style={[styles.buttonText, {color: '#fff'}]}>Mermaid</Text>
						</TouchableOpacity>
						<TouchableOpacity style={[styles.modalButton, {backgroundColor: '#17c11a'}]} onPress={this.changeProfilePicturePelican}>
							<Text style={[styles.buttonText, {color: '#fff'}]}>Pelican</Text>
						</TouchableOpacity>
						<TouchableOpacity style={[styles.modalButton, {backgroundColor: '#17c11a'}]} onPress={this.changeProfilePictureShark}>
							<Text style={[styles.buttonText, {color: '#fff'}]}>Shark</Text>
						</TouchableOpacity>
						<TouchableOpacity style={[styles.modalButton, {backgroundColor: '#17c11a'}]} onPress={this.changeProfilePictureTreasure}>
							<Text style={[styles.buttonText, {color: '#fff'}]}>Treasure</Text>
						</TouchableOpacity>
					</View>
				</Modal>

				<View style={styles.avatarContainer}>
					<Avatar
						xlarge
						rounded
						source={this.state.uri}
						onPress={() => console.log("Works!")}
					/>
					<Text style={{marginTop: 10, fontWeight: "bold", fontSize: 24,}}>{this.state.username}</Text>
					<Text style={{marginBottom: 25, marginTop: 5, fontSize: 20}}>Preference: {this.state.pref}</Text>
				</View>
				<View style={styles.buttonContainer}>
					<TouchableOpacity style={styles.button} onPress={this.toggleProfilePicture}>
						<Text style={styles.buttonText}>Change Profile Picture</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={this.toggleUserName}>
						<Text style={styles.buttonText}>Change Username</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={this.togglePreference}>
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
		marginTop: 30,
		marginBottom: 20,
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
