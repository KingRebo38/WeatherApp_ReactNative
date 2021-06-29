/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Text, Button, TextInput, StyleSheet, Image} from 'react-native';

export default class Menu extends Component {

    onPress = () => {
        //placeholder for Michi
    };

    render() {
        return (
                <View style={styles.menu}>
                    <View style={styles.burger}></View>
                    <TextInput style={styles.searchbar} id='idSearch'/>
                    <Button title={'Suchen'} onPress={this.onPress}>
                    </Button>
                </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : '#fff'
    },
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




















































