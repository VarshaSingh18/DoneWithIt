import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,SafeAreaView, Button, Alert, Platform } from 'react-native';
import { View } from 'react-native-web';

export default function App() {
  console.log(require("./assets/favicon.png"));
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Click me" onPress={()=>{
        Alert.prompt("My title","My Message",(text)=> console.log(text) )
      }}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS=== "android" ? StatusBar.currentHeight : 0
  },
});
