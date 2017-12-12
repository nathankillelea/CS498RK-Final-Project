import React from 'react';
import { StyleSheet, Text, View, AppRegistry, TouchableOpacity, Alert, TextInput, KeyboardAvoidingView, Image, ImageBackground } from 'react-native';

export default class Bottle extends React.Component {
	static navigationOptions = {
		title: 'Bottle',
		header: null,
	};
	constructor(props) {
		super(props);
		this.state = {
			name: this.props.navigation.state.params.name,
			type: this.props.navigation.state.params.type,
			author: this.props.navigation.state.params.author
		}
	}
	ComponentWillMount() {
		//Image.prefetch(require('../assets/lower-res-scroll2.png'))
	}
	render() {
		const { navigate } = this.props.navigation;
		return (
    		<View style={styles.container}>
				<ImageBackground style={{flex:1, justifyContent: 'center', alignSelf: 'center', width: '100%', height: '100%', marginTop: 30,}} source={require('../assets/lower-res-scroll2.png')}>
					<Text style={styles.content}>{this.state.name}</Text>
					<Text style={styles.author}>-{this.state.author}</Text>
				</ImageBackground>
				<View style={styles.buttonContainer}>
					<TouchableOpacity style={[styles.button, {backgroundColor: '#17c11a'}]} onPress={() => navigate('BottleList')}>
						<Text style={[styles.buttonText, {color: '#fff'}]}>BACK</Text>
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
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
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
	buttonText: {
		textAlign: 'center',
		color: '#fff',
		fontWeight: '700',
	},
	buttonContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		paddingVertical: 15,
		marginBottom: 20,
		width: 250,
		borderRadius: 10,
	},
});

AppRegistry.registerComponent('Bottle', () => Bottle);
