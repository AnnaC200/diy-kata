const humanCatDogYears = humanYears => {
function catYears (humanYears){
    if (humanYears === 1) return 15
    if (humanYears === 2) return 9 + catYears(humanYears - 1)
    return 4 + catYears(humanYears - 1)
}

function dogYears (humanYears){
    if (humanYears === 1) return 15
    if (humanYears === 2) return 9 + dogYears(humanYears - 1)
    return 5 + dogYears(humanYears - 1)
}
    return [humanYears,catYears(humanYears),dogYears(humanYears)];
};

module.exports = humanCatDogYears;
