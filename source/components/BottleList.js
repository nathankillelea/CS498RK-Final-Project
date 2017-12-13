import React from 'react';
import { StyleSheet, Text, View, AppRegistry, TouchableOpacity, TextInput, Image, StatusBar, FlatList, ActivityIndicator, Alert, Modal, ImageBackground } from 'react-native';
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
            showModal: false,
            search: '',
        };
    };


	componentWillMount(){
		let hostname = "messageinarawr498.herokuapp.com"; //NATHAN's computer
		let bottleEndpt = "https://" + hostname + "/api/bottles";
		 axios.get(bottleEndpt)
            .then((response) => {
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
				{/*<View style={{paddingHorizontal: 7.5}}>
					<Text style={{fontWeight: "bold", fontSize: 48, marginBottom: 30,}}>Bottles</Text>
				</View>*/}
				{/*<SearchBar
					containerStyle={{backgroundColor: '#FAFAFA', borderTopWidth: 0, borderColor: '#CED0CE'}}
					inputStyle={{backgroundColor: '#E6E6E6', color: 'black'}}
					placeholder="Search"
					lightTheme
          onChangeText={this.updateText}
				/>*/}
			</View>
        );
    };
    closeModal = () => {
      this.setState({showModal: false});
    };
    showModal = () => {
      this.setState({showModal: true});
    };
    updateText = (text) => {
        this.setState({textField: text})
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
			<View style={{backgroundColor: '#FAFAFA'}}>
        <Modal visible={this.state.showModal}>
          <View style={styles.container}>
            <ImageBackground style={{flex:1, justifyContent: 'center', alignSelf: 'center', width: '100%', height: '100%', marginTop: 30,}} source={require('../assets/lower-res-scroll2.png')}>
              <Text style={styles.content}>{this.state.name}</Text>
              <Text style={styles.author}>-{this.state.author}</Text>
            </ImageBackground>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={[styles.button, {backgroundColor: '#17c11a'}]} onPress={this.closeModal}>
                <Text style={[styles.buttonText, {color: '#fff'}]}>BACK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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
								//onPress={() => navigate('Bottle', {name: item.content, type: item.genre, author: item.author})}
                onPress={this.showModal}
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
  container: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
		backgroundColor: '#ADD8E6',
	},
	content: {
		alignItems: 'center',
		justifyContent: 'center',
		height: 360,
		backgroundColor: 'rgba(255, 255, 255, 0)',
		paddingHorizontal: 10,
		marginLeft: 20,
		fontFamily: 'Allura-Regular',
		fontSize: 24,
		marginBottom: 10,
	},
	author: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(255, 255, 255, 0)',
		paddingHorizontal: 10,
		marginLeft: 20,
		fontFamily: 'Allura-Regular',
		fontSize: 24,
		marginBottom: 10,
	},
	buttonText: {
		textAlign: 'center',
		color: '#fff',
		fontWeight: '700',
	},
	buttonContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		paddingVertical: 15,
		marginBottom: 20,
		width: 250,
		borderRadius: 10,
	},

});

AppRegistry.registerComponent('BottleList', () => BottleList);
