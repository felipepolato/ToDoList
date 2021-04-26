import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
      <TouchableOpacity
          onPress={() => navigation.navigate('Afazeres')}
          style={styles.buttonAfazeres}>
          <Text style={styles.text}>Tarefas Afazer</Text>
        </TouchableOpacity>



      <TouchableOpacity
          onPress={() => navigation.navigate('Tarefas')}
          style={styles.buttonTarefas}>
          <Text style={styles.text}>Tarefas Concluidas</Text>
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
    backgroundColor: '#ccc'
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
    fontWeight: 'bold'

  }
});
