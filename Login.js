import React from 'react';
import { StyleSheet, Text, View, AppRegistry, TouchableOpacity, TextInput, KeyboardAvoidingView, Image, StatusBar } from 'react-native';
import axios from 'axios';

export default class Login extends React.Component {
    static navigationOptions = {
        title: 'Login',
        header: null,
    };
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errorMessage: false,
        }
    }
    logIn = () => {
        this.setState({errorMessage: false})
        let hostname = "messageinarawr498.herokuapp.com"; //Alec's IP
        let bottleEndpt = "https://" + hostname + "/api/login";
        body = {
            "username": this.state.username,
            "password": this.state.password,
        }
        axios.post(bottleEndpt, body)
        .then((response) => {
					console.log(response.data.data);
      		this.props.navigation.navigate('Tabs', {user_data: response.data.data, owned_list_id: response.data.data.owned, beach_tier: response.data.data.completedTasks});
        })
        .catch((error) => {
                console.log('Error', JSON.stringify(error));
                this.setState({errorMessage: true})
        });
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo}
                        source={require('../assets/paper.png')}
                    />
                </View>
                <KeyboardAvoidingView behavior="padding">
                    <View style={styles.formContainer}>
                        <TextInput style={styles.input}
                            placeholder="Username"
                            returnKeyType="next"
                            onSubmitEditing={() => this.passwordInput.focus()}
                            onChangeText={(text)=>this.setState({username: text})}
                            autoCorrect={false}
                        />
                        <TextInput style={styles.input}
                            placeholder="Password"
                            secureTextEntry
                            returnKeyType="done"
                            ref={(input) => this.passwordInput = input}
                            onChangeText={(text)=>this.setState({password: text})}
                        />
                    </View>
                    <TouchableOpacity style={styles.loginButtonContainer} onPress={this.logIn}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <View style={styles.signUpWrapper}>
                        {this.state.errorMessage &&
                            <Text style={{color: 'red', paddingRight: 100,}}>Error Logging In!</Text>
                        }
                        <Text style={styles.signUpText}>Not a user?</Text>
                        <TouchableOpacity style={styles.signUpButtonContainer} onPress={() => navigate('SignUp')}>
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#96ceb4',
        padding: 20,
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    logo: {
        width: 150,
        height: 150,
    },
    loginButtonContainer: {
        backgroundColor: '#74BE9B',
        paddingVertical: 15,
        marginBottom: 10,
    },
    signUpWrapper: {
        alignSelf: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
    },
    signUpText: {
        color: '#fff',
    },
    signUpButtonContainer: {
        backgroundColor: '#74BE9B',
        paddingVertical: 15,
        width: 65,
        marginLeft: 10,
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: '700',
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        paddingHorizontal: 10,
        marginBottom: 10,
    },
});

AppRegistry.registerComponent('Login', () => Login);