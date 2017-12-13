import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import { AppLoading, Asset, Font } from 'expo';

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
			tabBarIcon: ({ tintColor }) => (<FontAwesome name="home" size={35} color={tintColor} />),
		},
	},
	BottleList: {
		screen: BottleList,
		navigationOptions: {
			tabBarLabel: 'Bottles',
			tabBarIcon: ({ tintColor }) => (<FontAwesome name="flask" size={33} color={tintColor} />),
		},
	},
	Calendar: {
		screen: Calendar,
		navigationOptions: {
			tabBarLabel: 'Calendar',
			tabBarIcon: ({ tintColor }) => (<FontAwesome name="calendar" size={31} color={tintColor} />),
		},
	},
	BlackBay: {
		screen: BlackBay,
		navigationOptions: {
			tabBarLabel: 'Black Bay',
			tabBarIcon: ({ tintColor }) => (<FontAwesome name="send" size={30} color={tintColor} />),

		},
	},
	Profile: {
		screen: Profile,
		navigationOptions: {
			tabBarLabel: 'Profile',
			tabBarIcon: (({ tintColor }) => <FontAwesome name="user" size={32} color={tintColor} />),
		},
	},
},
{
	tabBarComponent: TabBarBottom,
	tabBarPosition: 'bottom',
}
);

export const Navigation = StackNavigator({
	Login: { screen: Login },
	SignUp: { screen: SignUp },
	Tabs: { screen: Tabs },
	Bottle: { screen: Bottle },
	}, {
    	headerMode: 'screen',
});

function cacheFonts(fonts) {
	return fonts.map(font => Font.loadAsync(font));
}

function cacheImages(images) {
	return images.map(image => {
	    return Asset.fromModule(image).downloadAsync();
		//return Image.prefetch(image)
	});
}

export default class App extends React.Component {
	state = {
		isReady: false,
	}

	async _loadAssetsAsync() {
		const imageAssets = cacheImages([
			require('./source/assets/beachtier0.png'),
			require('./source/assets/lower-res-scroll2.png'),
			require('./source/assets/bottle1.png'),
			require('./source/assets/bottle2.png'),
			require('./source/assets/bottle3.png'),
		]);
		const fontAssets = cacheFonts([FontAwesome.font]);
		await Promise.all([...fontAssets]);
	}

	render() {
    	if (!this.state.isReady) {
	    	return (
	        	<AppLoading
		        	startAsync={this._loadAssetsAsync}
		        	onFinish={() => this.setState({ isReady: true })}
		        	onError={console.warn}
	        	/>
	    	);
    	}
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
