const removeFromArray = function(originalArray) {

 for(let i = 0; i < originalArray.length; i++)
 {
    for(let j = 1; j < arguments.length; j++)
    {
        if(originalArray[i] === arguments[j]) 
        {
            originalArray.splice(i, 1);
            i--;
            break;
        }
    }
 }
 return originalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
