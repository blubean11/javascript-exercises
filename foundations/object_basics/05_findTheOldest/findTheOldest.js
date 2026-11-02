function age(birth, death){
    if(!death){
        death = new Date().getFullYear();
    }

    return death - birth;
}

const findTheOldest = function(array) {
    return oldest = array.reduce((old, current) => {
        const ageOldest = age(old.yearOfBirth, old.yearOfDeath);
        const ageCurrent = age(current.yearOfBirth, current.yearOfDeath);

        if(ageCurrent > ageOldest){
            return current;
        }else{
            return old;
        }
    }, array[0])
};

// Do not edit below this line
module.exports = findTheOldest;
