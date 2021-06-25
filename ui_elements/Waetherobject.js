import React from 'react';
import {View, Text,StyleSheet} from 'react-native';

const Weatherobject = (props) =>{
        return (
            <View style={styles.container}>
                <Text>{props.text}</Text>
            </View>
        )
    }

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        marginTop: 12,
        alignItems: 'center',
        backgroundColor: '#80ff80'
    }
});
export default Weatherobject;
