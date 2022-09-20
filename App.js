import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,SafeAreaView, Button } from 'react-native';
import { wView } from 'react-native-web';

export default function App() {
  console.log(require("./assets/favicon.png"));
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Click me" onPress={()=>{alert("Button tapped"), console.log("Button tapped")}}/>
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
