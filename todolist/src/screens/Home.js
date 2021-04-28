import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <TouchableOpacity
            onPress={() => navigation.navigate('CreateAfazeres')}
            style={styles.buttonCriar}>
            <Text style={styles.text1}>Criar Tarefa</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Afazeres')}
            style={styles.buttonAfazeres}>
            <Text style={styles.text1}>Fazer Tarefa</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Tarefas')}
            style={styles.buttonTarefas}>
            <Text style={styles.text1}>Tarefas Concluidas</Text>
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
    padding: 80,
    width: Dimensions.get('window').width / 1.4,
    paddingLeft: 22,
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

  buttonTarefas: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8cb0bf',
    marginTop: 30,
    width: 250,
    height: 70,
    borderRadius: 10
  },

  buttonAfazeres: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#567c99',
    marginTop: 30,
    width: 250,
    height: 70,
    borderRadius: 10
  },

  buttonCriar: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#45637a',
    marginTop: 30,
    width: 250,
    height: 70,
    borderRadius: 10
  },

  text1: {
    fontSize: Dimensions.get('window').width / 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
