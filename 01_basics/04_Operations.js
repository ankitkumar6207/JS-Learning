// Always make sure that your code must be readable , so that any one can understand it easily and make sure you follow the best practices of coding.


let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32

// Note : when it start from a string then all the values will be treated as string 
// and when string in the last then all the number will calculated first and then string will be added 

// always use () to segrigate things always use  (), because if you don't do it then it is a bad practice 
// console.log( (3 + 4) * 5 % 3);  

// console.log(+true); // 1 // but no recommended , always use Number(true)
// console.log(+""); // 0 //but not recommeded , always use Number("")

let num1, num2, num3

num1 = num2 = num3 = 2 + 2 //again not recommended

let gameCounter = 100
++gameCounter; 
console.log(gameCounter);

// link to study for prefix and postfix
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion