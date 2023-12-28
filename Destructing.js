let arr=['Hamza', 'Khan'];
let [firstName, lastName]=arr;
console.log(firstName);
console.log(lastName);
// using split method
let[fname, lname]="Hamza khan".split(" ");
console.log(fname)
console.log(lname)
// another simple method

let name=arr[0];
let surname=arr[1];
console.log(name)
console.log(surname)

// swap variable

let guest="jane";
let admin=" pete";
[guest, admin]=[admin, guest];
console.log(admin)
console.log(guest)

// rest operator

// // let [name1, name2, ...rest]=['Hamza', 'khan', 'Developer', "of islamic republic of pakistan"];
// console.log(name1)
// console.log(name2)
// console.log(rest[0])
// console.log(rest[1])

// destructing object

let option={
    one: 'Hello',
    two: 'Hi',
    three: "hey",

};
let {one, two, three} = option;
console.log(one);
console.log(two);
console.log(three);

// Another method

let empdata={
    empName: "Hamza",
    empId: 56916,
    empPos: "Developer",
    empDesg: "Dct"
}

// let{empName:N, empId:I, empPos:P, empDesg:D}=empdata;
// console.log(N)
// console.log(I)
// console.log(P)
// console.log(D)

// rest method in object
let{empName, ...rest}=empdata;
console.log(rest.empId)
console.log(rest.empPos)
console.log(rest.empDesg)

// nested destructuring

let items={
    size: {
        width:100,
        height:200,
    },
    item:["cake", "cream"],
    extra: true
};

let{
    size:{
        width,
        height
    },
    item:[item1, item2],
    title="menu"
}=items;

console.log(title);
console.log(item1);
console.log(item2);
console.log(height);
console.log(width);