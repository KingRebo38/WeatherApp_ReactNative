/**
 * Geo_Configuration
 * Author: M. Medenbach
 * Last Changes: 02.07.2021
 *
 *
 * @format
 * @flow strict-local
 */

import React, {Component, isValidElement} from 'react';
// import Geolocation from '@react-native-community/geolocation';
import RNLocation from 'react-native-location';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Button,
    Text,
    useColorScheme,
    View,
    PermissionsAndroid,
    Alert,
} from 'react-native';

export default class Geo_Configuration extends Component {
    state = {
        lat: 'lat',
        lon: 'lon',
        temp: 'temp',
    };

    constructor() {
        super();
    }

    start = async () => {
        await this.requestLocationPermission();
        RNLocation.configure({
            distanceFilter: 100, // Meters
            desiredAccuracy: {
                ios: 'best',
                android: 'highAccuracy',
            },
            // Android only
            androidProvider: 'auto',
            interval: 5000, // Milliseconds
            fastestInterval: 10000, // Milliseconds
            maxWaitTime: 5000, // Milliseconds
            // iOS Only
            activityType: 'other',
            allowsBackgroundLocationUpdates: false,
            headingFilter: 1, // Degrees
            headingOrientation: 'portrait',
            pausesLocationUpdatesAutomatically: false,
            showsBackgroundLocationIndicator: false,
        }).then(r => null);

        var permission = await RNLocation.requestPermission({
            ios: 'whenInUse',
            android: {
                detail: 'coarse',
                rationale: {
                    title: 'We need to access your location',
                    message: 'We use your location to show where you are on the map',
                    buttonPositive: 'OK',
                    buttonNegative: 'Cancel',
                },
            },
        });
        RNLocation.getCurrentPermission().then(currentPermission => {
            console.log(currentPermission);
        });
        var location = await RNLocation.getLatestLocation();
        this.state = {
            temp: JSON.stringify(location),
            lat: JSON.stringify(location.latitude),
            lon: JSON.stringify(location.longitude)}
    };

    requestLocationPermission = async () => {
        await RNLocation.requestPermission({
            ios: 'whenInUse', // or 'always'
            android: {
                detail: 'coarse', // or 'fine'
                rationale: {
                    title: 'We need to access your location',
                    message: 'We use your location to show where you are on the map',
                    buttonPositive: 'OK',
                    buttonNegative: 'Cancel',
                },
            },
        });
    };

    getLocation = () => {
        return this.state.temp;
    };

    getLongitude = () => {
        return this.state.lon;
    };

    getLatitude = () => {
        return this.state.lat;
    };
}
