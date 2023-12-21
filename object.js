let myData={
    firstName: "Hamza",
    lastName: "Khan",
    ID: 1234,
    location: 'Manserha',

    hello(){
        console.log(this.firstName)
    }
};

console.log(myData.hello());
// console.log(myData['lastName']);
// console.log(myData.ID);
// console.log(myData['location']);

let studentRecord={};
studentRecord.studentName='Hamza';
studentRecord.location='Mansehra';
studentRecord.studentId='12345';
console.log(studentRecord)
let sym=Symbol(1);

let rec={
    empName: "Abcs",
    empNo: 12345,
    [sym]: 1,
    empD:   'IT',

    data(){
        console.log(this[sym]);
    }
};

console.log(rec.data());


let obj1={'1':'a', '2':'b'}
let obj2={'3':'c', '4':'d'}
let obj3={'5':'e', '6':'f'}

let obj4={...obj1,...obj2,...obj3};
console.log(obj4);
 let dctData=new Object()
 dctData.internee="pseb";
 console.log(dctData)

 //constructor function 

function User(name, lastName){
    this.name=name;
    this.lastName=lastName;
}
let user=new User('Hamza');

let LastName=new User('khan');
let newuser= new User('ibrar');
console.log(newuser.name)
console.log(user.name);
console.log(LastName.name);
