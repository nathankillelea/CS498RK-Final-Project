import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import Login from './source/components/Login.js';
import SignUp from './source/components/SignUp.js';
import Home from './source/components/Home.js';
import NavBar from './source/components/NavBar.js';

export const Navigation = StackNavigator({
	Login: { screen: Login },
	SignUp: { screen: SignUp },
	Home: { screen: Home },
	NavBar: { screen: NavBar },
	}, {
    	headerMode: 'screen',
});

export default class App extends React.Component {
	render() {
		return (
			<Navigation />
    	);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    	backgroundColor: '#fff',
	},
});

AppRegistry.registerComponent('App', () => App);
