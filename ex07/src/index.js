//Only change code below this line
function logicalAndOperator(num){
    if (num > 40 && num < 80){
        return "Yes";
    } 
    return "No"; 
}
logicalAndOperator(45);
logicalAndOperator(0);
logicalAndOperator(24);
logicalAndOperator(57);
logicalAndOperator(100);
console.log(logicalAndOperator(45 > 40 && 45 < 80));
console.log(logicalAndOperator(0 >= 40 && 0 <= 80));
console.log(logicalAndOperator(24 >= 40 && 24 <= 80));
console.log(logicalAndOperator(57 >= 40 && 57 <= 80));
console.log(logicalAndOperator(100 >= 40 && 100 <= 80));

     //Only change code above this line
module.exports = logicalAndOperator;