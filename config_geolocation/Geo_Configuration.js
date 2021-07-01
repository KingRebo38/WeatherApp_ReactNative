/**
 * Geo_Configuration
 * Author: M. Medenbach
 * Last Changes: 29.06.2021
 */

import React from "react";
import {
    Linking,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    Button,
    PermissionsAndroid
} from "react-native";
import RNLocation from "react-native-location";

export default class Geo_Configuration extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            location: null
        };
    }

    componentWillMount() {
        RNLocation.configure({
            distanceFilter: 5.0
        });

        RNLocation.requestPermission({
            ios: "whenInUse",
            android: {
                detail: "fine",
                rationale: {
                    title: "Location permission",
                    message: "We use your location to demo the library",
                    buttonPositive: "OK",
                    buttonNegative: "Cancel"
                }
            }
        }).then(granted => {
            if (granted) {
                this._startUpdatingLocation();
            }
        });
    }

    _startUpdatingLocation = () => {
        this.locationSubscription = RNLocation.subscribeToLocationUpdates(
            locations => {
                this.setState({location: locations[0]});
            }
        );
    };

    _stopUpdatingLocation = () => {
        this.locationSubscription && this.locationSubscription();
        this.setState({location: null});
    };

    getLongitude = () => {
        const { location } = this.state;
        return this.location.longitude;
    };
    getLatitude = () => {
        const { location } = this.state;
        return this.location.latitude;
    };
}


