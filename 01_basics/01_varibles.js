/* NOTE : 
In prgramming journey we have to save to data then fetch it so for that we have two things in js
variable : changable
constant : can't change


prefer not to use var because of the issues in block scoping and function scoping

*/

const accountId = 2442323  // cant change the value
let accountEmail = "ankit@gmail.com"
var accountPassword = "Ankit"

accountCity = "ranchi" // it is variable bydefualt but not recommended to use , but it is also possible


let accountState; // it will give undefined : only declared not initiaized

// acountId = 23 // not allowed because it is contant 

accountEmail = "AK@ak.com"
accountPassword = "123232322"
accountCity = "Hyderabad"

console.log(accountId); 

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]) // it will give the output in table format



// error of scope : we are changing the value of name inside the scope but it is changing that variable outsite the scope also, thats why we only use let for variables and const for constannts 
var name= "ankit"

if (true){
    var name = "hitesh"
    console.log(name)
}

console.log(name);

// here it will not change the value of outside name1 
let name1 = "ankit"
if (true){
    let name1 = "hitesh"
    console.log(name1)
}
console.log(name1);




