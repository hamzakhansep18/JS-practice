let map=new Map();
map.set('firstName', 'Hamza');
map.set('lastName', 'khan');
map.set('id','12232');
// console.log(map);
console.log(map.get('firstName'));
console.log(map.get('id'));
console.log(map.size)
console.log(map.has('lastName'))
console.log(map.delete('lastName'))
console.log(map.clear())
console.log(map)

// map iteration
let empData= new Map(
    [
        ['fname','salman'],
        ['lname','khan'],
        ['Id',1234]
    ]
)

for(let key of empData.keys()){
    console.log(key)
}
for(let value of empData.values()){
    console.log(value)
}
for(let entries of empData){
    console.log(entries)
}

// map from obejct
let obj={
    '1': "solo",
    "2": "squad",
    "3": "gunman",
}

let obejct=new Map(Object.entries(obj))
console.log(obejct.get("1"));
console.log(obejct.get("2"));

// object from map

let squad=new Map();
squad.set('h', 'Hamza');
squad.set('a', 'ali');
squad.set('m', 'muhammad');

let obj2=Object.fromEntries(squad.entries());
console.log(obj2.h)
console.log(obj2.a)
console.log(obj2.m)

// set

let set= new Set();
let Bowler={name: 'Shaheen shah Afridi'};
let Batsman={name: 'Babar Azam'};
let Fielder={name: 'Muhammad Rizwan'};

set.add(Bowler);
set.add(Bowler);
set.add(Batsman);
set.add(Bowler);
set.add(Fielder);

console.log(set.size);
 for(let user of set){
    console.log(user.name)
 }