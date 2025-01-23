const isKycDone =  true ;

if(isKycDone) {
    console.log('This is product home page..')
} else {
    console.log('This is kyc page')
}


//  Falsy vlaue =>  '' ,  0 , null  , undefined , NaN

const userName = 'Vishal';

let greet = `Good morning user  , Sir.`;

if(userName) {
     greet = `Good morning ${userName}  , Sir.`
} 



let  percentage =80;

// percentage >= 90 ; A+
// percentage < 90 percentage >=80 A
// percentage < 80 percentage >=70 B
// percentage < 60 percentage >=50 C

if(percentage>=90) {
    console.log('A+')
} else if(percentage<90 && percentage>=80) {
    console.log('A')
} else if(percentage<80 && percentage>=70){
    console.log('B+')
} 
else if(percentage<60 && percentage>=50) {
    console.log('C')
} else {
    console.log('D')
}




// Switch 



// day => 1 => Sunday
// day => 2 => Monday
// day => 3 => Tuesday
// day => 3 => Wedenesday

let day  = 'Sun';
switch(day) {
    case 'Sun': {
        console.log('Sunday');
        break;
    }
    case 'Mon': {
        console.log('Monday')
        break;
    }
    case 'Tue': {
        console.log('Tuesday')
        break;
    }
    case 'Wed': {
        console.log('Wednesday')
        break;
    }
    case 'Thur': {
        console.log('Thursday')
        break;
    }
    case 'Fri': {
        console.log('Friday')
        break;
    }
    case 'Sat': {
        console.log('Saturday')
        break;
    } default: {
        console.log('Invalid day')
    }
}


//  Ternary Operator 



const  message = percentage > 80  ?  'Hurrah !! You are pass': 'Sorry do better job next Time'



let  tempMsg = (percentage > 90 && percentage < 80 && isKycDone && percentage%2==0) ?  'Hurrah !! You are pass': 'Sorry do better job next Time'



for (let  i =0;i< 100;i++) {
    if(i%2 ==0 ){
       continue;
    }

    console.log(i , 'iii')
}


 // Array
const array  = [1,2,3,4]

console.log(array[6]) //  undefined

console.log(array)

// Objects

const employee = {
    name: 'Abc' , 
    company:  'xyz',
    mobile: '1234'
}

// dot notation
console.log(employee.mobile)





// const j = 0;

// while(j<=10) {
//     console.log('While loop',j);
//     j++
// }




// Switch case
let value =  10
if(value>10) {
    if(value%2 ==0) {
        if(value%2 == 0 && value%5===0){

        }
    }
}

let month  = 2;
switch(month) {
    case 1: {
        console.log('Cold Season....');
        break;
    }
    case 2: {
        console.log('Cold Season 2....')
        break;
    }
    case 3: {
        console.log('Holi time....')
        break;
    }
    case 4: {
        console.log('Baisakhi...')
        break;
    }
    case 5: {   
        console.log('End sem')
        break;
    }
    case 6: {
        console.log('Holidady , summer internship')
        break;
    }
    case 7: {
        console.log('Internship')
        break;

    }
    case 8: {
        console.log('Juniors ')
        break;
    }
    case 9: {
        console.log('Helping Junior ')
        break;
    }
    case 10: {
        console.log('Dusshera')
        break;
    }
    case 11: {
        console.log('Diwali')
        break;
    }
    case 12: {
        console.log('End Sem')
        break;
    }
    default: {

    }
}



// varible declartion ; initialization ; condition ; actions


// i=0;
// for(let i =0; i<5;i++){
//     console.log(i) //  0 ,1  , 2 , 3 , 4 
// }


for(const k =0;k<5; ++k)  {
    console.log(k)
}

