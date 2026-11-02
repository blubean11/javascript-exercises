const fibonacci = function(a) {

    if(!valid(a)){
        return "OOPS";
    }

    let cur = 0;
    let previous1 = 1;
    let previous2 = 0;
    for(let i = 1; i < a; i++){
        cur = previous1 + previous2;
        previous2 = previous1
        previous1 = cur;
    }
    return cur;

    function valid(b){
        if(/^\d+$/.test(b) && b > 0){
            return true;
        }
    }
};

// Do not edit below this line
module.exports = fibonacci;
