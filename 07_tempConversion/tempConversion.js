const convertToCelsius = function(inFahrenheit) {
  if(typeof inFahrenheit !== "number") return "ERROR";
  return Math.round(((inFahrenheit - 32) * 5 / 9) * 10) / 10;
};

const convertToFahrenheit = function(inCelcius) {
  if(typeof inCelcius !== "number") return "ERROR";
  return Math.round((inCelcius * 9 / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
