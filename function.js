// function key word then name then parameters.
// addition function
function add(a, b){
    return a+b;
}
console.log(add(8,9));

// power function

function power(a){
    return a**2;
}
console.log(power(9));

//  factorial function
function factorial(a){
    if(a==1 || a==0){
        return 1;
    }else{
        return a*factorial(a-1);
    }
}
console.log(factorial(5));

// function to check number is odd or even

function oddEven(a){
    if(a % 2 == 0){
        return 'Even';
    }else{
        return 'Odd';
    }
}
console.log(oddEven(2))
console.log(oddEven(7))

// function with default parameters
function multiplication(a,b=4){
    return a*b;
}
console.log(multiplication(2))
console.log(multiplication(2, 6))