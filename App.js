import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';
import { StyleSheet } from 'react-native';

import Details from './components/Details';

import HomePage from './components/HomePage';
import Items from './components/Items';


const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator
        screenOptions={{headerShown: true}}
      >
        <Stack.Screen name='Home' component={HomePage} />
        <Stack.Screen name='Details' component={Details}/>
        <Stack.Screen name='Items' component={Items}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
});

