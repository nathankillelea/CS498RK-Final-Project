import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { StyleSheet, Text, View, AppRegistry, TouchableOpacity, TextInput, KeyboardAvoidingView, Image, StatusBar } from 'react-native';

import Home from './Home.js';
import BottleList from './BottleList.js';
import Calendar from './Calendar.js';
import BlackBay from './BlackBay.js';
import Settings from './Settings.js';

export const Tabs = TabNavigator({
	Home: {
		screen: Home,
		navigationOptions: {
			tabBarLabel: 'Home',
			tabBarIcon: ({ tintColor }) => (<Icon name="home" size={35} color={tintColor} />),
		},
	},
	BottleList: {
		screen: BottleList,
		navigationOptions: {
			tabBarLabel: 'Bottles',
			tabBarIcon: ({ tintColor }) => (<FontAwesomeIcon name="flask" size={35} color={tintColor} />),
		},
	},
	Calendar: {
		screen: Calendar,
		navigationOptions: {
			tabBarLabel: 'Calendar',
			tabBarIcon: ({ tintColor }) => (<FontAwesomeIcon name="calendar" size={32} color={tintColor} />),
		},
	},
	BlackBay: {
		screen: BlackBay,
		navigationOptions: {
			tabBarLabel: 'Black Bay',
			tabBarIcon: ({ tintColor }) => (<Icon name="send" size={35} color={tintColor} />),

		},
	},
	Settings: {
		screen: Settings,
		navigationOptions: {
			tabBarLabel: 'Settings',
			tabBarIcon: (({ tintColor }) => <Icon name="settings" size={35} color={tintColor} />),
		},
	},
});

export default class NavBar extends React.Component {
	static navigationOptions = {
		title: 'NavBar',
		header: null,
	};
	render() {
		return (
			<Tabs />
    	);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    	backgroundColor: '#fff',
	},
});

AppRegistry.registerComponent('NavBar', () => NavBar);
