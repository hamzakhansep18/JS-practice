// find the largest of three numbers using if else
let num=10;
let num1=11;
let num2=10;

if (num>num1){
    if(num>num2){
    console.log(`${num} is greater than ${num1}`)
    }else{
        console.log(' num 2 is largest of three numbers')
    }
}else if(num1>num){
    if(num1>num2){
        console.log(`${num1} is greater than ${num}`)
    }else{
        console.log('num2 is the largest of three numbers')
    }
}