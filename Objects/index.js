

// Creating and initializing the objects in JS


let phone = {
    color: 'Red',
    model: '2016',
    camera: '48mp',
    storage: '128gp'
}


console.log(phone)

// I want to add  properties or keys to existing objects 

phone.dimension =  '30*30';
console.log(phone)


//  Add one properties  os 

phone.os =  'linux'


// updating existing properties keys

phone.dimension = '20*20'

console.log(phone) // 



//  What can be there in  value  in objects keys ? 

// value can be   array  , objects , function  , string  , number  , boolean  etc

let mis = {
    id: 1 ,
    isCheck: true ,
    studentsMarks: [23,45,67,89],
    sum:  function (array) {
        let result = 0;
        for(let i =0 ;i<array.length;i++) {
            result+= array[i]
        }
        return result
    },
    studentDetails: {
        name: 'A',
        section: 'B',
        hostel: 'D'
    },
    college: 'NST'
}

console.log('Misc' ,mis)

console.log(mis.sum)

const values = mis.sum(mis.studentsMarks)


console.log(mis.studentDetails.hostel) //  D


const nestedObj = {
    a: {
        b: {
            c: {
                d: {
                    e: 3
                }
            }
        }
    }
}

console.log(nestedObj.a.b.c.d.e) //  3

console.log(nestedObj.a.b.c.d.f) // undefined 

console.log(nestedObj.a.b.c.d.f?.g) // undefined 









