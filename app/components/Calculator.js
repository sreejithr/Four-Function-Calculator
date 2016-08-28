import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

import {
  ADD,
  MULTIPLY,
  SUBTRACT,
  DIVIDE,
  DISPLAY,
  INIT,
  performOperation,
} from '../actions';
import { NumericButton, OperationButton } from './Buttons';

import { getTheme } from 'react-native-material-kit';
const theme = getTheme();

var Dimensions = require('Dimensions');
var SCREEN_WIDTH = Dimensions.get('window').height;


class CalculatorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      op: INIT,
      showResult: false
    };
  }

  onOpPress(op) {
    this.props.dispatch(performOperation(this.state.op, this.state.number));
    this.setState({
      op,
      number: 0,
      showResult: true
    });
  }

  onNumberPress(number) {
     this.setState({
      showResult: false,
      number: this.state.number * 10 + number
    });
  }

  clear() {
    this.props.dispatch(performOperation(INIT, 0));
    this.setState({
      number: 0,
      op: INIT,
      showResult: false
    });
  }

  render() {
    var display = this.state.showResult ? this.props.result : this.state.number;
    return (
      <View style={styles.container}>
        <View style={styles.display}>
          <Text style={styles.displayText}>{ display }</Text>
        </View>
        <View style={styles.innerContainer}>
          <View>
            <View style={styles.buttonRow}>
              <NumericButton value={1} onPress={this.onNumberPress.bind(this)}>
                <Text style={styles.button}>1</Text>
              </NumericButton>
              <NumericButton value={2} onPress={this.onNumberPress.bind(this)}>
                <Text style={styles.button}>2</Text>
              </NumericButton>
              <NumericButton value={3} onPress={this.onNumberPress.bind(this)}>
                <Text style={styles.button}>3</Text>
              </NumericButton>
            </View>

            <View style={styles.buttonRow}>
              <NumericButton value={4} onPress={this.onNumberPress.bind(this)}>
                <Text style={styles.button}>4</Text>
              </NumericButton>
              <NumericButton value={5} onPress={this.onNumberPress.bind(this)}>
                <Text style={styles.button}>5</Text>
              </NumericButton>
              <NumericButton value={6} onPress={this.onNumberPress.bind(this)}>
                <Text style={styles.button}>6</Text>
              </NumericButton>
            </View>

            <View style={styles.buttonRow}>
              <NumericButton value={7} onPress={this.onNumberPress.bind(this)}>
                <Text style={styles.button}>7</Text>
              </NumericButton>
              <NumericButton value={8} onPress={this.onNumberPress.bind(this)}>
                <Text style={styles.button}>8</Text>
              </NumericButton>
              <NumericButton value={9} onPress={this.onNumberPress.bind(this)}>
                <Text style={styles.button}>9</Text>
              </NumericButton>
            </View>

            <View style={styles.buttonRow}>
              <OperationButton onPress={() => this.clear()}>
                <Text style={styles.button}>C</Text>
              </OperationButton>
              <NumericButton value={0} onPress={this.onNumberPress.bind(this)}>
                <Text style={styles.button}>0</Text>
              </NumericButton>
              <OperationButton onPress={() => this.onOpPress(DISPLAY)}>
                <Text style={styles.button}>=</Text>
              </OperationButton>
            </View>
          </View>

          <View style={styles.buttonColumn}>
            <OperationButton onPress={() => this.onOpPress(ADD)}>
              <Text style={styles.button}>+</Text>
            </OperationButton>
            <OperationButton onPress={() => this.onOpPress(SUBTRACT)}>
              <Text style={styles.button}>-</Text>
            </OperationButton>
            <OperationButton onPress={() => this.onOpPress(MULTIPLY)}>
              <Text style={styles.button}>x</Text>
            </OperationButton>
            <OperationButton onPress={() => this.onOpPress(DIVIDE)}>
              <Text style={styles.button}>/</Text>
            </OperationButton>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#232323',
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    alignItems: 'center'
  },
  button: {
    fontSize: 23
  },
  buttonRow: {
    flexDirection: 'row'
  },
  display: {
    marginTop: 50
  },
  displayText: {
    fontSize: 50,
    paddingTop: 30,
    paddingBottom: 30,
    textAlign: 'center',
    color: 'white'
  }
});

const mapStateToProps = state => {
  return {
    result: state.result
  };
}

export var Calculator = connect(mapStateToProps)(CalculatorComponent);
