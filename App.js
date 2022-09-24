import React from 'react';
import {View,Text} from 'react-native';
import AppTest from './app/components/AppTest';

export default function App() {

  return(
  <View
  style={{
    flex:1,
    justifyContent:"center",
    alignItems: "center"
  }}>
    <AppTest>I love react native </AppTest>
    </View>
  );

}
