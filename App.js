import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';

import Login from './source/components/Login.js';
import SignUp from './source/components/SignUp.js';

export default class App extends React.Component {
	render() {
		return (
    		<View style={styles.container}>
				<Login />
    		</View>
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
