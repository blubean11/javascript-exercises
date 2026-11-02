const getTheTitles = function(books) {
    const titles = books.reduce((accumulator, current) => {
        accumulator.push(current.title);
        return accumulator;
    }, []);
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
