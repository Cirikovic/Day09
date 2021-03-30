//Only change code below this line
function logicalAndOperator(num){
    if (num < 20 || num > 30){
        return "Out";
    } 
    return "In"; 
}
logicalAndOperator(0);
logicalAndOperator(9);
logicalAndOperator(20);
logicalAndOperator(23);
logicalAndOperator(30);
logicalAndOperator(31);
logicalAndOperator(105);
console.log(logicalAndOperator(0, "Out" || "In"));
console.log(logicalAndOperator(9, "Out" || "In"));
console.log(logicalAndOperator(20, "Out" || "In"));
console.log(logicalAndOperator(23, "Out" || "In"));
console.log(logicalAndOperator(30, "Out" || "In"));
console.log(logicalAndOperator(31, "Out" || "In"));
console.log(logicalAndOperator(105, "Out" || "In"));

     //Only change code above this line
module.exports = logicalAndOperator;