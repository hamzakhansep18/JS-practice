let arr=["my", "name", "is", "hamza"];
// splice
arr.splice(0,3, "i ", "am");
console.log(arr)

let barry=[];
let arry=['abc', "def",'ghi','jkl','mno'];
// slice
barry.unshift(arry.slice(0,3));
console.log(barry)

// concat
let last=[]
let first=[1,2,3];
console.log(first.concat([4,5,6]));
console.log(first.concat([4,5,6],7,8,9))

// searching
 let search=["name", "data", "clear", "who"]
    console.log(search.indexOf("name"));
    console.log(search.indexOf("data"));
    console.log(search.includes("clear"));
    console.log(search.lastIndexOf(search))

// filter (fn)


let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];
  
  // returns array of the first two users
  let someUsers = users.filter(item => item.id < 3);
  
  console.log((someUsers.length));

//   map (fn)

let otherUsers=["salman",'talha',"usama Ali"].map(item => item.length)
console.log(otherUsers)

// reverse
let num=[1,2,3,4,5]
console.log(num.reverse())

// split and join

