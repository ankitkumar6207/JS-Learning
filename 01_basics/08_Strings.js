const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

// do not use + for concatination intead use backtics
// it uses (string interpolation)     
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// we can apply string method with variables inside the {}

const gameName = new String('hitesh-hc-com') //2nd way of declaring
// use inspect element with the above string and see the properties of it
// console.log(gameName[0]);
// console.log(gameName.__proto__); # we can access the properties , you can check in inspect element.


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4) //here you can't give -ve indexes and it will not include the last character.
console.log(newString);

const anotherString = gameName.slice(-8, 4) //starts from back and slice is used frequently
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar')) //does it has this string or not, give booleand values

console.log(gameName.split('-')); // it will create an array split by the value which is added.

// try to explore all the methods of string and explore string in mdn 