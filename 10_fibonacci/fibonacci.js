const fibonacci = function(x) {

    if(x < 0) return "OOPS";
    const fibo = [0, 1, 1];
    for ( let i = 2; i < x; i++)
    {
        fibo.push(fibo[i] + fibo[i-1]);
    }
    return fibo[x];
};

// Do not edit below this line
module.exports = fibonacci;
