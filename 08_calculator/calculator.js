const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((sum, current) => sum + current, 0);
};

const multiply = function(arr) {
  return arr.reduce((sum, current) => sum * current, 1);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(x) {
  if(x < 1) return 1;
  if (x <= 1) return x;
	return x * factorial (x-1);
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
