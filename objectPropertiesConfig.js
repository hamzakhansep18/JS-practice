// properties flag
// writable
// enumerable
// configurable
let user={
    name: "jhon"
};
 let descriptor= Object.getOwnPropertyDescriptor(user, "name");
 console.log(JSON.stringify(descriptor, null, 2));

 let users={};
 Object.defineProperty(users, "name",{
    value: "jhon"
 });
 let descriptors= Object.getOwnPropertyDescriptor(users, "name");
 console.log(JSON.stringify(descriptors, null, 2));

//  non writable

let makeUser={
    name: "jhon"
};
Object.defineProperty(makeUser,"name",{
    writable:false
});
makeUser.name="hei";
console.log(makeUser)
// cannot change the name in makeuser bcz of writable value is false
