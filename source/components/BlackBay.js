import React from 'react';
import { StyleSheet, Text, View, Button, AppRegistry, Modal, TouchableOpacity, Alert, TextInput, KeyboardAvoidingView, Image, StatusBar } from 'react-native';

export default class BlackBay extends React.Component {
	static navigationOptions = {
		title: 'BlackBay',
		header: null,
	};
	constructor() {
		super();
		this.state = {
			showModal: false,
			newBottleText: "Hello Bottle"
		}
	}

	createNewBottle = () => {
		this.setState({showModal: true});
	};

	selectBottleList() {

	};



	closeModal = () => {
		this.setState({showModal: false});
	};

	saveModalData = (text) => {
		this.setState({newBottleText: text})
	};

	render() {
		const { navigate } = this.props.navigation;
		return (
    		<View style={styles.container}>
				<StatusBar
					barStyle="light-content"
				/>
				<Text>BLACK BAY</Text>
				<Image
					source={require('../assets/bleckbae2.jpg')}
				/>
				<Modal visible={this.state.showModal}>
					<View style={styles.container}>
						<TextInput style={styles.input}
								   placeholder={this.state.newBottleText}
								   autoCapitalize="none"
								   autoCorrect={true}
								   multiline={true}
								   numberOfLines={10}
								   blurOnSubmit={true}
								   onChangeText={this.saveModalData}
						/>
						<Button
							onPress={this.closeModal}
							title="Keep Bottle"
							color="#17c11a"
						/>
						<Button
							onPress={this.closeModal}
							title="Throw Away"
							color="#c4301d"
						/>
					</View>
					<View/>
				</Modal>

				<Button
					onPress={this.createNewBottle}
					title="Make New Bottle"
				/>
				<Button
					onPress={this.createNewBottle}
					title="Choose From Collection"
				/>
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

AppRegistry.registerComponent('BlackBay', () => BlackBay);
