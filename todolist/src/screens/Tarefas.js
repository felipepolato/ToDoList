import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import database from '@react-native-firebase/database';

export default class Tarefas extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    database()
      .ref('/tarefas/')
      .on('value', snapshot => {
        this.setState({data: snapshot.val()});
      });
  }

  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Lista de Tarefas Concluidas</Text>

        <FlatList
          data={this.state.data}
          renderItem={({item, index}) => (
            <View style={styles.containerTarefas}>
              <Text style={styles.text1}>{item.tarefa}</Text>
              <Text style={styles.text1}>{item.nome}</Text>
              <Text style={styles.text1}>{item.data}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />

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
    fontSize: Dimensions.get('window').width / 18,
    margin: 15,
  },
});
