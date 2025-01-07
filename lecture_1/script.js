

// Logging things in Javascript 

console.log('I am Javascript , Dont worry you will love me')

var  a = 25; // we are declaring the variable a and assigning value 25 to it.
// var a ;  // variable declaration
// a =25 ;  // value assigning

console.log(a) 

 var college = 'Newton School Technology';
 console.log(college)

  var a1 = 20;
  var a2 =30
  var a3 =40
  console.log('a1=>' , a1,'a2=>',a2,'a3=>', a3)


  // Creating variable using let keyword

  let firstName = "hello";
  let lastName= "Hi"

  // Creating variable using const keyword

  const rollNo = 1234567;
  const country= "India"

//   Note:1 Variable created using var can be re-declare and re-assign

var employeeName = "Rajesh";
console.log('Before Update' ,employeeName)
// Here we are re-declaring the variable employeeName and also re-assigning
 var employeeName = "Ram"

 console.log('After Update' ,employeeName)


 // Here we are re-assigning the variable employeeName
 employeeName = "Kamal"


//  Note: 2 Variable created using let cannot be re-declare but can be re-assign


let studentName= 'Elis'

 // let studentName = 'Elis3' // SyntaxError: Identifier 'studentName' has already been declared
 // var  studentName = "Elis2"; // SyntaxError: Identifier 'studentName' has already been declared

 studentName = "Elis4" //  re-assigning the value 

 console.log(studentName) // Elis4


  // Note:3 Variable created using const cannot be re-declare and re-assign


  const regNo= 1234567;
 
  regNo = 456789; // TypeError: Assignment to constant variable
 