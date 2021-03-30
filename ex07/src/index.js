//Only change code below this line
function logicalAndOperator(num){
    if (num > 40 && num < 80){
        return "Yes";
    } 
    return "No"; 
}
logicalAndOperator(0);
logicalAndOperator(24);
logicalAndOperator(45);
logicalAndOperator(57);
logicalAndOperator(100);
console.log(logicalAndOperator(0, "Yes" && "No"));
console.log(logicalAndOperator(24, "Yes" && "No"));
console.log(logicalAndOperator(45, "Yes" && "No"));
console.log(logicalAndOperator(57, "Yes" && "No"));
console.log(logicalAndOperator(100, "Yes" && "No"));

     //Only change code above this line
module.exports = logicalAndOperator;