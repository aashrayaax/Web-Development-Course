var a = 50;
var b = 10;
var c = "Shreya";
console.log(a + b); // 60

console.log(a+b+2)

console.log(typeof a,typeof b,typeof c)


var a1 = 4;
console.log(a1); // 4
a1 = a1+2;
console.log(a1); // 6we can change valures od var

// const b1 = 4;
// console.log(b1); // 4
// b1 = b1+2; // TypeError: Assignment to constant variable.   // we cannot change the value of const
// console.log(b1); // 4

let c1 = 4;
console.log(c1); 
c1 = c1+2;
console.log(c1);  
//   we can change let



let l = 10;
let m = 20.32;
let n = "Shreya";
let p = null;    
// type of null is object  you have to put this in your brain until you are dead aashrayaaaaa
let o1 = true;
let q = undefined;
let r = Symbol("Shreya"); // Symbol is a unique and immutable data type
let s = BigInt(1234567890123456789012345678901234567890n); // BigInt is used for large integers
let t = [1, 2, 3, 4, 5]; // Array
let u = { name: "Shreya", age: 20 }; // Object

console.log(l, m, n, o1, p, q, r, s, t, u);
console.log(typeof l, typeof m,typeof  n, typeof o1,typeof  p,typeof  q,typeof  r, typeof s, typeof t, typeof u);


let o={
name :"Shreya",
age : 20,
isStudent : true,
hobbies : ["reading","writing"]
}

console.log(o);

o.salary = 100000;

console.log(o);




