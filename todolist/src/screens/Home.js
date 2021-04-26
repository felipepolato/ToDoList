import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, TextInput } from 'react-native';

export default class Home extends React.Component {
  constructor (props){
    super(props);

    this.state={
      nome: "",

    }
  }
    render(){
        const {navigation} = this.props;
        
        return (
          <View style={styles.container}>
            <TextInput
              value={this.state.nome}
              onChangeText={text => this.setState({nome: text})}
              placeholder="Insira Seu Nome"
            />
        
            <TouchableOpacity onPress={()=> navigation.navigate("Sobre", {nome: this.state.nome} )}>
                <Text>Sobre</Text>
            </TouchableOpacity>
            
          </View>
        );
      }

    }

  const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },

    tabsNavigator: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: Dimensions.get("window").width,
        padding: 10
    }

  });