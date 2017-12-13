import React from 'react';
import { StyleSheet, Text, View, AppRegistry, TouchableOpacity, Alert, TextInput, KeyboardAvoidingView, Image, ImageBackground , Modal} from 'react-native';
import axios from 'axios';
import { AppLoading, Asset, Font } from 'expo';

export default class Home extends React.Component {
	static navigationOptions = {
		title: 'Home',
		header: null,
	};
	//TO-DO:
	//Style a "get bottle" button and display # of available bottles to user
	//Add # to available bottles each day @ midnight
	constructor() {
		super(props);
		this.state = {
			available_list: [],
			owned_list_id: this.props.navigation.state.params.owned,
			owned_list_bottles: [],
			pending_bottles: 0,
			available_bottles: 100,
			owned_bottles: this.props.navigation.state.params.owned_bottles,
			beach_tier: this.props.navigation.state.params.completedTasks,
			showbottle1: false,
			showbottle2: false,
			showbottle3: false,
			showModal: false,
			modalMessage: '',
			modalAuthor: '',
			profilePicture: this.props.navigation.state.params.profilepicture,
			tasks: this.props.navigation.state.params.tasks,
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
			this.setState({modalAuthor: this.state.available_list[bottle_id].author});
			this.state.owned_list_bottles.push(this.state.available_list[bottle_id]);
			//axios.push this new owned_list
			this.state.available_list.splice(bottle_id, 1);
			this.state.owned_bottles = this.state.owned_list_bottles.length;
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
			this.setState({modalAuthor: this.state.available_list[bottle_id].author});
			this.state.owned_list_bottles.push(this.state.available_list[bottle_id]);
			//axios.push this new owned_list
			this.state.available_list.splice(bottle_id, 1);
			this.state.owned_bottles = this.state.owned_list_bottles.length;
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
			this.setState({modalAuthor: this.state.available_list[bottle_id].author});
			this.state.owned_list_bottles.push(this.state.available_list[bottle_id]);
			//axios.push this new owned_list
			this.state.available_list.splice(bottle_id, 1);
			this.state.owned_bottles = this.state.owned_list_bottles.length;
			this.setState({showModal: true});
		}
	}
	closeModal = () => {
		this.setState({showModal: false});
	};
	//Get all the bottles into an array
	componentWillMount() {
		let hostname = "10.193.3.50"; //Alec's IP
		let bottleEndpt = "http://" + hostname + ":3000/api/bottles";
		axios.get(bottleEndpt)
            .then((response) => {
							let available_list = reponse.data.data;
							let owned_list_id = this.state.owned_list;
							let owned_list_bottles = [];
							let found = 0;
							for(i=0;i<available_list.length;i++){
								current_bottle_id = available_list[i]._id
								found = 0;
								for(j=0;j<owned_list_id.length;j++){
									if(current_bottle_id===owned_list_id[j]){
										owned_list_bottles.push(available_list[i]);
										available_list.splice(i,1);
										found = 1;
									}
									if(found == 1){
										break;
									}
								}
								this.setState(available_list: available_list);
								this.setState(owned_list_bottles: owned_list_bottles);
							}
								//loop thru available_list nested loop for each item that looks thru owned_list, remove current element from available_list if it is owned_list
								//this.setState({available_list: available_list});

            })
            .catch((error) => {
                console.log('Error', JSON.stringify(error));
            });

	}
	//Currently have to put a render for each possible image which is awful because require() needs a string literal
	render() {
		const { navigate } = this.props.navigation;
		if(this.state.beach_tier == 0) {
			return (
				<ImageBackground source={require('../assets/beachtier0.png')} style={styles.background}>
					<Modal visible={this.state.showModal}>
						<View style={[styles.container]}>
							<ImageBackground style={{flex: 1, justifyContent: 'center', alignSelf: 'center', width: '100%', height: '100%', marginTop: 30,}} source={require('../assets/lower-res-scroll2.png')}>
								<Text style={styles.content}>{this.state.modalMessage}</Text>
								<Text style={styles.author}>-{this.state.modalAuthor}</Text>
							</ImageBackground>
							<View style={styles.modalButtonContainer}>
								<TouchableOpacity style={[styles.modalButton, {backgroundColor: '#17c11a'}]} onPress={this.closeModal}>
									<Text style={[styles.buttonText, {color: '#fff'}]}>OK</Text>
								</TouchableOpacity>
							</View>
						</View>
					</Modal>
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
					<View style={styles.buttonContainer}>
						<TouchableOpacity style={styles.button} onPress={this.addBottle}>
							<Text style={styles.buttonText}>Get New Bottle</Text>
						</TouchableOpacity>
					</View>
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
		marginTop: 525,
	},
	bottles: {

	},
	bottle1: {
		position: 'absolute',
		top: 380, // 295
		left: 20,
		width: 65,
		height: 65
	},
	bottle2: {
		position: 'absolute',
		top: 345, // 260
		left: 75,
		width: 100,
		height: 100
	},
	bottle3: {
		position: 'absolute',
		top: 315, // 230
		left: 135,
		width: 70,
		height: 70
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
	container: {
		flex: 1,
		backgroundColor: '#ADD8E6',
	},
	content: {
		alignItems: 'center',
		justifyContent: 'center',
		height: 360,
		backgroundColor: 'rgba(255, 255, 255, 0)',
		paddingHorizontal: 10,
		marginLeft: 20,
		fontFamily: 'Allura-Regular',
		fontSize: 24,
		marginBottom: 10,
	},
	author: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(255, 255, 255, 0)',
		paddingHorizontal: 10,
		marginLeft: 20,
		fontFamily: 'Allura-Regular',
		fontSize: 24,
		marginBottom: 10,
	},
});

AppRegistry.registerComponent('Home', () => Home);
