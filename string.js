// three Way
let name='hamza';
let myName="hamza";
let yourName=`hamza`;

console.log(yourName.length);
console.log(name.length);
console.log(myName.length);

console.log(name[0]);
console.log(name.at(0));
console.log(name.length-1);
console.log(name.at(-1));

for (let char of 'hamza' ){
    console.log(char);
}

// name=`H${name[1]}`;
// console.log(name);

console.log(name.toUpperCase());
console.log(myName.toUpperCase());
console.log(yourName.toLowerCase());
console.log(yourName[0].toUpperCase());
console.log(myName[0].toLowerCase());

let accountHolder='Hamza khan';
console.log(accountHolder.indexOf('Hamza'));
console.log(accountHolder.indexOf('khan'));
console.log(accountHolder.indexOf('m'));
console.log(accountHolder.indexOf('a'));

let word='graduated';
console.log(word.startsWith('grad'));
console.log(word.endsWith('ted'));
console.log(word.endsWith('dua'));

console.log(word.slice(2,5));
console.log(word.slice(-5,-2));
console.log(word.substring(2,5));
console.log(word.substring(5,2));

console.log("a".codePointAt(0));
console.log("A".codePointAt(0));
console.log(String.fromCodePoint(97));
console.log(String.fromCodePoint(65));
console.log(String.fromCodePoint(1));
console.log("a".codePointAt(0).toString(16));

let str='';
for(let i=65; i<=220; i++){
    str+= String.fromCodePoint(i);
}
console.log(str);


