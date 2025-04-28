let random = Math.random() * 9 + 1;

let a = prompt("Enter the value of a : ");
let c = prompt("Enter th operand : ")
let b = prompt("Enter the value of b : ");
let o = {
    '+' : '-',
    '*' : '+',
    '-' : '/',
    '/' : '**'
};

if(random>0.1){
    c = o[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);


}
else{
    console.log(`The result is ${a} ${c} ${b}`);
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
 
}

// let num = Math.random() * 9 + 1; // Generates a float between 1 and 10
// console.log(num);