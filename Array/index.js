

// // const array  = [1,2,3,4,5,5,6,7];\


// // const botMessage =  'Amzon#Mytra#Flipkart#Swiggy#Zomato';

// // const seperate =  botMessage.split('#')
// // console.log(seperate)




// // const array2 = ['A' , 'B', 'C' , 'D']
// // const arrayS =  array2.join(',')

// // console.log(arrayS)






// const  callMe = () => {
//     console.log('Hey');


//     return 3;

// }


// const data  =  callMe() ;

//  // data  => hey 




// //  write a javascript  function  which will take one parameter 
// // check whether that parameter is even or not if even return 'Even' else Return  'Odd'

// // Write a javascript code to add two number and return 'Great' 
// // if number is greater than 100 or else return 'Small' IF NUMBER IS LESS THAN 100
// // also in this case store return value into some variable , log that into browser



// const d = [1,2,3,4];

// console.log(...d)









// // Javascript sort , find and forEach Method



// // sort give array


// const A = ['a', 'b', 'c' , 'z' , 'r' , 'y'];

// A.sort();

// console.log('After sort' , A)


// const numbers = [1,2,100 , 300 , 28 , 9 ,8]

// // numbers.sort()


// // ascending 
// function compareFunc(a,b) {
//     return a-b;
// }

// // descending 
// function compareFunc(a,b) {
//     return b-a;
// }


// numbers.sort(compareFunc)

// console.log('After Number sort' , numbers)





// const mister = [5,6,7,100 , 900, 600];



// function check(a){
// return a%5==0 && a%10==0
// }

// const findValue =mister.find(check)

// console.log('FindValue' , findValue)



// const ages = [23 , 16 , 17 ,10  , 18 , 19];

// const check2 = (a)=>  {
//     return  a%5==0 && a%10==0
// }

// const findValue12 =mister.find(check2)
// const findValue123 =mister.find((a)=>  {
//     return  a%5==0 && a%10==0
// })







// Includes Method 

// Given a array of element find whether given element exist in array or not 

const arrayElem = [2,3,45,6,7, 'hello' , 'A']

const check =  arrayElem.includes('A');
const check1 =  arrayElem.includes('a');

console.log(check )

console.log(check1 )


function printElement(elem , index , array ) {
    const res = elem*elem;
    let result  = res/100;
    console.log(result)
}

arrayElem.forEach(printElement)



for(let i=0;i<arrayElem.length;i++) {
    // your body 
}



const array2 = [2,3,4,5,6,67,7,8,9];

function printOddOrEven(elem , index) {
    // let text =  elem%2==0 ? 'Eveb': 'Odd'
    if(elem%2==0){
        console.log('Even')
    } else {
        console.log('odd')
    }
}
array2.forEach(printOddOrEven)



function forEach(callback , array){
    for(let i=0;i<array.length;i++) {
        callback(array[i] , i  , array)
    }
}



//  Map Method



const array4 = [3,4,5,6,7,8,9];



function square(elem , index) {
    
}
const result33 =array4.map(square)

console.log(result33)



const array5 = [2,3,4,5,6,7,8] //  ['even' , 'odd' , 'even', 'odd', 'even' , 'odd' ,  'even']



const response = array5.map((elem)=>{
    return elem%2==0? 'Even': 'Odd'
})




//  Filter method
// Given array of element   return array of even number

const array56 = [2,3,4,5,6,7,8] 
function checkEven(elem , index) {
    return elem%2===0
}

const res333 = array56.filter(checkEven)

console.log(res333)


// reduce 


// given a array of element  return the sum of array



const array34 = [3,4,5,6,7,7];


function sum(acc , elem , index) {
    return acc+elem;
}
const res3 =  array34.reduce(sum , 0)


console.log(res3)


// given a array of element  return the multiply of array

function multiply(acc , elem , index) {
    return acc*elem;
}
const res33 =  array34.reduce(multiply , 1)


console.log(res33)