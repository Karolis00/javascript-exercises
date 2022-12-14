const reverseString = function(string) {

    let newString = "";
    if(typeof string !== "string") return "ERROR";
     for(let i = string.length - 1; i >= 0; i--)
     {
        newString += string.charAt(i);
     } 
     return newString;
};

// Do not edit below this line
module.exports = reverseString;
