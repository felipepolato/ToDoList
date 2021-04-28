import React from 'react';

import database from '@react-native-firebase/database';

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: '',
      sobrenome: '',
      usuario: '',
      senha: '',
      mandou: false,
      lastID: 0,
    };
  }

  componentDidMount() {
    database()
      .ref('/users/')
      .on('value', snapshot => {
        let tmp = snapshot.val();
        console.log(tmp);

        let id = 0;

        if (tmp != null) {
          for (let loop in tmp) {
            id++;
          }
          this.setState({lastID: id});
        }
      });
  }

  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.textHello}>Seu Cadastro!</Text>

        <View style={styles.container2}>
          <TextInput
            value={this.state.nome}
            onChangeText={text => this.setState({nome: text})}
            placeholder="Nome"
            style={styles.inputInformation}
          />

          <TextInput
            value={this.state.sobrenome}
            onChangeText={sobrenome => this.setState({sobrenome: sobrenome})}
            placeholder="Sobrenome"
            style={styles.inputInformation}
          />

          <TextInput
            value={this.state.usuario}
            onChangeText={usuario => this.setState({usuario: usuario})}
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
            onPress={async () => {
              database().ref(`/users/${this.state.lastID}/`).set({
                nome: this.state.nome,
                sobrenome: this.state.sobrenome,
                usuario: this.state.usuario,
                senha: this.state.senha,
              });
              navigation.navigate('Home');
            }}
            style={styles.buttonSend}>
            <Text style={styles.textBottom}>Registrar</Text>
          </TouchableOpacity>
        </View>
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
    height: '50%',
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
    textAlign: "center"
  },

  textBottom: {
    fontSize: Dimensions.get('window').width / 20,
    fontWeight: 'bold',
    color: 'white',
  },

  textHello: {
    fontSize: Dimensions.get('window').width / 12,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 30,
    
  },
});
