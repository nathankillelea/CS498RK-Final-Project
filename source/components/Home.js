import React from 'react';
import { StyleSheet, Text, View, AppRegistry, TouchableOpacity, Alert, TextInput, KeyboardAvoidingView, Image, ImageBackground , Modal } from 'react-native';
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
	constructor(props) {
		super(props);
		this.state = {
			user_data: this.props.navigation.state.params.user_data,
			available_list: this.props.navigation.state.params.available_list,
			owned_list_bottles: this.props.navigation.state.params.owned_list_bottles,
			pending_bottles: 0,
			available_bottles: 50,
			showbottle1: false,
			showbottle2: false,
			showbottle3: false,
			showModal: false,
			modalMessage: '',
			modalAuthor: '',
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

			//Show The Bottle & Update Counter
			this.setState({showbottle1: false});
			this.state.pending_bottles = this.state.pending_bottles - 1;

			//Decide what bottle they get
			//var bottle_id = Math.floor(Math.random()*this.state.available_list.length);
			var bottle_id = 0;
			let strIn = '';

			//Set states with info
			this.setState({modalMessage: this.state.available_list[bottle_id].content});
			this.setState({modalAuthor: this.state.available_list[bottle_id].author});

			//update local info
			this.state.owned_list_bottles.push(this.state.available_list[bottle_id]);
			this.state.user_data.owned.push(this.state.available_list[bottle_id]._id);

			//Aka if all bottles were deleted making the array = ["", ""]
			if(this.state.user_data.owned.length == 2 && this.state.user_data.owned[0] === "" && this.state.user_data.owned[1] === ""){
				strIn = this.state.available_list[bottle_id]._id;
			}
			else{
				for(i=0;i<this.state.user_data.owned.length;i++){
					if(i == 0){
						strIn = this.state.user_data.owned[0];
					}
					else{
						strIn = strIn + " " + this.state.user_data.owned[i];
					}
				}
				strIn = strIn + this.state.available_list[bottle_id]._id;
			}

			this.state.available_list.splice(bottle_id, 1);

			//update the data for user PUT
			this.state.user_data.owned = this.state.user_data.owned;
			let hostname = "messageinarawr498.herokuapp.com";
			let bottleEndpt = "https://" + hostname + "/api/users/" + this.state.user_data._id;
			body = {
				owned: strIn,
			}
			axios.put(bottleEndpt, body)
								.then((response) => {

								})
								.catch((error) => {
									console.log('Error With Put', JSON.stringify(error));
								})
			this.setState({showModal: true});
		}
	}
	clickedBottle2 = () => {
		if(this.state.showbottle2){

			//Show The Bottle & Update Counter
			this.setState({showbottle2: false});
			this.state.pending_bottles = this.state.pending_bottles - 1;

			//Decide what bottle they get
			//var bottle_id = Math.floor(Math.random()*this.state.available_list.length);
			var bottle_id = 0;
			let strIn = '';

			//Set states with info
			this.setState({modalMessage: this.state.available_list[bottle_id].content});
			this.setState({modalAuthor: this.state.available_list[bottle_id].author});

			//update local info
			this.state.owned_list_bottles.push(this.state.available_list[bottle_id]);
			this.state.user_data.owned.push(this.state.available_list[bottle_id]._id);

			//Aka if all bottles were deleted making the array = ["", ""]
			if(this.state.user_data.owned.length == 2 && this.state.user_data.owned[0] === "" && this.state.user_data.owned[1] === ""){
				strIn = this.state.available_list[bottle_id]._id;
			}
			else{
				for(i=0;i<this.state.user_data.owned.length;i++){
					if(i == 0){
						strIn = this.state.user_data.owned[0];
					}
					else{
						strIn = strIn + " " + this.state.user_data.owned[i];
					}
				}
				strIn = strIn + this.state.available_list[bottle_id]._id;
			}

			this.state.available_list.splice(bottle_id, 1);

			//update the data for user PUT
			this.state.user_data.owned = this.state.user_data.owned;
			let hostname = "messageinarawr498.herokuapp.com";
			let bottleEndpt = "https://" + hostname + "/api/users/" + this.state.user_data._id;
			body = {
				owned: strIn,
			}
			axios.put(bottleEndpt, body)
								.then((response) => {

								})
								.catch((error) => {
									console.log('Error With Put', JSON.stringify(error));
								})
			this.setState({showModal: true});
		}
	}
	clickedBottle3 = () => {
		if(this.state.showbottle3){

			//Show The Bottle & Update Counter
			this.setState({showbottle3: false});
			this.state.pending_bottles = this.state.pending_bottles - 1;

			//Decide what bottle they get
			//var bottle_id = Math.floor(Math.random()*this.state.available_list.length);
			var bottle_id = 0;
			let strIn = '';

			//Set states with info
			this.setState({modalMessage: this.state.available_list[bottle_id].content});
			this.setState({modalAuthor: this.state.available_list[bottle_id].author});

			//update local info
			this.state.owned_list_bottles.push(this.state.available_list[bottle_id]);
			this.state.user_data.owned.push(this.state.available_list[bottle_id]._id);

			//Aka if all bottles were deleted making the array = ["", ""]
			if(this.state.user_data.owned.length == 2 && this.state.user_data.owned[0] === "" && this.state.user_data.owned[1] === ""){
				strIn = this.state.available_list[bottle_id]._id;
			}
			//its legit just a new user
			else if(this.state.user_data.owned.length == 0){
				strIn = this.state.available_list[bottle_id]._id;
			}
			else{
				for(i=0;i<this.state.user_data.owned.length;i++){
					if(i == 0){
						strIn = this.state.user_data.owned[0];
					}
					else{
						strIn = strIn + " " + this.state.user_data.owned[i];
					}
				}
				strIn = strIn + this.state.available_list[bottle_id]._id;
			}
			this.state.available_list.splice(bottle_id, 1);

			//update the data for user PUT
			this.state.user_data.owned = this.state.user_data.owned;
			let hostname = "messageinarawr498.herokuapp.com";
			let bottleEndpt = "https://" + hostname + "/api/users/" + this.state.user_data._id;
			body = {
				owned: strIn,
			}
			axios.put(bottleEndpt, body)
								.then((response) => {

								})
								.catch((error) => {
									console.log('Error With Put', JSON.stringify(error));
								})
			this.setState({showModal: true});
		}
	}
	closeModal = () => {
		this.setState({showModal: false});
	}
	//Get all the bottles into an array
	/*componentWillMount() {
		let hostname = "messageinarawr498.herokuapp.com";
		let bottleEndpt = "https://" + hostname + "/api/bottles";
		axios.get(bottleEndpt)
            .then((response) => {
							let available_list = [];
							let total_list = response.data.data;
							let owned_list = this.state.user_data.owned;
							let owned_list_bottles = [];
							let found = 0;
							let j = 0;
							let i = 0;
							//console.log("I'm bouta start checkin my list");
							//console.log(total_list.length);
							for(i=0;i<total_list.length;i++){
								//console.log("outer loop iteration");
								current_bottle_id = total_list[i]._id;
								found = 0;
								//console.log(owned_list.)
								for(j=0;j<owned_list.length;j++){
									//console.log("inner loop iteration");
									if(current_bottle_id===owned_list[j]){
										//console.log("I found a bottle I own:");
										//console.log(total_list[i]);
										owned_list_bottles.push(total_list[i]);
										found = 1;
										break;
									}
								}
								//console.log("done with inner loop, lets see what found equals");
								//console.log(found);
								if(found == 0){
									available_list.push(total_list[i]);
									//console.log("Ive added a bottle to my available list");
								}
							}
							this.setState({available_list: available_list});
							this.setState({owned_list_bottles: owned_list_bottles});
							//console.log("available list");
							//console.log(available_list);

            })
            .catch((error) => {
                console.log('Error with bottle get', JSON.stringify(error));
            });

	}*/
	//Currently have to put a render for each possible image which is awful because require() needs a string literal
	render() {
		const { navigate } = this.props.navigation;
		if(this.state.user_data.completedTasks == 0) {
			return (
				<ImageBackground source={require('../assets/beachtier0.png')} style={styles.background}>
					<Modal visible={this.state.showModal}>
						<View style={[styles.container]}>
							<ImageBackground style={{flex: 1, justifyContent: 'center', alignSelf: 'center', width: '100%', height: '100%', marginTop: 30,}} source={require('../assets/lower-res-scroll2.png')}>
								<Text style={styles.content}>{this.state.modalMessage}</Text>
								<Text style={styles.author}>-{this.state.modalAuthor}</Text>
							</ImageBackground>
							<View style={styles.modalButtonContainer}>
								<TouchableOpacity style={[styles.modalButton, {backgroundColor: '#17c11a'}]}

								  onPress={() => {
	                  this.setState({showModal: false});
	                  this.props.navigation.navigate('BottleList', {user_data: this.state.user_data, available_list: this.state.available_list, owned_list_bottles: this.state.owned_list_bottles})
                	}}>

									<Text style={[styles.buttonText, {color: '#fff'}]}>SEE BOTTLE LIST</Text>
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
		else if(this.state.user_data.completedTasks == 1) {
			return (
				<ImageBackground source={require('../assets/beachtier1.png')} style={styles.background}>
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
		else if(this.state.user_data.completedTasks == 2) {
			return (
				<ImageBackground source={require('../assets/beachtier2.png')} style={styles.background}>
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
		else if(this.state.user_data.completedTasks == 3) {
			return (
				<ImageBackground source={require('../assets/beachtier3.png')} style={styles.background}>
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
		else if(this.state.user_data.completedTasks == 4) {
			return (
				<ImageBackground source={require('../assets/beachtier4.png')} style={styles.background}>
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
		else if(this.state.user_data.completedTasks == 5) {
			return (
				<ImageBackground source={require('../assets/beachtier5.png')} style={styles.background}>
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
		else if(this.state.user_data.completedTasks == 6) {
			return (
				<ImageBackground source={require('../assets/beachtier6.png')} style={styles.background}>
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
