function myForLoop1 () {
    for (var evenNumbers = 0; evenNumbers <= 8; evenNumbers++)
    return evenNumbers;
    console.log(evenNumbers);
}

function myForLoop2 (evenInvesNumbers) {
    for (var evenInvesNumbers = 8; evenInvesNumbers >= 0; evenInvesNumbers--)
    return evenInvesNumbers;
    console.log(evenInvesNumbers);
}
module.exports = {
    myForLoop1,
    myForLoop2
};