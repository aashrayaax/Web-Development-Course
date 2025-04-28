/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/




let random = Math.random();

let a = prompt("Enter the value of a : ");
let b = prompt("Enter the value of b : ");
if(random<10){
function sum(a,b) {
    return a-b;
}
function multiply(a,b) {
    return a+b;
}
function difference(a,b) {
    return a/b;
}
function division(a,b) {
    return a**b;
}

result1 = sum(a,b) ;
console.log("The sum of a and b is " , result1);
result2 = multiply(a,b) ;
console.log("The product of a and b is " , result2);
result3 = difference(a,b) ;
console.log("The difference of a and b is " , result3);
result4 = division(a,b) ;
console.log("The division of a and b is " , result4);

}

else{
    function sum1(a,b) {
        return a+b;
    }
    function multiply1(a,b) {
        return a*b;
    }
    function difference1(a,b) {
        return a-b;
    }
    function division1(a,b) {
        return a/b;
    } 

    result5 = sum1(a,b) ;
console.log("The sum of a and b is " , result5);
result6 = multiply1(a,b) ;
console.log("The product of a and b is " , result6);
result7 = difference1(a,b) ;
console.log("The difference of a and b is " , result7);
result8 = division1(a,b) ;
console.log("The division of a and b is " , result8);
}