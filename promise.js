// promise method one
const promiseOne= new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Hey! There is no error")
        resolve()
    }, 1000)
})
promiseOne.then(()=>{
    console.log("Promise is consumed")
})

// promise method 2
new Promise(function(resolve, reject ){
    setTimeout(function(){
        console.log("hey! again there is no error")
        resolve()
    }, 1000)
}).then(function(){
    console.log("again promise is consumed")
})

// promise method three
// getting data by reslove method
const promiseThree=new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({name:"Hamza", surName:"Khan", email: "hkemxample@gmail.com"})
    },1000)
})
promiseThree.then(function(mydata){
    console.log(mydata)
})

// promise four to get data from inside of the object

const promiseFour= new Promise(function(resolve, reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({name:"Hamza",surName:"Khan", email: "hkemxample@gmail.com" })
        }else{
            reject("Error: something went wrong")
        }
    },1000)
})
promiseFour
.then(function(userData){
    // console.log(userData)
    return userData.name
})

.then(function(userName){
    console.log(userName)
})

.catch((err)=>{
    console.log(err)
})
.finally(()=> console.log("The promise four is resloved"))
// ********************************************************************************
promiseFour
.then((userData)=>{
return userData.surName
})
.then((surName)=>{
console.log(surName)
})
.catch((err)=>{
console.log(err)
})
.finally(()=> console.log("The promise four is resloved"))

// promise 5 async and try catch

const promiseFive=new Promise((resolve, reject)=>{
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({name:"Java",surName:"Script"})
        }else{
            reject("Error: JavaScript went wrong")
        }
    },1000)
});
async function consumePromiseFive(){
    try {
        const response= await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();

async function getAllUser(){
    try {
        let response=await fetch('https://jsonplaceholder.typicode.com/todos/1')
        // console.log(response)
        const data= await response.json()
        console.log(data)
    } catch (error) {
        console.log("E:", error);
        
    }
}
getAllUser();

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data)
})
.catch((error)=> console.log(error))