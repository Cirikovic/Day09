//Only change code below this line
function logicalAndOperator(num){
    if (num <= 80 && num >= 40){
        return "Yes";
    } 
    return "No";
}
logicalAndOperator(0);
logicalAndOperator(24);
logicalAndOperator(45);
logicalAndOperator(57);
logicalAndOperator(100);
console.log(logicalAndOperator(0 <= 80 && 0 >= 40));
console.log(logicalAndOperator(24 <= 80 && 24 >= 40));
console.log(logicalAndOperator(45 <= 80 && 45 >= 40));
console.log(logicalAndOperator(57 <= 80 && 57 >= 40));
console.log(logicalAndOperator(100 <= 80 && 100 >= 40));

     //Only change code above this line
     module.exports = logicalAndOperator;