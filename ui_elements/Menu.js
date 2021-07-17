/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon5 from 'react-native-vector-icons/FontAwesome5';

import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';

export class Menu extends Component {
  constructor(app) {
    super(app);
    this.app = app;
    this.searchText = ''
  }

  refresh = () => {
    this.app.updateWeatherAndUI();
  };

  render(): React$Node {
    return (
      <View style={styles.menu}>
        <View style={styles.divButton}><Entypo.Button style={styles.iconButton} size={25} name={'location-pin'}  onPress={this.refresh} /></View>
        <TextInput style={styles.searchbar} id="idSearch" onChangeText={searchText => this.app.setState({searchText: searchText})}/>
        <View style={styles.divButton}><Icon5.Button style={styles.iconButton} size={25} name={'search-location'}  onPress={this.suchenButtonClicked} /></View>
      </View>
    );
  }

  suchenButtonClicked = () => {
    console.log("searchText: " + this.app.state.searchText)
    // this.setState({searchText: this.state.searchText})
    this.app.updateWeatherAndUI(this.app.state.searchText);
  };
}
const styles = StyleSheet.create({
  menu: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    backgroundColor: '#BFEFFF',
    // position: 'absolute',
  },
  divButton:{
    marginLeft: 5
  },
  iconButton:{
    marginRight: -10,
    paddingLeft: 10,
    paddingRight: 10,
    color: '#fff',
    backgroundColor: '#2296f3',
  },
  searchButton: {
    width: '20%',
    // textAlign: 'right',
  },
  searchbar: {
    height: 40,
    width: '73%',
    marginRight: 5,
    marginLeft: 5,
    backgroundColor: '#fff',
  },
});
export default Menu;
