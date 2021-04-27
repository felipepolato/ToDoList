import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: '',
      senha: '',
    };
  }

  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.nome}
          onChangeText={text => this.setState({nome: text})}
          placeholder="Insira Seu Nome"
          style={styles.inputInformation}
        />

        <TextInput
          value={this.state.senha}
          onChangeText={password => this.setState({senha: password})}
          placeholder="Insira Sua Senha"
          style={styles.inputInformation}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
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
