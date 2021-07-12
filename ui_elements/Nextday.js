import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";



const Nextday = props => {
    return(
        <View style={styles.nextday}>
            <Text style={styles.lefttext}>{props.day}</Text>
            <View style={styles.rightView}>
                <FontAwesomeIcon name="sun-o" size={25} color="#F0DA0B"/>
                <Text style={styles.righttext}>{props.state.min_temperature + 'Uhr'}</Text>
            </View>
            <View style={styles.rightView}>
                <FontAwesomeIcon name="moon-o" size={25} color="#0101DF"/>
                <Text style={styles.righttext}>{props.state.max_temperature + 'Uhr'}</Text>
            </View>
            <View style={styles.rightView}>
                <View>
                    <Text style={styles.righttext}>{'min: ' + props.state.min_temperature + '°C'}</Text>
                    <Text style={styles.righttext}>{'max: ' + props.state.max_temperature + '°C'}</Text>
                </View>
                <Text style={styles.righttext}>{props.state.temperature + '°C'}</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    nextday:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        alignItems: 'center',
        backgroundColor: '#BFEFFF',
        borderRadius: 10,
    },
    rightView:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    lefttext:{
        fontSize: 25,
        marginLeft: 15,
    },
    righttext:{
        marginRight: 10,
    },

});
export default Nextday;
