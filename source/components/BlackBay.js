import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Modal, Button, TextInput, Image, FlatList } from 'react-native';
import { List, ListItem, SearchBar } from 'react-native-elements';

export default class BlackBay extends React.Component {
	static navigationOptions = {
		title: 'BlackBay',
		header: null,
	};
	constructor() {
		super();
		this.state = {
			showBottleCreateModal: false,
			showBottleListModal: false,
			newBottleText: "Hello Bottle",
            data: [
                {
                    name: 'Bottle 1',
                    subtitle: 'Inspirational Bottle',
                    id: 1,
                },
                {
                    name: 'Bottle 2',
                    subtitle: 'Funny Bottle',
                    id: 2,
                },
                {
                    name: 'Bottle 3',
                    subtitle: 'Motivational Bottle',
                    id: 3,
                },
                {
                    name: 'Bottle 4',
                    subtitle: 'Motivational Bottle',
                    id: 4,
                },
                {
                    name: 'Bottle 5',
                    subtitle: 'Motivational Bottle',
                    id: 5,
                },
                {
                    name: 'Bottle 6',
                    subtitle: 'Motivational Bottle',
                    id: 6,
                },
                {
                    name: 'Bottle 7',
                    subtitle: 'Motivational Bottle',
                    id: 7,
                },
                {
                    name: 'Bottle 8',
                    subtitle: 'Motivational Bottle',
                    id: 8,
                },
                {
                    name: 'Bottle 9',
                    subtitle: 'Motivational Bottle',
                    id: 9,
                },
                {
                    name: 'Bottle 10',
                    subtitle: 'Motivational Bottle',
                    id: 10,
                },
                {
                    name: 'Bottle 11',
                    subtitle: 'Motivational Bottle',
                    id: 11,
                },
                {
                    name: 'Bottle 12',
                    subtitle: 'Motivational Bottle',
                    id: 12,
                },
            ],
		}
	}

	showNewBottleModal = () => {
		this.setState({showBottleCreateModal: true})
	};

	showBottleListModal = () => {
		this.setState({showBottleListModal: true})
	};

	closeNewBottleModal = () => {
		this.setState({showBottleCreateModal: false});
	};

    closeBottleListModal = () => {
        this.setState({showBottleListModal: false});
    };

	saveModalData = (text) => {
		this.setState({newBottleText: text})
	};

    renderSeparator = () => {
        return (
			<View
				style={{
                    height: 1,
                    backgroundColor: '#CED0CE',
                    width: '100%',
                }}
			/>
        );
    };
    renderHeader = () => {
        return(
			<View style={{backgroundColor: '#FAFAFA'}}>
				<View style={{paddingHorizontal: 7.5}}>
					<Text style={{fontWeight: "bold", fontSize: 48, }}>Bottles</Text>
				</View>
				<SearchBar
					containerStyle={{backgroundColor: '#FAFAFA', borderTopWidth: 0, borderColor: '#CED0CE'}}
					inputStyle={{backgroundColor: '#E6E6E6', color: 'black'}}
					placeholder="Search"
					lightTheme
				/>
			</View>
        );
    };

	render() {
		const { navigate } = this.props.navigation;
		return (
    		<View style={styles.container}>
				<Text>BLACK BAY</Text>
				<Image
					source={require('../assets/bleckbae2.jpg')}
				/>
				<Modal visible={this.state.showBottleCreateModal}>
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
						onPress={this.closeNewBottleModal}
						title="Close Window"
					/>
				</Modal>



				<Button
					onPress={this.showNewBottleModal}
					title="Make New Bottle"
				/>
				<Button
					onPress={this.showBottleListModal}
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
