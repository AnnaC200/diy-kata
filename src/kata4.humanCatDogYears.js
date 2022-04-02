const humanCatDogYears = humanYears => {
function catYears (humanYears){
    if (humanYears === 1) return 15
    if (humanYears === 2) return 9 + catYears(humanYears)
    if (humanYear =+ 3) return 4 + catYears (humanYears)
    return catYears
 
}

function dogYears (humanYears){
    if (humanYears === 1) return 15
    if (humanYears === 2) return 9 + dogYears(humanYears)
    if (humanYear =+ 3) return 4 + dogYears (humanYears)
    return dogYears
}
    return [humanYears,catYears,dogYears];
};

module.exports = humanCatDogYears;
