

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Login from './screens/Login'
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './components/myStack'

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({


});

export default App;
