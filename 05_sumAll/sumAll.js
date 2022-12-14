const sumAll = function(numberOne, numberTwo) {
    if(typeof numberOne !== "number"
    || typeof numberTwo !== "number"
    || numberOne < 0 || numberTwo < 0)
        return "ERROR";

    let sum = 0;

    if(numberTwo < numberOne)
    {
        let temp = numberOne;
        numberOne = numberTwo;
        numberTwo = temp;
    }

    for(let i = numberOne; i <= numberTwo; i++)
    {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
