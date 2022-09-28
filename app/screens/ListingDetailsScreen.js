import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import AppText from '../components/AppTest';
import Colors from '../config/Colors';
import ListItem from '../components/ListItem';
function ListingDetailsScreen(props) {
    return (
     <View>
    <Image style={styles.image} source={require('../assets/jacket.jpg')}/>
    <View style={styles.detailedContainer}>
    <AppText style={styles.title}>Red jacket for sale</AppText>
    <AppText style={styles.price}>100$</AppText>

    <View style={styles.userContainer}>
    <ListItem
    image={require("../assets/jacket.jpg")}
    title="Rahul Verma"
    subtitle="5 Listings"
    ></ListItem>
    </View>

    </View>
     </View>
    );
}

const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: 300
    },
    detailedContainer:{
     padding:20
    },
    title:{
        fontSize: 24,
        fontWeight:"500",
        color:Colors.black
    },
    price :{
        color: Colors.secondary,
        fontSize: 20,
        fontWeight:'bold',
        marginVertical: 10
    },
    userContainer:{
        marginVertical:40
    }
})

export default ListingDetailsScreen;