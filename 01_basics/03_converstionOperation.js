// do investigation study 
let score = 23

// two ways to find type of
console.log(typeof score);
console.log(typeof(score));

// in typecasting we need to use capital letter for the type we are converting to
score = "33abc" // it should converted into number but it did and will give NaN(not a number) but its type is number.
let valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber) // it will give NaN but its type is number. be carefull.

/*
"33" => 33
"33abc" => NaN (but type is number)
true => 1
false => 0
undefined => NaN
null => 0

*/

let LoggedIn = 'ankit';
booleanLoggedIn = Boolean(LoggedIn)
console.log(booleanLoggedIn);

/*
1 => true , 0 => false
"" => false
"ankit" =>true
*/

let someNumber = 33
let StrinNumber = String(someNumber)
console.log(typeof StrinNumber);
console.log(StrinNumber);





