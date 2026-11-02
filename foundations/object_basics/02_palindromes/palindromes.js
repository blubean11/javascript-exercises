const palindromes = function (str) {

    const newStr = str.toLowerCase().replace(/[^A-Za-z0-9]/g, "");
    const reverse =  [...newStr].reverse().join('');
    
    return newStr === reverse;
};

// Do not edit below this line
module.exports = palindromes;
