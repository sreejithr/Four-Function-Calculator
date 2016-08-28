import { combineReducers } from 'redux';
import { ADD, SUBTRACT, MULTIPLY, DIVIDE, DISPLAY, INIT } from '../actions';

function result(state=0, action) {
  console.log("State: " + state + " Action type: " + action.type +
              " Action value: " + action.value);
  switch (action.type) {
  case INIT:
    return action.value;
  case ADD:
    return state + action.value;
  case SUBTRACT:
    return state - action.value;
  case MULTIPLY:
    return state * action.value;
  case DIVIDE:
    return (state / action.value).toFixed(3)
  case DISPLAY:
    return state;
  default:
    return state;
  }
}

export const calculatorApp = combineReducers({
  result
});
