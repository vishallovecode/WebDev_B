

// // // Creating and initializing the objects in JS


// // let phone = {
// //     color: 'Red',
// //     model: '2016',
// //     camera: '48mp',
// //     storage: '128gp'
// // }


// // console.log(phone)

// // // I want to add  properties or keys to existing objects 

// // phone.dimension =  '30*30';
// // console.log(phone)


// // //  Add one properties  os 

// // phone.os =  'linux'


// // // updating existing properties keys

// // phone.dimension = '20*20'

// // console.log(phone) // 



// // //  What can be there in  value  in objects keys ? 

// // // value can be   array  , objects , function  , string  , number  , boolean  etc

// // let mis = {
// //     id: 1 ,
// //     isCheck: true ,
// //     studentsMarks: [23,45,67,89],
// //     sum:  function (array) {
// //         let result = 0;
// //         for(let i =0 ;i<array.length;i++) {
// //             result+= array[i]
// //         }
// //         return result
// //     },
// //     studentDetails: {
// //         name: 'A',
// //         section: 'B',
// //         hostel: 'D'
// //     },
// //     college: 'NST'
// // }

// // console.log('Misc' ,mis)

// // console.log(mis.sum)

// // const values = mis.sum(mis.studentsMarks)


// // console.log(mis.studentDetails.hostel) //  D

// // const nestedObj = {
// //     a: {
// //         b: {
// //             c: {
// //                 d: {
// //                     e: 3
// //                 }
// //             }
// //         }
// //     }
// // }
// // console.log(nestedObj.a.b.c.d.e) //  3

// // console.log(nestedObj.a.b.c.d.f) // undefined 

// // console.log(nestedObj.a.b.c.d.f?.g) // undefined 



// // // Bracket Notation  


// // const emp ={
// //     1:123 ,
// //     'first name' : 'Vishal Sharma'
// // }

// // console.log(emp[1]);
// // console.log(emp['first name']);



// //  Pass by reference 

// // function modifyObject(obj){
// //     obj.name = "Vishal"
// // }


// // const details = {name: 'Rajaji'}

// // modifyObject(details);

// // console.log('After pass by reference' ,details) // {name: 'Vishal'}


// // // Creating a copy of non-primitive data type 


// // const employees = {
// //     id: 1 , 
// //     employee_id: 23456
// // }

// // const copyOfEmpoyee = employees;
// // copyOfEmpoyee.id =  3456;
// // copyOfEmpoyee.city = 'Ramgarh'

// // employees.number = '99153444123'

// // console.log(employees)
// // console.log(copyOfEmpoyee)




// const  students = {
//     name: 'Vishal',
//     id: 123
// }


// const copyOfStudents = {...students};

// copyOfStudents.name= 'Sahi ha..'

// console.log('Copy' ,copyOfStudents )
// console.log('Original' ,students )



// //  Copying Nested object  with spread operator


// //  Shallow copy
// const A = {
//     a: 2, 
//     nested: {
//         c: {
//             d:2
//         }
//     }
// }

// const B = {...A};

// B.a = "TU BADAL GYA"

// B.b.c.d = "Hello kuch to ha "

// console.log('Original' , A)
// console.log('Copy ' , B)


//  Here we do not want to modify the original values is nested object is there 


//  1. sturctureclone => NEW METHOD  MOST OF THE BROWSER DOES NOT SUPPORT
//  2 . Json.stringify and JSON.parse
// 3. Writing own deep copy function(Try)



const AA = {
    a: 2, 
    nested: {
        c: {
            d:2
        }
    }
}

const BB = structuredClone(AA);

BB.nested.c.d = "Ram bharose"

console.log('Original' ,AA)
console.log('Modified',BB)


const CC = JSON.stringify(AA);

const parsedValues = JSON.parse(CC)

parsedValues.nested.c.d = "Sahi ha"

console.log('Original' ,AA)
console.log('Modified',BB)
console.log('Modified2',parsedValues)