let arr=new Array();
arr[0]="humen";
arr[1]="animals";
arr[2]="other species";
console.log(arr);

let species=["humen","animals", "other species"];
console.log(species[0])
console.log(species[1])
console.log(species[2])

console.log(species.length, arr.length);
console.log(species.length-1);
console.log(species.at(-1));
species.push('other species');
console.log(species)
species.pop("other species");
species.pop("other species");
console.log(species)
species.unshift('other species');
console.log(species)
species.shift('other species')
console.log(species)

let Def=[];
let data=["Hamza",22,"It","shinkiari","Mansehra"]
for(let i=0; i<data.length; i++){
    console.log(data[i]);
}

for(let Data of data){
    console.log(Data)
}

for(let key in data){
    console.log(data[key]);
}

Def.push(data[0]);
Def.unshift(data[1]);
console.log(Def)