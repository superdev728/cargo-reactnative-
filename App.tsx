import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import List from './pages/List';
import Detail from './pages/Detail';
import MapPage from './pages/Map';
import React from 'react';


const Stack = createNativeStackNavigator();

export default function App() {
 
    return (
 
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={List}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Map" component={MapPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
