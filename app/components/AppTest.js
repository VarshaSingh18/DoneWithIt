import React from 'react';
import {Text,StyleSheet,Platform} from 'react-native';
function AppTest({children, style}) {
    return (
  <Text style={[styles.text, style]}>{children}</Text>
    );
}
Platform.select({
    ios:{
        fontSize:20,
        fontFamily:"Avenir"
    },
    android:{
        fontSize: 18,
        fontFamily:"Roboto"
    }
})
const styles = StyleSheet.create({
    text:{
    color: "tomato",
    ...Platform.select({
        ios:{
            fontSize:20,
            fontFamily:"Avenir"
        },
        android:{
            fontSize: 18,
            fontFamily:"Roboto"
        }
    })
  }
})
export default AppTest;