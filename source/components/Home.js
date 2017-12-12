import React from 'react';
import { StyleSheet, Text, View, AppRegistry, TouchableOpacity, Alert, TextInput, KeyboardAvoidingView, Image, ImageBackground , Modal} from 'react-native';
import axios from 'axios';
export default class Home extends React.Component {
	static navigationOptions = {
		title: 'Home',
		header: null,
	};
	//TO-DO:
	//Style a "get bottle" button and display # of available bottles to user
	//Make clicking a bottle do more than just make it disappear
	//Figure out why API not working xd
	//Add # to available bottles each day @ midnight
	constructor() {
		super();
		this.state = {
			//filled with ints for testing, api stopped working for me
			available_list: [],
			owned_list: [],
			pending_bottles: 0,
			available_bottles: 10,
			owned_bottles: 0,
			beach_tier: 0,
			showbottle1: false,
			showbottle2: false,
			showbottle3: false,
			showModal: false,
			modalMessage: '',
		}
	}
	//Adds a bottle if there aren't already 3 on the beach and the user has available bottles
	addBottle = () => {
		if(this.state.pending_bottles < 3 && this.state.available_bottles > 0){
			this.state.pending_bottles = this.state.pending_bottles + 1;
			this.state.available_bottles = this.state.available_bottles - 1;
			if(!this.state.showbottle1){
				this.setState({showbottle1: true});
			}
			else if(!this.state.showbottle2){
				this.setState({showbottle2: true});
			}
			else if(!this.state.showbottle3){
				this.setState({showbottle3: true});
			}
		}
	}
	clickedBottle1 = () => {
		if(this.state.showbottle1){
			this.setState({showbottle1: false});
			this.state.pending_bottles = this.state.pending_bottles - 1;
			//var bottle_id = Math.floor(Math.random()*this.state.available_list.length);
			var bottle_id = 0;
			this.setState({modalMessage: this.state.available_list[bottle_id].content});
			this.state.owned_list.push(this.state.available_list[bottle_id]);
			this.state.available_list.splice(bottle_id, 1);
			this.state.owned_bottles = this.state.owned_list.length;
			this.setState({showModal: true});
		}
	}
	clickedBottle2 = () => {
		if(this.state.showbottle2){
			this.setState({showbottle2: false});
			this.state.pending_bottles = this.state.pending_bottles - 1;
			//var bottle_id = Math.floor(Math.random()*this.state.available_list.length);
			var bottle_id = 0;
			this.setState({modalMessage: this.state.available_list[bottle_id].content});
			this.state.owned_list.push(this.state.available_list[bottle_id]);
			this.state.available_list.splice(bottle_id, 1);
			this.state.owned_bottles = this.state.owned_list.length;
			this.setState({showModal: true});
		}
	}
	clickedBottle3 = () => {
		if(this.state.showbottle3){
			this.setState({showbottle3: false});
			this.state.pending_bottles = this.state.pending_bottles - 1;
			//var bottle_id = Math.floor(Math.random()*this.state.available_list.length);
			var bottle_id = 0;
			this.setState({modalMessage: this.state.available_list[bottle_id].content});
			this.state.owned_list.push(this.state.available_list[bottle_id]);
			this.state.available_list.splice(bottle_id, 1);
			this.state.owned_bottles = this.state.owned_list.length;
			this.setState({showModal: true});
		}
	}
	closeModal = () => {
		this.setState({showModal: false});
	};
	//Get all the bottles into an array
	componentWillMount(){
		let hostname = "10.193.3.50"; //Alec's IP
		let bottleEndpt = "http://" + hostname + ":3000/api/bottles";
		 axios.get(bottleEndpt)
            .then((response) => {
								this.setState({available_list: response.data.data});
								console.log("Filled avaiable bottle array");
								console.log(this.state.available_list.length);
								console.log(this.state.available_list);
            })
            .catch((error) => {
                console.log('Error', JSON.stringify(error));
            });
	}
	//Currently have to put a render for each possible image which is awful because require() needs a string literal
	render() {
		const { navigate } = this.props.navigation;
		if(this.state.beach_tier == 0){
			return (
					<ImageBackground source={require('../assets/beachtier0.png')} style={styles.background}>
					<Modal visible={this.state.showModal}>
						<View style={[styles.container]}>
							<ImageBackground style={{flex:1, justifyContent: 'center', alignSelf: 'center', width: '100%', height: '100%', marginTop: 30,}} source={require('../assets/scroll2.png')}>
								<Text style={styles.content}>{this.state.modalMessage}</Text>
							</ImageBackground>
							<View style={styles.modalButtonContainer}>
								<TouchableOpacity style={[styles.modalButton, {backgroundColor: '#17c11a'}]} onPress={this.closeModal}>
									<Text style={[styles.buttonText, {color: '#fff'}]}>OK</Text>
								</TouchableOpacity>
							</View>
						</View>
					</Modal>
						<View style={styles.buttonContainer}>
							<TouchableOpacity style={styles.button} onPress={this.addBottle}>
								<Text style={styles.buttonText}>Get New Bottle</Text>
							</TouchableOpacity>
						</View>
						{this.state.showbottle1 &&
							<TouchableOpacity style={styles.bottles} onPress={this.clickedBottle1} id = 'bottle1'>
								<Image source = {require('../assets/bottle1.png')} style={[styles.bottles,styles.bottle1]}/>
							</TouchableOpacity>
						}
						{this.state.showbottle2 &&
							<TouchableOpacity style={styles.bottles} onPress={this.clickedBottle2} id = 'bottle2'>
								<Image source = {require('../assets/bottle2.png')} style={[styles.bottles,styles.bottle2]}/>
							</TouchableOpacity>
						}
						{this.state.showbottle3 &&
							<TouchableOpacity style={styles.bottles} onPress={this.clickedBottle3} id = 'bottle3'>
								<Image source = {require('../assets/bottle3.png')} style={[styles.bottles,styles.bottle3]}/>
							</TouchableOpacity>
						}
					</ImageBackground>
	    );
	  }
	}
}

const styles = StyleSheet.create({
	background: {
		width: '100%',
		height: '100%',
	},
	button: {
		backgroundColor: 'rgba(255, 255, 255, 0.7)',
		paddingVertical: 15,
		marginBottom: 20,
		width: 250,
		borderRadius: 10,
	},
	buttonContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20,
	},
	bottles:{

	},
	bottle1:{
		position: 'absolute',
		top: 295,
		left: 20,
		width: 65,
		height: 65
	},
	bottle2:{
		position: 'absolute',
		top: 260,
		left: 75,
		width: 100,
		height: 100
	},
	bottle3:{
		position: 'absolute',
		top: 230,
		left: 135,
		width: 70,
		height: 70
	},
	buttonText: {
		textAlign: 'center',
		color: '#fff',
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
	container: {
		flex: 1,
	},
	content: {
		alignItems: 'center',
		justifyContent: 'center',
		height: 360,
		backgroundColor: 'rgba(255, 255, 255, 0)',
		paddingHorizontal: 10,
		margin: 20,
		fontFamily: 'Allura-Regular',
		fontSize: 24,
	},
});

AppRegistry.registerComponent('Home', () => Home);
