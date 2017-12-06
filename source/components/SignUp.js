import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';

export default class SignUp extends React.Component {
	constructor() {
		super();
		this.state = {
			temp: 'bud',
		}
	}
	render() {
		return (
    		<View style={styles.container}>
				<Text>SIGN UP</Text>
    		</View>
    	);
	}
}

const styles = StyleSheet.create({
	container: {
    	flex: 1,
    	backgroundColor: '#fff',
    	alignItems: 'center',
    	justifyContent: 'center',
	},
});

AppRegistry.registerComponent('SignUp', () => SignUp);
