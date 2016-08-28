import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

import { MKButton, MKColor } from 'react-native-material-kit';

var Dimensions = require('Dimensions');
var SCREEN_WIDTH = Dimensions.get('window').height;

export class NumericButton extends Component {
  onPress() {
    if (this.props.onPress) {
      this.props.onPress(this.props.value);
    }
  }

  render() {
    return (
      <MKButton
       backgroundColor={MKColor.Silver}
       shadowRadius={1}
       shadowOffset={{width:0, height:2}}
       shadowOpacity={.2}
       shadowColor="black"
       onPress={this.onPress.bind(this)} style={styles.button}>
        <View>{this.props.children}</View>
      </MKButton>
    );
  }
}

export class OperationButton extends Component {
  onPress() {
    if (this.props.onPress) {
      this.props.onPress();
    }
  }

  render() {
    return (
      <MKButton
       backgroundColor={MKColor.Orange}
       shadowRadius={2}
       shadowOffset={{width:0, height:2}}
       shadowOpacity={.7}
       shadowColor="black"
       onPress={this.onPress.bind(this)} style={styles.button}>
        <View>{this.props.children}</View>
      </MKButton>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    padding: 3,
    margin: 3,
    width: SCREEN_WIDTH/8,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
