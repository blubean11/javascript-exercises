const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  const total = array.reduce((acc, cur) => acc + cur, 0);
  return total;
};

const multiply = function (array) {
  const total = array.reduce((acc, cur) => acc * cur, 1);
  return total;
};

const power = function (a, b) {
return a ** b;
};

const factorial = function (a) {
  let total = 1;
  for(let i = 1; i <= a; i++){
    total = i * total;
  }
  return total;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
