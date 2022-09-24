import React from 'react';
import {Text,StyleSheet,Platform} from 'react-native';
function AppTest(props) {
    return (
  <Text style={styles.text}>{props.children}</Text>
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize: 18,
        fontFamily: Platform.OS==="android" ? "Roboto" : "Avenir"
    }
})
export default AppTest;