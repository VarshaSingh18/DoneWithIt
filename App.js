import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight,TouchableNativeFeedback,SafeAreaView } from 'react-native';

export default function App() {
  console.log(require("./assets/favicon.png"));
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello World!</Text>

      <TouchableOpacity onPress={()=>console.log("Image Tapped")}>
      <Image source={{
        width : 200,
        height :300,
        uri : "https://picsum.photos/200/300"}}/>
        </TouchableOpacity>

      <StatusBar style="auto" />
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
