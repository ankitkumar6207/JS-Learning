// what is the typeof all the data types , asked in interviews 

// how the data is strored and how it is fetched , according to that we have two types of data types in js


//  Primitive
    // all are call by value 
//  7 types : String, Number, Boolean, null, undefined, Symbol(used to make anyvalue to unique, we can wrap in value in symbols), BigInt

// **make two things mastery in js (objects and browser events)**


const score = 100
const scoreValue = 100.3 //both are numbers

const isLoggedIn = false
const outsideTemp = null
let userEmail; // userEmail value is undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);//give false bcoz both are not same , jbki value same hai but symbol is used to make unique value so it will give false

// const bigNumber = 3456543576654356754n //put n it will automatically become big int




// Reference (Non primitive)
// Array, Objects, Functions  all are call by reference
// and type of all the non primitive data types is object and for function it is object function 

const heros = ["shaktiman", "naagraj", "doga"];

// anything that is inside curly braces is object 
let myObj = {
    name: "hitesh",
    age: 22
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3