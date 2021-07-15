/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Text, Button, TextInput, StyleSheet, Image, TouchableHighlight} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo'
import FontistoIcon from "react-native-vector-icons/Fontisto";
import Entypo from "react-native-vector-icons/Entypo";
import Weatherobject from "./Weatherobject";

const Menu = props =>  {

        return (
                <View style={styles.menu}>
                    <TextInput style={styles.searchbar} id='idSearch'/>
                    <Button title={'Suchen'} onPress={props.app.suchenButtonClicked}>
                    </Button>
                </View>
        );
}
const styles = StyleSheet.create({

    menu:{
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        backgroundColor: '#BFEFFF'
    },

    searchbar:{
        height: 40,
        width: '80%',
        marginRight: 5,
        marginLeft: 5,
        backgroundColor: '#fff'
    },

});
export default Menu;



















































