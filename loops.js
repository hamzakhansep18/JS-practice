"use strict";
for(let i=1; i<=5; i++){
    let row=" ";
    for(let j=1; j<=5-i+1; j++){
        row += "* ";
    }
    console.log(row);
}

for(let r=1; r<=5; r++){
    let ros=" ";
    for(let s=1; s<=r; s++){
        ros += 'i ';
    }
    console.log(ros);
}