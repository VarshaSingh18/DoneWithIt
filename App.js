import React from 'react';
import {View,Text} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Card from './app/components/Card';
export default function App() {

  return(

 <View style={{
   backgroundColor:'#f8f4f4',
   padding:20,
   paddingTop:100
 }}>

   <Card 
   title="Red Jacket for sale"
   subtitle="$100"
   image={require("./app/assets/jacket.jpg")}
   />
   </View>
  );

}
