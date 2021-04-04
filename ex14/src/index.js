function myForLoop1() {
  for (var evenNumbers = 0; evenNumbers <= 8; evenNumbers+=2) {
  console.log(evenNumbers);
  }
}

function myForLoop2() {
  for (var evenInversNumbers = 8; evenInversNumbers >= 0; evenInversNumbers-=2) {
  console.log(evenInversNumbers);
  }
}
myForLoop1();
myForLoop2();

module.exports = {
  myForLoop1,
  myForLoop2,
};
