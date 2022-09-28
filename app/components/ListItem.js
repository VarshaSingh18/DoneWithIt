import React from 'react';
import { View, StyleSheet, Image} from 'react-native';
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import Colors from '../config/Colors';
import AppTest from './AppTest';

function ListItem({title, subtitle, image}) {
    return (
       <View style={styles.container}>
       <Image style={styles.image}source={image}/>
       <View>
       <AppTest style={styles.title}>{title}</AppTest>
       <AppTest style={styles.subtitle}>{subtitle}</AppTest>
       </View>
       </View>

    );
}

export default ListItem;    

const styles = StyleSheet.create({
    container:{
        flexDirection: "row"
    },
    image:{
     width:70,
     height: 70,
     borderRadius:35,
     marginRight: 10
    },
    title:{
    fontWeight:'500',
    color: Colors.black
    },
    subtitle:{
    color: Colors.medium
    }
})