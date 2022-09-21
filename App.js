import React from 'react';
import {View} from 'react-native';

export default function App() {

  return(
   <View style={{
     backgroundColor : "#fff",
     flex: 1,
     flexDirection: "row-reverse",//horizontal
     justifyContent: "center",  //main
     alignItems: "center", // verticle
     alignContent:"center",
     flexwrap: "wrap"
   }}>
       <View style ={{
         backgroundColor: "gold",
         width:100,
         height:100,
       }}/>

       <View style ={{
         backgroundColor: "dodgerblue",
         width:100,
         height:100
       }}/>
       <View style ={{
         backgroundColor: "tomato",
         width:100,
         height:100
       }}/>
       <View style ={{
         backgroundColor: "green",
         width:100,
         height:100
       }}/>
     </View>

 
  );

}
