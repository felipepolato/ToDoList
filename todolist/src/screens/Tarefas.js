import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

export default class Tarefas extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {} = this.props;

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

  buttonTarefas: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    marginTop: 30,
    width: 250,
    height: 50,
  },
  buttonAfazeres: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    marginTop: 30,
    width: 250,
    height: 50,
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
