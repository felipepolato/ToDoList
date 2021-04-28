import React from 'react';

import database from '@react-native-firebase/database';

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      usuario: '',
      senha: '',
    };
  }

  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <ScrollView style={{flex: 1}}>
          <View
            style={{
              width: Dimensions.get('window').width,
              height: Dimensions.get('window').height,
              alignItems: 'center',
              justifyContent: 'center',
            }}>

            <Text style={styles.textHello}>Bem Vindo!</Text>

            <View style={styles.container2}>
              <TextInput
                value={this.state.usuario}
                onChangeText={text => this.setState({usuario: text})}
                placeholder="Usuário"
                style={styles.inputInformation}
              />

              <TextInput
                value={this.state.senha}
                onChangeText={password => this.setState({senha: password})}
                placeholder="Senha"
                style={styles.inputInformation}
                secureTextEntry
              />

              <TouchableOpacity
                onPress={() => {
                  database()
                    .ref('/users/0/')
                    .on('value', snapshot => {
                      let tmp = snapshot.val();
                      if (
                        this.state.usuario === tmp.usuario &&
                        this.state.senha === tmp.senha
                      ) {
                        console.log('confere');
                        navigation.navigate('Home');
                      } else {
                        console.log('não confere');
                      }
                    });
                }}
                style={styles.buttonSend}>
                <Text style={styles.textBottom}>Entrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#084d6e',
  },

  container2: {
    backgroundColor: '#fff',
    padding: 10,
    width: Dimensions.get('window').width / 1.4,
    paddingLeft: 22,
    paddingTop: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },

  buttonSend: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#084d6e',
    fontSize: Dimensions.get('window').width / 18,
    marginTop: 30,
    width: 250,
    height: 50,
    borderRadius: 8,
  },

  inputInformation: {
    backgroundColor: 'white',
    fontSize: Dimensions.get('window').width / 18,
    marginTop: 10,
    width: 250,
    borderStyle: 'solid',
    borderWidth: 1.5,
    borderColor: '#084d6e',
    borderRadius: 8,
    textAlign: 'center',
  },

  textHello: {
    fontSize: Dimensions.get('window').width / 12,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 30,
  },

  textBottom: {
    fontSize: Dimensions.get('window').width / 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
