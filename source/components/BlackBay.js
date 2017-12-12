import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Modal, TouchableOpacity, Alert, TextInput, KeyboardAvoidingView, Image, Button, ImageBackground } from 'react-native';
import { Font } from 'expo';

export default class BlackBay extends React.Component {
	static navigationOptions = {
		title: 'BlackBay',
		header: null,
	};
	constructor() {
		super();
		this.state = {
			showModal: false,
			newBottleText: "Hello Bottle",
		}
	}

	async componentDidMount() {
    	await Font.loadAsync({
    		'Allura-Regular': require('../assets/fonts/Allura-Regular.ttf'),
		});
	}


	createNewBottle = () => {
		this.setState({showModal: true});
	};

	selectBottleList() {

	};



	closeModal = () => {
		this.setState({showModal: false});
	};

	saveModalData = (text) => {
		this.setState({newBottleText: text})
	};

	render() {
		const { navigate } = this.props.navigation;
		return (
	        <ImageBackground style={{width: '100%', height: '100%'}} source={require('../assets/blackbay_nathan.jpg')}>
				<Modal visible={this.state.showModal}>
					<View style={[styles.container]}>
						<ImageBackground style={{flex:1, justifyContent: 'center', alignSelf: 'center', width: '100%', height: '100%', marginTop: 30,}} source={require('../assets/scroll2.png')}>
						<TextInput style={styles.input}
							placeholder='Rant Here...'
							autoCorrect={true}
							multiline={true}
							numberOfLines={10}
							blurOnSubmit={true}
							onChangeText={this.saveModalData}
						/>
						</ImageBackground>
						<View style={styles.modalButtonContainer}>
							<TouchableOpacity style={[styles.modalButton, {backgroundColor: '#17c11a'}]} onPress={this.closeModal}>
								<Text style={[styles.buttonText, {color: '#fff'}]}>Keep Bottle</Text>
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
	},
    backgroundImage: {
		height: '100%',
		width: '100%',
    },
	buttonContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 400,
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
	input: {
		alignItems: 'center',
		justifyContent: 'center',
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
		fontFamily: 'Allura-Regular',
		fontSize: 24,
	},
});

AppRegistry.registerComponent('BlackBay', () => BlackBay);
