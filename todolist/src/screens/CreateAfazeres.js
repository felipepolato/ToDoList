import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
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
      userid: '',
    };
  }

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
            <View style={styles.container2}>
              <Text style={styles.text1}>Criar Lista de Tarefas</Text>

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
                  this.getUser();
                  setTimeout(() => {
                    let lastID = 0;

                    database()
                      .ref(`/tarefas/${this.state.userid}/`)
                      .on('value', snapshot => {
                        let tmp = snapshot.val();
                        if (tmp != null) {
                          lastID = tmp.length + 1;
                        }
                      });

                    database()
                      .ref(`/tarefas/${this.state.userid}/${lastID}/`)
                      .set({
                        tarefa: this.state.tarefa,
                        nome: this.state.nome,
                        data: this.state.data,
                      });
                    Alert.alert(
                      'Alert Title',
                      'Tarefa Registrada Com Sucesso!',
                      [
                        {
                          text: 'OK',
                          onPress: () => navigation.navigate('Afazeres'),
                        },
                      ],
                    );
                  }, 200);
                }}
                style={styles.buttonCreate}>
                <Text style={styles.text}>Criar Tarefa</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
                style={styles.buttonCreate}>
                <Text style={styles.text}>Voltar</Text>
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

  buttonCreate: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#084d6e',
    fontSize: Dimensions.get('window').width / 18,
    marginTop: 30,
    width: 250,
    height: 70,
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

  text: {
    fontSize: Dimensions.get('window').width / 18,
    fontWeight: 'bold',
    color: 'white',
  },

  text1: {
    fontSize: Dimensions.get('window').width / 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
