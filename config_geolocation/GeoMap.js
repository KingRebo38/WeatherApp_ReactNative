/**
 * Sample React Native App
 *
 * @format
 * @flow strict-local
 */

import Geocoder from 'react-native-geocoding';
import MapView from 'react-native-maps';
import React, {Component} from 'react';
import {View, StyleSheet, Dimensions,} from 'react-native';

//Google-Geocoder/-Map-Api
Geocoder.init("AIzaSyBdqo-hwl1u-n1iEFE5j2JZ-N37u7uNzxs"); // use a valid API key

//OpenWeather
const api_key = 'b59ec8ed4fabf7ce3e7a5070a3d2dd3d';

export default class GeoMap extends Component {

    render()
    {
        return (
            <View>
                <MapView style={styles.map}
                         initialRegion= { {
                             //location of Dillenburg/-Frohnhausen
                             latitude: 50.7771
                             ,
                             longitude: 8.2997
                             ,
                             latitudeDelta: 0.0922
                             ,
                             longitudeDelta: 0.0421
                             ,
                         }
                         }
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
});
