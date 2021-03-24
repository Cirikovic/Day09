//Only change code below this line
function logicalAndOperator(num){
    if (num < 20 || num > 30){
        return "Out";
    } else
    return "in"; 
}
logicalAndOperator(0);
logicalAndOperator(9);
logicalAndOperator(20);
logicalAndOperator(23);
logicalAndOperator(30);
logicalAndOperator(31);
logicalAndOperator(105);
console.log(logicalAndOperator(0 < 20 || 0 > 30));
console.log(logicalAndOperator(0 < 20 || 0 > 30));
console.log(logicalAndOperator(0 < 20 || 0 > 30));
console.log(logicalAndOperator(0 < 20 || 0 > 30));
console.log(logicalAndOperator(0 < 20 || 0 > 30));
console.log(logicalAndOperator(0 < 20 || 0 > 30));
console.log(logicalAndOperator(0 < 20 || 0 > 30));

     //Only change code above this line
module.exports = logicalAndOperator;