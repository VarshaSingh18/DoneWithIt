import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,SafeAreaView, Button, Alert } from 'react-native';
import { wView } from 'react-native-web';

export default function App() {
  console.log(require("./assets/favicon.png"));
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Click me" onPress={()=>{
        Alert.alert("My Title", "My Message", [
          {text: "Yes", onPress:()=>{console.log("Yes")}},
          {text: "No", onPress:()=>{console.log("No")}}
        ])
      }}/>
    </SafeAreaView>
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
