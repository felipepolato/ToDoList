import React from 'react';

import database from '@react-native-firebase/database';

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Alert,
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
          onPress={() =>
            database()
              .ref('/users/0/')
              .on('value', snapshot => {
                let tmp = snapshot.val();
                if (
                  this.state.usuario === tmp.usuario &&
                  this.state.senha === tmp.senha
                ) {
                  console.log('confere');
                  navigation.navigate("Home")
                } else {
                  console.log('não confere');
                }
              })
          }
          style={styles.buttonSend}>
          <Text>Entrar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccc',
  },

  buttonSend: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    fontSize: Dimensions.get('window').width / 18,
    marginTop: 30,
    width: 250,
    height: 50,
  },

  inputInformation: {
    backgroundColor: 'white',
    fontSize: Dimensions.get('window').width / 18,
    marginTop: 10,
    width: 250,
  },
});
