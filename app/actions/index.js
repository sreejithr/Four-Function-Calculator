export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";
export const MULTIPLY = "MULTIPLY";
export const DIVIDE = "DIVIDE";
export const DISPLAY = "DISPLAY";
export const INIT = "INIT";

export var performOperation = (type, value) => {
  return {
    type: type,
    value
  };
}
