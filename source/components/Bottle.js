import React from 'react';
import { StyleSheet, Text, View, AppRegistry, TouchableOpacity, Alert, TextInput, KeyboardAvoidingView, Image } from 'react-native';

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
		}
	}
	render() {
		const { navigate } = this.props.navigation;
		return (
    		<View style={styles.container}>
				<Text>{this.state.name}</Text>
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
	},
});

AppRegistry.registerComponent('Bottle', () => Bottle);
