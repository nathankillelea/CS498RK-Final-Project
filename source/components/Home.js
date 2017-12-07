import React from 'react';
import { StyleSheet, Text, View, AppRegistry, TouchableOpacity, Alert, TextInput, KeyboardAvoidingView, Image, StatusBar } from 'react-native';

export default class Home extends React.Component {
	static navigationOptions = {
		title: 'Home',
		header: null,
	};
	constructor() {
		super();
		this.state = {

		}
	}
	render() {
		const { navigate } = this.props.navigation;
		return (
			<Image
				source={require('../assets/lower-res-beach.png')}
				style={styles.background}
			/>
    	);
	}
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		width: null,
		height: null,
	},
});

AppRegistry.registerComponent('Home', () => Home);
