

// Data Types Number 
// In javascript for numeric value we have only one data type.

// 4.5 , 2.5 , 0.1 , -5 , 1234567  => number


let age = 19;
console.log(age) //  19

// checking the data type of any variable we can use typeof 

console.log(typeof age)


// Methods of number (max , min , floor , ceil , random , toFixed)

let percentage = 2345.6666666666;

console.log('value.fixed()', percentage.toFixed(2))


// Math.max(1,2,3,4,10) //  10
//Math.min(1,2,3 ,-5)  // -5
// Math.floor(4.5) // 4
//Math.ceil(4.3) // 5

//Math.random()=> This functions generate random value b/w 0 to 1

console.log(Math.random())
console.log(Math.random())
console.log(Math.random())
console.log(Math.random())

// Using Math.random() generate random value b/w 2 to 8


Math.random()*6 +2 




//  String Datatype

let lastName = "Sharma"; // string
let firstName = 'Vishal'; // string
let city = `Kanpur`  // string


// String Template 

let userName = "Raj";
let food = "Tea"
let message = `Hi ${userName} , How are you doing today is best day for ${food}.`;
console.log('String template' , message)

// let notification = '
// hey 
// '

// let notification = "

// "

let  notification  = `

`
// Note: Using string template you can write multiline string , you cannot do using single and double quote.



//  String method

// Accessing character 

let  country  = 'India'; // ['I', 'N', 'D', 'I', 'A']

console.log(country[0]) // I
console.log(country[5]) // undefined

// replace , toString , trim  , includes

const employeMSg = 'Hey Where are you ?';

const result  = employeMSg.replace('Where' , 'How');

console.log(result ) // Hey How are you ?
console.log(employeMSg ) // Hey Where are you ?


// includes


const str = "Hey Relax, Guys  , it is just starting , we will learn more in javscript  , and you will start loving it , i will make sure it.";
const substr = 'we will learn more in javscript';

//  i want to check whether substr is present inside the str or not  

console.log(str.includes(substr)) // true


// Boolean
const check = true ; // 'boolean'

const unCheck = false // 'boolean'


// In javascript null , undefined , NaN , '' , 0 consider as falsy value


//NaN => Not a Number  typof NaN => 'number'


console.log(2*'hello') // NaN


// undefined 

let college;


console.log(college)

console.log(typeof college) // undefined


 let a  =20;

 const d = a++ +2; // 20+2 => 22
 a=  21
 const dd =  ++a +2 //  22 +2 // 24

 console.log('d' , d)
 console.log('dd' , dd)
console.log(++a) //  21

 console.log(a++) //  21


 const rr = 20;
//  console.log(rr++);  // this will throw error  (index.js:141 Uncaught TypeError: Assignment to constant variable.)



 // comparison opereator  (== , ===)

 // == only check the value
 // === check the value and type

 let tt = '20';
 let pp =20;
 console.log('tt==pp',tt==pp) // true
 console.log('tt===pp',tt===pp) // false

