

// // Creating a promises
// console.log('Here we will just understand syntax for creating a promise')
// // here resolved and rejected are  callback functions
// function promiseCallback1(resolved , rejected) {
//     // here we are not calling any of resolved and rejected functions thats means promise are in pending state
// }
// const promise =  new Promise(promiseCallback1); // creating a promise
// console.log('pending promise ',promise)
// // Resolved 
// function promiseCallback(resolved , rejected) {
//     resolved() // resolved is functions so we can call it (fullfillled)
// }
// const promise1 =  new Promise(promiseCallback); // creeating promise
// console.log('promise fullfilled ',promise1)
// // Rejected Promise
// function promiseCallback2(resolved , rejected) {
//     rejected() // resolved is functions so we can call it
// }
// const promise2 =  new Promise(promiseCallback2);
// console.log('promise rejected ',promise2) // 




// Create a promise 


const promise3 = new Promise((resolved , rejected)=>{
    const randomValue =  Math.ceil(Math.random()*10);
    console.log(randomValue)
    if(randomValue%2 === 0) {
        resolved({even: randomValue})
    } else {
        rejected('odd')
    }
})
const array = [1,2,3] // array.map()
console.log('promise3' , promise3)


function success(value) {
    console.log('Promise sucess' , value)
}

function error(value) {
    console.log('Promise error' , value)
}
promise3.then(success).catch(error);




