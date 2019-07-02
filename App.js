import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native';
import firebase  from 'react-native-firebase'


state = {
  email: '',
  password: '',
  isAuthenticated: false
}

login = async () => {
  const {email,password} = this.state

  try{
    const user = await firebase.auth()
    .signInWithEmailAndPassword(email,password)

    this.setState({isAuthenticated: true})
    console.log(user)

  } catch(err){
    console.log(err)
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
            style={styles.input}
            placeholder='Digite sua email'
            values={this.state.email}
            onChangeText={email => this.setState({email})}>
        </TextInput>

        <TextInput
            style={styles.input}
            placeholder='Digite sua senha'
            values={this.state.password}
            onChangeText={password => this.setState({password})}>
        </TextInput>

        <TouchableOpacity styçe={styles.button} onPress={this.login}>
          <Text style={styles.buttonText}>Logar</Text>
        </TouchableOpacity>

        {this.state.isAuthenticated ? <Text>Logado com sucesso</Text> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 20
  },
  input: {
    height: 45,
    backgroundColor: '#FFF',
    alignSelf: 'stretch',
    borderColor: '#EEE',
    borderWidth: 1,
    paddingHorizontal: 20,
    marginBottom: 10
  },
  button: {
    height: 45,
    backgroundColor: '#069',
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'center'
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold'
  }
});
