// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// some time these type of statements give unexpected result 
// so make sure you whatever you are comparaing the data type of both must be same 
// console.log("2" > 1);
// console.log("02" > 1);
//typesceipt does not allow this type of comparison
// so always try to use strict comparison 
// means both the data tyes must be same for comparison 

// try to avoid these type of comparision because it will give unexpected result
// equality check 
// comparison converts null to a number and the number is 0  
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); //true because null is converted to 0 and 0 >= 0 is true

console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined < 0);


// ===  strict check (check both value and data type)
console.log("2" === 2); // false 
console.log("2" == 2); // true  it is only checking the value not the data type so it is true because "2" is converted to 2 and then compared