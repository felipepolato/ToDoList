import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: '',
    };
  }
  render() {
    const {navigation} = this.props;
    const {nome} = this.props.route.params;

    return (
      <View style={styles.container}>
      <Text>Estou Aqui</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  tabsNavigator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: Dimensions.get('window').width,
    padding: 10,
  },
});
