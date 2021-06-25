/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Text, Button, TextInput} from 'react-native';

export default class App extends Component {
  state = {
    textValue: 'Change me',
    temp: '',
  };

  // constructor(props) {
  //   super(props);
  // }
  onPress = () => {
    this.setState({
      textValue: this.state.temp,
    });
  };

  httpsRequest() {}

  render() {
    return (
      <View style={{paddingTop: 25}}>
        <TextInput
          name={'input'}
          onChangeText={value => this.setState({temp: value})}
          value={this.state.temp}
        />
        <Text>{this.state.textValue}</Text>
        <Button title="Change Text" onPress={this.onPress} />
      </View>
    );
  }
}
