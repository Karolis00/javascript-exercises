const palindromes = function (str) {
    str = str.toLowerCase();
    const letters = str.replace(/[^a-z0-9]/g, "").split('');
    /*console.log(letters);
    check = true;
    for(let i = 0; i < letters.length/2; i++)
    {
        if(letters[i] !== letters[letters.length - 1 - i]) check = false;
    }
    return check;*/
    return letters.join() === letters.reverse().join();
};

// Do not edit below this line
module.exports = palindromes;
