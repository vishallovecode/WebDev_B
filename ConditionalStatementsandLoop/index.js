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