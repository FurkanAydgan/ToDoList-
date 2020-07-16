import React from 'react';
import { StyleSheet, Text, View, Image,ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';

export default function Header({ navigation }) {

    const openMenu = () => {

        navigation.openDrawer()

    }

    return (
        <ImageBackground source={require('../assets/game_bg.png')} style={styles.header} >
            <MaterialIcons name='menu' size={25} onPress={openMenu} style={styles.icon} />
            <View style={styles.headerTitle}>
                <Image source={require('../assets/heart_logo.png')} style={styles.headerImage} />
                <Text style={styles.headerText}>ToDoList </Text>
            </View>
        </ImageBackground>
    )

}


const styles = StyleSheet.create({

    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
        left: 30
    },

    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    icon: {
        position: 'absolute',
        left: 13
    },
    headerImage: {
        width:26,
        height:26,
        marginHorizontal:10,
    },
    headerTitle:{
        flexDirection:'row'
    }

})