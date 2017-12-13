import React from 'react';
import { StyleSheet, Text, View, AppRegistry, TouchableOpacity, TextInput, Image, StatusBar, FlatList, ActivityIndicator, Alert, Modal, ImageBackground } from 'react-native';
import { List, ListItem, SearchBar } from 'react-native-elements';
import axios from 'axios';

export default class BottleList extends React.Component {
    static navigationOptions = {
        title: 'BottleList',
        header: null,
    };
    constructor(props) {
        super(props);
        this.state = {
            user_data: this.props.navigation.state.params.user_data,
            owned_list_bottles: this.props.navigation.state.params.owned_list_bottles,
            loading: false,
            refreshing: false,
            showModal: false,
            modalMessage: '',
            modalAuthor: '',
        };
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
    /*renderHeader = () => {
        return(
			<View style={{backgroundColor: '#FAFAFA'}}>
			</View>
        );
    };*/
    closeModal = () => {
      this.setState({showModal: false});
    };
    componentWillMount = () => {
      this.forceUpdate()
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
			<View style={{backgroundColor: '#FFFFFF'}}>
        <Modal visible={this.state.showModal} onRequestClose={()=> setState({showModal: false})}>
          <View style={styles.container}>
            <ImageBackground style={{flex:1, justifyContent: 'center', alignSelf: 'center', width: '100%', height: '100%', marginTop: 30,}} source={require('../assets/lower-res-scroll2.png')}>
              <Text style={styles.content}>{this.state.modalMessage}</Text>
              <Text style={styles.author}>-{this.state.modalAuthor}</Text>
            </ImageBackground>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={[styles.button, {backgroundColor: '#17c11a'}]} onPress={this.closeModal}>
                <Text style={[styles.buttonText, {color: '#fff'}]}>BACK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
				<List containerStyle={{borderTopWidth: 0, borderBottomWidth: 0, marginTop: 20, backgroundColor: '#FFFFFF'}}>
					<FlatList
						data={this.state.owned_list_bottles}
						renderItem={({ item }) => (
							<ListItem
								roundAvatar
								title={item.author}
								subtitle={item.content}
								avatar={require('../assets/paper.png')}
								containerStyle={{borderBottomWidth: 0, borderTopWidth: 0, backgroundColor: '#fff', borderColor: '#fff'}}
								button
								//onPress={() => navigate('Bottle', {name: item.content, type: item.genre, author: item.author})}
                onPress={() => {
                  this.setState({showModal: true});
                  this.setState({modalMessage: item.content});
                  this.setState({modalAuthor: item.author})
                }}/>
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
		fontFamily: 'DancingScript-Bold',
		fontSize: 24,
		marginBottom: 10,
	},
	author: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(255, 255, 255, 0)',
		paddingHorizontal: 10,
		marginLeft: 20,
		fontFamily: 'DancingScript-Bold',
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
