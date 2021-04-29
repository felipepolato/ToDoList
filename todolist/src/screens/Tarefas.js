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

import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Afazeres extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
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

  componentDidMount() {
    this.getUser();
    setTimeout(() => {
      database()
        .ref(`/tarefas/${this.state.userid}/`)
        .on('value', snapshot => {          
          let tmp = snapshot.val();
          let result = [];
          for(let loop in tmp){
            if(tmp[loop] == null) continue;
            if(tmp[loop].status === 'concluido'){
              result.push(tmp[loop]);
            }
          }
          this.setState({data: result});
        });
    }, 200);
  }

  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Tarefas Concluídas</Text>
        <View style={styles.container2}>
          <View style={styles.topList}>
            <View
              style={{
                width: '40%',
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: 'rgba(0,0,0.1)',
                borderWidth: 0.2
              }}>
              <Text style={styles.text3}>Tarefa</Text>
            </View>
            <View
              style={{
                width: '30%',
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: 'rgba(0,0,0.1)',
                borderWidth: 0.2
              }}>
              <Text style={styles.text3}>Nome</Text>
            </View>
            <View
              style={{
                width: '30%',
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: 'rgba(0,0,0.1)',
                borderWidth: 0.2
              }}>
              <Text style={styles.text3}>Data</Text>
            </View>
          </View>

          <FlatList
            data={this.state.data}
            renderItem={({item, index}) => {
              const myNome = item.nome;
              return (
              <TouchableOpacity 
                onPress={()=> 
                   database().ref(`/tarefas/${this.state.userid}/${item.id}`)
                   .update({
                     status: "pendente"
                   })
                }
                style={styles.containerTarefas}
              >
                <View
                  style={{ 
                    width: '40%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={styles.text2}>{item.tarefa}</Text>
                </View>
                <View
                  style={{
                    width: '30%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={styles.text2}>{myNome.length > 15 ? myNome.substring(0, 15) + "..." : myNome}</Text>
                </View>
                <View
                  style={{
                    width: '30%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={styles.text2}>{item.data}</Text>
                </View>
              </TouchableOpacity>);
            }}
            keyExtractor={item => item.id}
          />

          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.buttonExit}>
            <Text style={styles.text1}>Voltar</Text>
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
    width: '90%',
    height: Dimensions.get('window').height / 1.4,
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

  topList: {
    marginTop: 20,
    width: '100%',
    height: Dimensions.get('window').width / 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  containerTarefas: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#8cb0bf',
    width: '100%',
    height: Dimensions.get('window').width / 10,
  },

  buttonExit: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#084d6e',
    fontSize: Dimensions.get('window').width / 18,
    height: 70,
    borderRadius: 8,
    margin: 20,
  },

  text: {
    fontSize: Dimensions.get('window').width / 14,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
    color: 'white',
  },

  text1: {
    fontSize: Dimensions.get('window').width / 15,
    margin: 15,
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },

  text2: {
    fontSize: Dimensions.get('window').width / 24,
    color: 'white',
    fontWeight: 'bold',
  },

  text3: {
    fontSize: Dimensions.get('window').width / 24,
    color: 'black',
    fontWeight: 'bold',
  },
});
