import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
const PocketView = props => {

        return (
            <View style={styles.container}>
                <Text style={styles.citytext}>{props.city}</Text>
                <Image style={styles.weatherImage} source={require('C:/Users/hspfl/IdeaProjects/WeatherApp_ReactNative/ui_elements/Unbenannt.png')}/>
                <Text style={styles.citytext}>{props.temp}</Text>
            </View>
        );

}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },

    weatherImage:{
        width: 175,
        height: 175,
    },
    citytext:{
        fontSize: 30,
    }
});
export default PocketView;
