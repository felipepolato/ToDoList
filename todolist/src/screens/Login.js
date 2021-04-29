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

import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      usuario: '',
      senha: '',
      userid: '',
    };
  }

  componentDidMount() {
    this.setState({
      usuario: '',
      senha: '',
    });
  }

  setUser = async value => {
    try {
      await AsyncStorage.setItem('userid', value);
    } catch (error) {
      console.log(error);
    }
  };

  getUser = async () => {
    let finalResult = '';
    try {
      const result = await AsyncStorage.getItem('userid');
      finalResult = result;
    } catch (error) {
      console.log(error);
    }
    this.setState({userid: finalResult});
  };

  render() {
    const storeData = async value => {
      try {
        await AsyncStorage.setItem('@storage_Key', value);
      } catch (e) {
        console.log(error);
      }
    };

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
                    .ref('/users/')
                    .on('value', snapshot => {
                      let tmp = snapshot.val();
                      let count = 0;

                      for (let loop in tmp) {
                        if (tmp[loop] == null) continue;
                        if (
                          this.state.usuario === tmp[loop].usuario &&
                          this.state.senha === tmp[loop].senha
                        ) {
                          console.log('confere');
                          let id = count.toString();
                          this.setUser(id);
                          navigation.replace('Home');
                        }
                        count++;
                      }
                    });
                }}
                style={styles.buttonSend}>
                <Text style={styles.textBottom}>Entrar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonRegister}
                onPress={() => navigation.navigate('Register')}>
                <Text style={styles.textBottom}>Registrar</Text>
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

  buttonRegister: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#084d6e',
    fontSize: Dimensions.get('window').width / 18,
    marginTop: 10,
    marginBottom: 20,
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
