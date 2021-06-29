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
    View
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
        }).then(() => RNLocation.requestPermission({
            }),

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
            })).then(granted => {
            if (granted) {
                this._startUpdatingLocation();
            }
        });
    }
    _startUpdatingLocation = () => {
        this.locationSubscription = RNLocation.subscribeToLocationUpdates(
            locations => {
                this.setState({ location: locations[0] });
            }
        );
    };
    _stopUpdatingLocation = () => {
        this.locationSubscription && this.locationSubscription();
        this.setState({ location: null });
    };
    public getLongitude = () => {
        this.this.longitude = location.longitude
        return this.longitude;
    };
    public getLatitude = () => {
        this.latitude = location.latitude
        return this.latitude;
    };
}
