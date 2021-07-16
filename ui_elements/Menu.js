/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
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
    this.state ={
      searchText: ''
    }
  }

  refresh = () => {
    this.app.updateWeatherAndUI();
  };

  render(): React$Node {
    return (
      <View style={styles.menu}>
        <View style={styles.divButton}><Icon.Button style={styles.iconButton} size={25} name={'refresh'}  onPress={this.refresh} /></View>
        <TextInput style={styles.searchbar} id="idSearch" onChangeText={text => this.state.searchText = text}/>
        <Button
          style={styles.searchButton}
          title={'Suchen'}
          onPress={this.suchenButtonClicked}
        />
      </View>
    );
  }

  suchenButtonClicked = () => {
    this.app.updateWeatherAndUI(this.state.searchText);
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
    width: '68%',
    marginRight: 5,
    marginLeft: 5,
    backgroundColor: '#fff',
  },
});
export default Menu;
