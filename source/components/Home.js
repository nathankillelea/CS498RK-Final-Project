import React from 'react';
import { StyleSheet, Text, View, AppRegistry, TouchableOpacity, Alert, TextInput, KeyboardAvoidingView, Image, ImageBackground } from 'react-native';
import axios from 'axios';
export default class Home extends React.Component {
	static navigationOptions = {
		title: 'Home',
		header: null,
	};
	//TO-DO:
	//Style a "get bottle" button and display # of available bottles to user
	//Make bottles clickable with invisible buttons
	//Figure out why API not working xd
	//Add # to available bottles each day @ midnight
	constructor() {
		super();
		this.state = {
			//filled with ints for testing, api stopped working for me
			available_list: [1,2,3,4,5,6,7,8,9],
			owned_bottles: [],
			pending_bottles: 0,
			available_bottles: 3,
			beach_tier: 0
		}
	}
	//Adds a bottle if there aren't already 3 on the beach
	addBottle = () => {
		if(this.state.pending_bottles < 3){
			this.state.pending_bottles = this.state.pending_bottles + 1;
			this.forceUpdate();
		}
	}
	//Removes a bottle from pending_bottles counter, re-renders the image to update appropriately.
	clickedBottle = () => {
		/*console.log("Owned Bottles Before");
		console.log(this.state.owned_bottles);
		console.log("Available Bottles Before");
		console.log(this.state.available_list);*/
		if(this.state.pending_bottles > 0){
			var bottle_id = Math.floor(Math.random() * this.state.available_list.length);
			//this.setState({owned_bottles: this.state.owned_bottles.push(this.state.available_list[bottle_id])});
			this.state.owned_bottles.push(this.state.available_list[bottle_id]);
			//this.setState({available_list: this.state.available_list.splice(bottle_id, 1)});
			this.state.available_list.splice(bottle_id, 1)
			this.state.pending_bottles = this.state.pending_bottles - 1;
			this.state.available_bottles = this.state.available_bottles -1; //Need to somehow add 1 or more bottles to this variable each day.
			this.forceUpdate();
		}
		/*console.log("Owned Bottles After");
		console.log(this.state.owned_bottles);
		console.log("Available Bottles After");
		console.log(this.state.available_list.length);*/

	};

	//Get all the bottles into an array
	componentWillMount(){
		let hostname = "192.168.1.67"; //Alec's IP
		let bottleEndpt = "http://" + hostname + ":3000/api/bottles";
		 axios.get(bottleEndpt)
            .then((response) => {
                //console.log("Response went through.");
                //console.log(response);
                //console.log("Is your response.");
								this.setState({available_list: response.data.data});
								console.log("Filled avaiable bottle array");
            })
            .catch((error) => {
                console.log('Error', JSON.stringify(error));
            });
	}
	//Currently have to put a render for each possible image which is awful because require() needs a string literal
	render() {
		const { navigate } = this.props.navigation;
		if(this.state.pending_bottles == 0){
			return (
					<ImageBackground source={require('../assets/beachtier0_0.png')} style={styles.background}>
						<TouchableOpacity style={styles.button} onPress={this.addBottle}>
							<Text style={styles.buttonText}>Get New Bottle</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button} onPress={this.clickedBottle}>
							<Text style={styles.buttonText}>Clicked A Bottle</Text>
						</TouchableOpacity>
					</ImageBackground>
	    );
	  }
		if(this.state.pending_bottles == 1){
			return (
					<ImageBackground source={require('../assets/beachtier0_1.png')} style={styles.background}>
						<TouchableOpacity style={styles.button} onPress={this.addBottle}>
							<Text style={styles.buttonText}>Get New Bottle</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button} onPress={this.clickedBottle}>
							<Text style={styles.buttonText}>Clicked A Bottle</Text>
						</TouchableOpacity>
					</ImageBackground>
	    );
	  }
		if(this.state.pending_bottles == 2){
			return (
					<ImageBackground source={require('../assets/beachtier0_2.png')} style={styles.background}>
						<TouchableOpacity style={styles.button} onPress={this.addBottle}>
							<Text style={styles.buttonText}>Get New Bottle</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button} onPress={this.clickedBottle}>
							<Text style={styles.buttonText}>Clicked A Bottle</Text>
						</TouchableOpacity>
					</ImageBackground>
	    );
	  }
		if(this.state.pending_bottles == 3){
			return (
					<ImageBackground source={require('../assets/beachtier0_3.png')} style={styles.background}>
						<TouchableOpacity style={styles.button} onPress={this.addBottle}>
							<Text style={styles.buttonText}>Get New Bottle</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button} onPress={this.clickedBottle}>
							<Text style={styles.buttonText}>Clicked A Bottle</Text>
						</TouchableOpacity>
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
		backgroundColor: '#E4645E',
		paddingVertical: 15,
		marginBottom: 20,
		width: 250,
		borderRadius: 10,
	}
});

AppRegistry.registerComponent('Home', () => Home);
