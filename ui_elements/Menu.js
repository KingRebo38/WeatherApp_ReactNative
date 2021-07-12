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

export default class Menu extends Component {

    suchenButtonClicked = () => {
        //placeholder for Michi
    };
    currentLocationButtonClicked = () => {
        //placeholder for Michi XD
    };

    render() {
        return (
                <View style={styles.menu}>
                    <TouchableHighlight onPress={this.currentLocationButtonClicked}>
                        <View style={styles.burger}>
                            <EntypoIcon name="location" size={49} color="#FDFDFD"/>
                        </View>
                    </TouchableHighlight>
                    <TextInput style={styles.searchbar} id='idSearch'/>
                    <Button title={'Suchen'} onPress={this.suchenButtonClicked}>
                    </Button>
                </View>
        );
    }
}
const styles = StyleSheet.create({

    menu:{
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        backgroundColor: '#e6f2ff'
    },
    burger:{
        height: 50,
        width: 50,
        marginRight : 12,
        backgroundColor: '#99ccff'

    },
    searchbar:{
        height: 40,
        width: '65%',
        marginRight: 5,
        backgroundColor: '#fff'
    },

});




















































