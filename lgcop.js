// or operator
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// if only one condition is true it will return the true otherwise it will return false
// Example
 let number=100;
 if(number>100 || number<100){
    console.log('The number is not hundred')
 }else{
    console.log('number is 100!')
 }
 let hour=12;
 let isWeekend=true;
 if(hour < 10 || hour > 18 || isWeekend){
    console.log('office is closed')
}

// and operator
console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);

// only if both the values are true the result will be true other wise it will be false
//  Example

// program using && and || operator to find leap year
 let year=2000;

 if((year%4==0) && (year%100!=0) || (year%400==0)){
    console.log(`${year} is the leap year`)
 }else{
    console.log(`${year} is not leap year`)
 }

//  program to find the triangle type ispsceles, equilateral, scelene.
 let side1=11;
 let side2=12;
 let side3=13;

 if((side1==side2) && (side1==side3)){
    console.log("all sides are equal. so triangle is equilateral")
 }else if((side1==side2) || (side2==side3) || (side1==side3) ){
    console.log('triangle is isosceles bcz two side are equal')
 }else{
    console.log('no side are equal triangle is scelene')
 }
 
// !not operator convert boolean true values to false and false values to true

console.log(!true);
console.log(!false);

// Nullish operator
let userName;
let userId;

console.log(userName ?? userId);
console.log(1 && 2);

// Task

let whoIsThere='Admin';
if(whoIsThere=="Admin"){
   let pass="the master ";
   if(pass==="the master"){
      console.log('Welcome')
   }else if((pass==='') || (pass===null)){
      console.log('Canceled')
   }else{
      console.log('wrong pass')
   }
}else if((whoIsThere==='') || (whoIsThere===null)){
   console.log("canceled")
}else{
   console.log('dont know who you are')
}