


// // function declration
// function greetMessage (name) {
//     console.log(`Hello ${name} , How are you ?  its very cold  , chaye nahi pia ? pina ha order from chaayos`) // function body
// }


// // function invoked or call

// // greetMessage('Ram');
// // greetMessage('Shyam')
// // greetMessage('Alex')
// // greetMessage('Manraj')
// // greetMessage('Sooryavanshi')
// // greetMessage('Ramesh')


// const array = ['Ram', 'Shyam',  'Alex', 'Manraj']

// for(let i=0;i<array.length;i++) {
//     greetMessage(array[i])
// }



// function multiply(a=1,b=1,c=1) {
//     // if(a && b && c) {
//     //     const result  = a*b*c;
//     //     console.log(result)
//     // } else if( a && b) {
//     //     const result  = a;
//     //     console.log(result)
//     // } else {
//     //     console.log(a)
//     // }

//     const result  = a*b*c;
//     console.log(result)

// }

// multiply(2,2,3) // 12 //  1*2*3
// multiply(2,3) // 6   2*3*undefined => NaN
// multiply(4)  // 4
// multiply() //  undefined*1*1



// // return keyword


// function sum(a,b,c) {
//     // return a+b+c
//     console.log('Hey')
//     console.log('Hey 3')
// }


// const res =  sum(3,4,5)


// console.log(res)



// function normalFunction(){
//     console.log(arguments) ; // 
// }

// normalFunction(2 , 'Vishal')




// //  Higher order functions and callback

// const HOF = (callbackFunc)=>{

//     // callbackFunc=(message) => {
//     //     console.log('print', message)
//     // }
//     callbackFunc('hello hi')


    
// }

// const print  = (message) => {
//     console.log('print', message)
// }


// // AS we know we can assign function in variable and pass as a arguments in function call , accept as parameter in function delclaration


// HOF(print)






// // Spread opreator (...)


const myStudents = [1,2,3,4,5,6];

console.log(myStudents)
console.log(...myStudents)



const maximum = Math.max(...myStudents);
console.log('max=>',maximum)



function add (a,b , ...res) {
let sum =  a+b;
for(let i =0;i<res.length;i++) {
    sum = sum + res[i]
}
return sum

}

const res1 =  add(1,2,3,4,5,6 , 6,6,6,6,6)
console.log(res1)


//  Find the sum of given array of numbers  with 1<n<100000000000000;

const employee = [1,1,2,3,3,3,3,3,3,3,3,3]

 
const res4 =  add(...employee) // sum(1,1,2,3,3,3,3,3,3,3,3,3)
console.log(res4)





//  