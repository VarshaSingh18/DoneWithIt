import React from 'react';
import {View,Text} from 'react-native';
import AppTest from './app/components/AppTest';
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function App() {

  return(
  <View
  style={{
    flex:1,
    justifyContent:"center",
    alignItems: "center"
  }}>
    <AppTest>I love react native </AppTest>
    <MaterialCommunityIcons name="email" size={200} color="dodgerblue"/>
    </View>
  );

}
