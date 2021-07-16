import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export class Nextday extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <View style={styles.nextday}>
        <View style={styles.dayview}>
          <Text style={styles.lefttext}>{this.props.forecast.getDay()}</Text>
        </View>
        <View style={styles.sunwiew}>
          <View style={styles.rightView}>
            <FontAwesomeIcon name="sun-o" size={25} color="#F0DA0B" />
            <Text style={styles.righttext}>
              {this.props.forecast.getSunrise() + 'Uhr'}
            </Text>
          </View>
          <View style={styles.rightView}>
            <FontAwesomeIcon name="moon-o" size={25} color="#0101DF" />
            <Text style={styles.righttext}>
              {this.props.forecast.getSunset() + 'Uhr'}
            </Text>
          </View>
        </View>
        <View style={styles.tempviewL}>
          <View style={styles.rightView}>
            <View>
              <Text style={styles.righttext}>
                {'min: ' + this.props.forecast.getTempMin() + '°C'}
              </Text>
              <Text style={styles.righttext}>
                {'max: ' + this.props.forecast.getTempMax() + '°C'}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.tempviewR}>
          <Text style={styles.righttextD}>
            {this.props.forecast.getTempDay() + '°C'}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nextday: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#BFEFFF',
    borderRadius: 10,
  },
  rightView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lefttext: {
    fontSize: 25,
    marginLeft: 15,
  },
  righttext: {
    marginRight: 10,
  },
  righttextD: {
    fontSize: 17,
    marginRight: 10,
  },
  dayview: {
    width: '25%',
  },
  sunwiew: {
    width: '25%',
  },
  tempviewL: {
    width: '26%',
  },
  tempviewR: {
    alignItems: 'center',
    width: '18%',
  },
});
export default Nextday;
