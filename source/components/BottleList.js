import React from 'react';
import { StyleSheet, Text, View, AppRegistry, TouchableOpacity, TextInput, Image, StatusBar, FlatList, ActivityIndicator, Alert } from 'react-native';
import { List, ListItem, SearchBar } from 'react-native-elements';
import axios from 'axios';

export default class BottleList extends React.Component {
	static navigationOptions = {
		title: 'BottleList',
		header: null,
	};
	constructor() {
		super();
		this.state = {
			loading: false,
			refreshing: false,
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
	};

	componentWillMount(){
		/* axios.get('http://localhost:3000/api/tasks?where={"owner":"boog"}')
			.then((response) => {
				console.log("Response went through.");
				console.log(response);
				console.log("Is your response.");
			})
			.catch((error) => {
                console.log('Error', error);
			}) */
	}

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
			<View style={{backgroundColor: '#FAFAFA'}}>
				<List containerStyle={{borderTopWidth: 0, borderBottomWidth: 0, marginTop: 20, backgroundColor: '#FAFAFA'}}>
					<FlatList
						data={this.state.data}
						renderItem={({ item }) => (
							<ListItem
								roundAvatar
								title={item.name}
								subtitle={item.subtitle}
								avatar={require('../assets/paper.png')}
								containerStyle={{borderBottomWidth: 0, borderTopWidth: 0, backgroundColor: '#fff', borderColor: '#fff'}}
								button
								onPress={() => navigate('Bottle', {name: item.name, type: item.subtitle})}
							/>
						)}
						keyExtractor={item => item.id}
						ItemSeparatorComponent={this.renderSeparator}
						ListHeaderComponent={this.renderHeader}
					/>
				</List>
			</View>
    	);
	}
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('BottleList', () => BottleList);
