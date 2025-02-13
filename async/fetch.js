// https://jsonplaceholder.typicode.com/posts


// browser api 


const response = fetch('https://jsonplaceholder.typicode.com/posts'); // Async 

console.log('Response' , response)
function success (res) {
    // here res is not in json format we need convert that first in json
    res.json().then((result)=>{
        console.log(result)
    })
}
function error(error) {
    console.log('eaRRO HANDLING')
}
response.then(success).catch(error)


function fetchUsers() {
    function success (res) {
        res.json().then((result)=>{
            const data = result.map(elem => {
               return elem.email
            })
            console.log(data)
        })
    }
    function error(error) {
        console.log('error:' , error)
    }
    fetch('https://jsonplaceholder.typicode.com/users').then(success).catch(error)
}

fetchUsers()