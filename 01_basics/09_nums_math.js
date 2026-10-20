const score = 400
// console.log(score);

const balance = new Number(100) //run it in console and you can see all the properties, we use new keyword to create new object of it.
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1)); //used quite many time it will minimize the digit after point upto mentioned digit

const otherNumber = 123.8966    

// console.log(otherNumber.toPrecision(4));
// play with it , it will give multiple values

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));// it will add commas and make it understable

console.log(Numbers.min)// you can check max , epsilon 


// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math); // run in console in inspect
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));


// usually math library mostly used with random 
console.log(Math.random()); // value from 0 to 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1); // added floor because we dont want 0

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) //important formula keep in mind