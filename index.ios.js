/**
 * Four Function Calculator app
 * Author: Sreejith R (http://sreejithr.in)
 * Email: sreejith.r44@gmail.com
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { Calculator } from './app/components/Calculator';
import { calculatorApp } from './app/reducers';

let store = createStore(calculatorApp);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Calculator />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('calculator', () => App);
