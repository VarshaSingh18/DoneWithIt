import React from 'react';
import { View, StyleSheet,Image} from 'react-native';
import AppText from './AppTest';
import Colors from '../config/Colors';
function Card({title,subtitle,image}) {
    return (
  <View style={styles.card}>
    <Image style={styles.image} source={image}></Image>

    <View style={styles.detailsContainer}>
    <AppText style={styles.title}>{title}</AppText>
    <AppText style={styles.subtile}>{subtitle}</AppText>
    </View>

  </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: Colors.white,
        marginBottom:20,
        overflow: 'hidden'
    },
    image: {
        width:'100%',
        height: 200
    },
    detailsContainer:{
        padding: 20,

    },
    subtile:{
     color: Colors.secondary,
     fontWeight: "bold"
    },
    title: {
        marginBottom: 7,
        color:Colors.black
    }
})
export default Card;