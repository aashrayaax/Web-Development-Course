console.log("hiiiii")

let n = 5;
let fact = 1;

for (let i = n; i >= 1; i--) {
    fact *= i; // Multiply progressively
}

console.log(`Factorial of ${n} is: ${fact}`);