let mydata={
    firsname: "Hamza",
    lastName: "Khan",
    location: "Mansehra",
    ID: 1350364944375,
    Designation: "Dct",
}

// now we will apply object methods on the above object:

//  methdo 1

// mydata.sayHello=function(){
//     console.log("hey!");
// }

// method 2

function greet(){
    console.log("hello!")
}
mydata.sayHello=greet;

// console.log(mydata);
mydata.sayHello();

mydata.valueOf(firstName);
