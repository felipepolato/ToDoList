import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import Login from '../screens/Login';
import Tarefas from '../screens/Tarefas';
import Afazeres from '../screens/Afazeres';
import Register from '../screens/Register';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="Register"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Tarefas" component={Tarefas} />
      <Stack.Screen name="Afazeres" component={Afazeres} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};
