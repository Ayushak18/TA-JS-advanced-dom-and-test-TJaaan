function add() {}

function subtract() {}

function sum() {}

function multiply() {}

function power() {}

function factorial() {}

function removeFromArray(arr, num) {
  let indexOfNumber = arr.indexOf(num);
  arr.splice(indexOfNumber, 1);
  return arr;
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
  removeFromArray,
};
