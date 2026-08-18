const removeFromArray = function(arr, ...items) {
    for(item of items){
        while(arr.includes(item)){
            arr.splice(arr.indexOf(item),1);
        }
    }
    return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
