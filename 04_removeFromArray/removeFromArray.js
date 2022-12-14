const removeFromArray = function(originalArray) {
 //array.splice(index, 1)
 //arguments.length = 3 (0 - array, 1 - /3, 2 - /2)
 //originalArray.length = 4



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
