import React from 'react';

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
          value={this.state.sobrenome}
          onChangeText={sobrenome => this.setState({sobrenome: sobrenome})}
          placeholder="Insira Seu Sobrenome"
          style={styles.inputInformation}
        />

        <TextInput
          value={this.state.usuario}
          onChangeText={usuario => this.setState({usuario: usuario})}
          placeholder="Insira Seu Usuario"
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
          <Text>Registrar</Text>
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
