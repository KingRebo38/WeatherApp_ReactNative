/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import Weatherobject from './Weatherobject';

export class Menu extends Component {
  constructor(app) {
    super(app);
    this.app = app;
  }

  refresh = () =>{
    this.app.updateWeatherAndUI();
  }

  render(): React$Node {
    return (
      <View style={styles.menu}>
        <Button title={'refresh'} onPress={this.refresh} />
        <TextInput style={styles.searchbar} id="idSearch" />
        <Button title={'Suchen'} onPress={this.suchenButtonClicked} />
      </View>
    );
  }

  suchenButtonClicked = () =>{

  }
}
const styles = StyleSheet.create({
  menu: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    backgroundColor: '#BFEFFF',
  },

  searchbar: {
    height: 40,
    width: '60%',
    marginRight: 5,
    marginLeft: 5,
    backgroundColor: '#fff',
  },
});
export default Menu;
