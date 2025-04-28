let a = prompt("Enter the value of a : ");
let operand = prompt("Enter th operand : ")
let b = prompt("Enter the value of b : ");
let random = Math.random();


if(random>0.1)
    {
        if(operand == '+'){
            console.log( Number(a)-Number(b));
        }
        if(operand == '*'){
            console.log( Number(a)+Number(b));
        }
        if(operand == '-'){
            console.log( Number(a)/Number(b));
        }
        if(operand == '/'){
            console.log( Number(a)**Number(b));
        }

    }
else{
    if(operand == '+'){
        console.log( Number(a)+Number(b));
    }
    if(operand == '*'){
        console.log( Number(a)*Number(b));
    }
    if(operand == '-'){
        console.log( Number(a)-Number(b));
    }
    if(operand == '**'){
        console.log( Number(a)**Number(b));
    }

}