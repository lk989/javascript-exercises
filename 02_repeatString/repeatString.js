const repeatString = function(text, repetition) {
    if(repetition < 0)
        return "ERROR";
    
    let newString = "";
    
    for(i = 0; i < repetition; i++)
    {
        newString += text;
    }

    return newString;
};

// Do not edit below this line
module.exports = repeatString;
