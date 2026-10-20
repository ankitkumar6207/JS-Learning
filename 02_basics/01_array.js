// array in js can be of mix data types, and can be resizable.
// can be accessible by index
// array can be coppied in two ways : 
// shallow copy : the copied array shares the same reference. means it will  point to the original copy of the aray so it will change the original value.
// deep copy : the copied array shared the differet reference  means it will not change the original value.


const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[1]);

// Array methods :

// used widely 
// myArr.push(6)
// myArr.push(7)
// myArr.pop() remove last elment 

// myArr.unshift(9) // shift all the elements and add in first so not a good habbit. because shiting takes time
// myArr.shift() // no arg passes , removes from first

// console.log(myArr.includes(9)); //check present or not and the type is boolean
// console.log(myArr.indexOf(3)); //gives the index type (number) if not present then -1 returned

// const newArr = myArr.join() // it convert the type of array to string widely used.

// console.log(myArr);
// console.log(typeof newArr);


// slice, splice (important) interview   
// difference between slice and splice :
// slice doesn't manipulate the original array 
// splice manipulate the original one and remove all the elements from the original array including the last index 

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);