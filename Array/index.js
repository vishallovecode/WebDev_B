

// const array  = [1,2,3,4,5,5,6,7];\


// const botMessage =  'Amzon#Mytra#Flipkart#Swiggy#Zomato';

// const seperate =  botMessage.split('#')
// console.log(seperate)




// const array2 = ['A' , 'B', 'C' , 'D']
// const arrayS =  array2.join(',')

// console.log(arrayS)






const  callMe = () => {
    console.log('Hey');


    return 3;

}


const data  =  callMe() ;

 // data  => hey 




//  write a javascript  function  which will take one parameter 
// check whether that parameter is even or not if even return 'Even' else Return  'Odd'

// Write a javascript code to add two number and return 'Great' 
// if number is greater than 100 or else return 'Small' IF NUMBER IS LESS THAN 100
// also in this case store return value into some variable , log that into browser



const d = [1,2,3,4];

console.log(...d)









// Javascript sort , find and forEach Method



// sort give array


const A = ['a', 'b', 'c' , 'z' , 'r' , 'y'];

A.sort();

console.log('After sort' , A)


const numbers = [1,2,100 , 300 , 28 , 9 ,8]

// numbers.sort()


// ascending 
function compareFunc(a,b) {
    return a-b;
}

// descending 
function compareFunc(a,b) {
    return b-a;
}


numbers.sort(compareFunc)

console.log('After Number sort' , numbers)





const mister = [5,6,7,100 , 900, 600];



function check(a){
return a%5==0 && a%10==0
}

const findValue =mister.find(check)

console.log('FindValue' , findValue)



const ages = [23 , 16 , 17 ,10  , 18 , 19];

const check2 = (a)=>  {
    return  a%5==0 && a%10==0
}

const findValue12 =mister.find(check2)
const findValue123 =mister.find((a)=>  {
    return  a%5==0 && a%10==0
})
