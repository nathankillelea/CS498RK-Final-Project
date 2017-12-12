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
            data: [],
        };
    };


	componentWillMount(){
		let hostname = "10.193.238.104"; //NATHAN's computer
		let bottleEndpt = "http://" + hostname + ":3000/api/bottles";
		 axios.get(bottleEndpt)
            .then((response) => {
                /* console.log("Response went through.");
                console.log(response);
                console.log("Is your response."); */
                this.setState({data: response.data.data});
            })
            .catch((error) => {
                console.log('Error', JSON.stringify(error));
            });
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
								title={item.author}
								subtitle={item.content}
								avatar={require('../assets/paper.png')}
								containerStyle={{borderBottomWidth: 0, borderTopWidth: 0, backgroundColor: '#fff', borderColor: '#fff'}}
								button
								onPress={() => navigate('Bottle', {name: item.content, type: item.genre, author: item.author})}
							/>
                        )}
						keyExtractor={item => item._id}
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
