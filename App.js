import React from 'react';
import {View,Text} from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {

  return(
  <View
  style={{
    flex:1,
    justifyContent:"center",
    alignItems: "center"
  }}>
    <Text style={{
     //fontfamily: "Roboto" (not supported same in both ios and andrioid)
     fontSize:30,
     fontStyle:"italic",
     fontWeight: "800",    //"bold"
     color:"tomato",
     textTransform:"capitalize",
     //textDecorationLine:"line-through"
     textAlign:"center",
     lineHeight:60
      }}>I love react native, This is my My first react native app. Here's some more texts.</Text>
    </View>
  );

}
