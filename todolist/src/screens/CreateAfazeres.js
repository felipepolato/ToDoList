import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';

import database from '@react-native-firebase/database';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default class CreateAfazeres extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tarefa: '',
      nome: '',
      data: '',
    };
  }

  render() {
    const {navigation} = this.props;

    const storeData = async value => {
      try {
        await AsyncStorage.setItem('@storage_Key', value);
      } catch (e) {
        // saving error
      }
    };

    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@storage_Key');
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch (e) {
        // error reading value
      }
    };

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Criar Lista de Tarefas</Text>

        <TextInput
          value={this.state.tarefa}
          onChangeText={tarefa => this.setState({tarefa: tarefa})}
          placeholder="Tarefa"
          style={styles.inputInformation}
        />

        <TextInput
          value={this.state.nome}
          onChangeText={nome => this.setState({nome: nome})}
          placeholder="Nome"
          style={styles.inputInformation}
        />

        <TextInput
          value={this.state.data}
          onChangeText={data => this.setState({data: data})}
          placeholder="Data DD/MM/AAAA"
          style={styles.inputInformation}
        />

        <TouchableOpacity
          onPress={() => {
            let lastID = 0;

            database()
              .ref('/tarefas/')
              .on('value', snapshot => {
                let tmp = snapshot.val();
                if (tmp != null) {
                  lastID = tmp.length + 1;
                }
              });

            database().ref(`/tarefas/${lastID}/`).set({
              tarefa: this.state.tarefa,
              nome: this.state.nome,
              data: this.state.data,
            });

            Alert.alert('Alert Title', 'Tarefa Registrada Com Sucesso!', [
              {
                text: 'OK',
                onPress: () => navigation.navigate('Afazeres'),
              },
            ]);
          }}
          style={styles.buttonExit}>
          <Text style={styles.text}>Criar Tarefa</Text>
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

  containerTarefas: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#ccc',
  },

  tabsNavigator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: Dimensions.get('window').width,
    padding: 10,
  },

  buttonExit: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    fontSize: Dimensions.get('window').width / 18,
    marginTop: 30,
    width: 250,
    height: 80,
  },

  inputInformation: {
    backgroundColor: 'white',
    fontSize: Dimensions.get('window').width / 18,
    marginTop: 10,
    width: 250,
  },

  text: {
    fontSize: Dimensions.get('window').width / 18,
    fontWeight: 'bold',
    margin: 15,
  },

  text1: {
    fontSize: Dimensions.get('window').width / 18,
    margin: 15,
  },
});
