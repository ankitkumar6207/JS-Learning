// for of loop 
// array specific loops are : for each and for in 

// ["", "", ""]
// [{}, {}, {}] // array of objects

const arr = [1, 2, 3, 4, 5]

for (const num of arr) { // for of loop , here interator is num and object is arr not implemented only on object
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}



// Maps : map stores values in key value pair and it will never store duplicate values, and the order will be intact

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

// for of loop will work with maps but will not work with objects for objects we have for in loop 

for (const [key, value] of map) {
    console.log(key, ':-', value);
}



const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// this will give error
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }