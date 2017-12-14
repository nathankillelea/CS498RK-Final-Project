import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Modal, TouchableOpacity, Alert, TextInput, KeyboardAvoidingView, Image, Button, ImageBackground } from 'react-native';
import { Font } from 'expo';
import axios from 'axios';

export default class BlackBay extends React.Component {
	static navigationOptions = {
		title: 'BlackBay',
		header: null,
	};
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			newBottleText: "",
			user_data: this.props.navigation.state.params.user_data,
			available_list: this.props.navigation.state.params.available_list,
			owned_list_bottles: this.props.navigation.state.params.owned_list_bottles,
		}
	}

	async componentDidMount() {
    	await Font.loadAsync({
    		'DancingScript-Bold': require('../assets/fonts/DancingScript-Bold.ttf'),
		});
	}


	createNewBottle = () => {
		this.setState({showModal: true});
	};

	closeModal = () => {
		this.setState({showModal: false});
	};

	saveModalData = (text) => {
		this.setState({newBottleText: text})
	};

	sendBottle = () => {
		console.log(this.state.newBottleText);
		console.log(this.state.user_data.username);
		body = {
			//"content": this.state.newBottleText,
			//"author": this.state.user_data.username,
			"content": this.state.newBottleText,
			"author": this.state.user_data.username,
			"genre": 0,
			"isPublic": true
		}
		let hostname = "messageinarawr498.herokuapp.com";
		let bottleEndpt = "https://" + hostname + "/api/bottles";
		axios.post(bottleEndpt, body)
			.then((response) => {
				console.log("Response went through.");
				console.log(response);
				console.log("Is your response.");
			})
			.catch((error) => {
				console.log('Error', JSON.stringify(error));
			});
		this.setState({showModal: false});
	};

	render() {
		const { navigate } = this.props.navigation;
		return (
	        <ImageBackground style={{width: '100%', height: '100%'}} source={require('../assets/blackbay_nathan.jpg')}>
				<Modal visible={this.state.showModal} onRequestClose={()=> setState(showModal: false)}>
					<View style={[styles.container]}>
						<ImageBackground style={{flex:1, justifyContent: 'center', alignSelf: 'center', width: 375, height: 513, marginTop: 20,}} source={require('../assets/lower-res-scroll2.png')}>
						<TextInput style={styles.input}
							placeholder='Vent Here...'
							autoCorrect={true}
							multiline={true}
							numberOfLines={10}
							blurOnSubmit={true}
							onChangeText={this.saveModalData}
						/>
						</ImageBackground>
						<View style={styles.modalButtonContainer}>
							<TouchableOpacity style={[styles.modalButton, {backgroundColor: '#17c11a'}]} onPress={this.sendBottle}>
								<Text style={[styles.buttonText, {color: '#fff'}]} >Send To Sea</Text>
							</TouchableOpacity>
							<TouchableOpacity style={[styles.modalButton, {backgroundColor: '#c4301d'}]} onPress={this.closeModal}>
								<Text style={[styles.buttonText, {color: '#fff'}]}>Throw Away</Text>
							</TouchableOpacity>
						</View>
					</View>
				</Modal>
				<View style={styles.buttonContainer}>
					<TouchableOpacity style={styles.button} onPress={this.createNewBottle}>
						<Text style={styles.buttonText}>Make New Bottle</Text>
					</TouchableOpacity>
				</View>
	        </ImageBackground>
    	);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ADD8E6',
	},
  backgroundImage: {
		height: '100%',
		width: '100%',
  },
	buttonContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 525,
	},
	button: {
		backgroundColor: 'rgba(255, 255, 255, 0.7)',
		paddingVertical: 15,
		marginBottom: 20,
		width: 250,
		borderRadius: 10,
	},
	buttonText: {
		textAlign: 'center',
		fontWeight: '700',
	},
	modalButtonContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	modalButton: {
		paddingVertical: 15,
		marginBottom: 20,
		width: 250,
		borderRadius: 10,
	},
	input: {
		height: 360,
		backgroundColor: 'rgba(255, 255, 255, 0)',
		paddingHorizontal: 10,
		margin: 20,
		fontFamily: 'DancingScript-Bold',
		fontSize: 24,
	},
});

AppRegistry.registerComponent('BlackBay', () => BlackBay);
