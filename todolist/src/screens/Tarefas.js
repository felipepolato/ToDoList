import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default class Tarefas extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Lista de Tarefas Concluidas</Text>

        <ScrollView>
          <View style={styles.containerTarefas}>
            <Text style={styles.text1}>TAREFA</Text>
            <Text style={styles.text1}>NOME</Text>
            <Text style={styles.text1}>DD/MM/AAAA</Text>
          </View>

          <View style={styles.containerTarefas}>
            <Text style={styles.text1}>TAREFA</Text>
            <Text style={styles.text1}>NOME</Text>
            <Text style={styles.text1}>DD/MM/AAAA</Text>
          </View>

          <View style={styles.containerTarefas}>
            <Text style={styles.text1}>TAREFA</Text>
            <Text style={styles.text1}>NOME</Text>
            <Text style={styles.text1}>DD/MM/AAAA</Text>
          </View>

          <View style={styles.containerTarefas}>
            <Text style={styles.text1}>TAREFA</Text>
            <Text style={styles.text1}>NOME</Text>
            <Text style={styles.text1}>DD/MM/AAAA</Text>
          </View>
        </ScrollView>

        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.buttonExit}>
          <Text style={styles.text}>Voltar</Text>
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
    fontSize: 18,
    marginBottom: 30,
    width: 250,
    height: 80,
  },

  text: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 15,
  },

  text1: {
    fontSize: 24,
    margin: 15,
  },
});
