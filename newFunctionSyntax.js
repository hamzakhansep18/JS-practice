let func= new Function('a','b','return a + b');
console.log(func(2,3));

// set time out function
function sayHi(){
    console.log("Hello")
}
setTimeout(sayHi, 1000)

// with arguments
function Hello(phrase, who){
    console.log(phrase + ", " +who)
}
setTimeout(Hello, 5000,"Hello", "Hamza")

// using aero function

setTimeout(()=>console.log("Hello"), 8000);

    