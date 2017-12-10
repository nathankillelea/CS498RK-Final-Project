import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import Login from './source/components/Login.js';
import SignUp from './source/components/SignUp.js';
import Bottle from './source/components/Bottle.js';
import Home from './source/components/Home.js';
import BottleList from './source/components/BottleList.js';
import Calendar from './source/components/Calendar.js';
import BlackBay from './source/components/BlackBay.js';
import Profile from './source/components/Profile.js';

export const Tabs = TabNavigator({
	Home: {
		screen: Home,
		navigationOptions: {
			tabBarLabel: 'Home',
			tabBarIcon: ({ tintColor }) => (<FontAwesomeIcon name="home" size={35} color={tintColor} />),
		},
	},
	BottleList: {
		screen: BottleList,
		navigationOptions: {
			tabBarLabel: 'Bottles',
			tabBarIcon: ({ tintColor }) => (<FontAwesomeIcon name="flask" size={33} color={tintColor} />),
		},
	},
	Calendar: {
		screen: Calendar,
		navigationOptions: {
			tabBarLabel: 'Calendar',
			tabBarIcon: ({ tintColor }) => (<FontAwesomeIcon name="calendar" size={31} color={tintColor} />),
		},
	},
	BlackBay: {
		screen: BlackBay,
		navigationOptions: {
			tabBarLabel: 'Black Bay',
			tabBarIcon: ({ tintColor }) => (<FontAwesomeIcon name="send" size={30} color={tintColor} />),

		},
	},
	Profile: {
		screen: Profile,
		navigationOptions: {
			tabBarLabel: 'Profile',
			tabBarIcon: (({ tintColor }) => <FontAwesomeIcon name="user" size={32} color={tintColor} />),
		},
	},
});

export const Navigation = StackNavigator({
	Login: { screen: Login },
	SignUp: { screen: SignUp },
	Home: { screen: Tabs },
	Bottle: { screen: Bottle },
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
