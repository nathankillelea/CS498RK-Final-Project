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
            username: "John",
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

	updatePreferenceText = () => {
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

        this.setState({pref: pref}, this.forceUpdate());
    };

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

        this.setState({uri: imgPath}, this.forceUpdate());
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
    	this.setState({profilePicture:0}, this.updateProfilePath());
        this.setState({showProfilePicture:false});
    };

    changeProfilePictureCrab = () => {
        this.setState({profilePicture:1}, this.updateProfilePath());
        this.setState({showProfilePicture:false});

    };

    changeProfilePictureFrog = () => {
        this.setState({profilePicture:2}, this.updateProfilePath());
        this.setState({showProfilePicture:false});
    };

    changeProfilePictureMermaid = () => {
        this.setState({profilePicture:3}, this.updateProfilePath());
        this.setState({showProfilePicture:false});
    };

    changeProfilePicturePelican = () => {
        this.setState({profilePicture:4}, this.updateProfilePath());
        this.setState({showProfilePicture:false});
    };

    changeProfilePictureShark = () => {
        this.setState({profilePicture:5},this.updateProfilePath());
        this.setState({showProfilePicture:false});
    };

    changeProfilePictureTreasure = () => {
        this.setState({profilePicture:6}, this.updateProfilePath());
        this.setState({showProfilePicture:false});

    };

    changeThankful = () => {
        this.setState({preference:0});
        this.setState({showPreferences:false});
        this.updatePreferenceText();
    };

    changeInspirational = () => {
        this.setState({preference:1});
        this.setState({showPreferences:false});
        this.updatePreferenceText();
    };

    changeComical = () => {
        this.setState({preference:2});
        this.setState({showPreferences:false});
        this.updatePreferenceText();
    };

    changeMeme = () => {
        this.setState({preference:3});
        this.setState({showPreferences:false});
        this.updatePreferenceText();
    };

    changePassword = () => {

    };

    togglePreference = () => {
        this.setState({showPreferences:true});
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
						<TouchableOpacity style={[styles.button, {backgroundColor: '#E4645E'}]} onPress={this.changeUsername}>
							<Text style={[styles.buttonText, {color: '#fff'}]}>Save Username</Text>
						</TouchableOpacity>
					</KeyboardAvoidingView>
				</View>
			</Modal>

			<Modal id='Username' visible={this.state.showProfilePicture}>
				<View style={styles.container}>
					<Text style={styles.headerText}>Change Profile Picture</Text>
					<View style={styles.pictureContainer}>
					<TouchableOpacity style={[styles.button, {backgroundColor: '#E4645E'}]} onPress={this.changeProfilePictureBall}>
						<Text style={[styles.buttonText, {color: '#fff'}]}>Beach Ball</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.button, {backgroundColor: '#E4645E'}]} onPress={this.changeProfilePictureCrab}>
						<Text style={[styles.buttonText, {color: '#fff'}]}>Crab</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.button, {backgroundColor: '#E4645E'}]} onPress={this.changeProfilePictureFrog}>
						<Text style={[styles.buttonText, {color: '#fff'}]}>Frog</Text>
					</TouchableOpacity>

					<TouchableOpacity style={[styles.button, {backgroundColor: '#E4645E'}]} onPress={this.changeProfilePictureMermaid}>
						<Text style={[styles.buttonText, {color: '#fff'}]}>Mermaid</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.button, {backgroundColor: '#E4645E'}]} onPress={this.changeProfilePicturePelican}>
						<Text style={[styles.buttonText, {color: '#fff'}]}>Pelican</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.button, {backgroundColor: '#E4645E'}]} onPress={this.changeProfilePictureShark}>
						<Text style={[styles.buttonText, {color: '#fff'}]}>Shark</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.button, {backgroundColor: '#E4645E'}]} onPress={this.changeProfilePictureTreasure}>
						<Text style={[styles.buttonText, {color: '#fff'}]}>Treasure</Text>
					</TouchableOpacity>
					</View>
				</View>
			</Modal>

                <Modal id='Preferences' visible={this.state.showPreferences}>
                    <View style={styles.container}>
                        <Text style={styles.headerText}>Change Preferences</Text>
												<View style={styles.preferencesContainer}>
                        <TouchableOpacity style={[styles.button, {backgroundColor: '#E4645E'}]} onPress={this.changeThankful}>
                            <Text style={[styles.buttonText, {color: '#fff'}]}>Thankful</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, {backgroundColor: '#E4645E'}]} onPress={this.changeInspirational}>
                            <Text style={[styles.buttonText, {color: '#fff'}]}>Inspirational</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, {backgroundColor: '#E4645E'}]} onPress={this.changeComical}>
                            <Text style={[styles.buttonText, {color: '#fff'}]}>Comical</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.button, {backgroundColor: '#E4645E'}]} onPress={this.changeMeme}>
                            <Text style={[styles.buttonText, {color: '#fff'}]}>Meme</Text>
                        </TouchableOpacity>
												</View>
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
	preferencesContainer: {
		marginTop: 150,
	},
	pictureContainer: {
		marginTop: 75,
	}
});

AppRegistry.registerComponent('Settings', () => Settings);
