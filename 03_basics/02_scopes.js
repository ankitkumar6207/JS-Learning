// closure also comes in the topic of scope and it is one of the imortant concept which you should know.

// hoisting is also imp topic of js 
//in hoisting we tell that how the variable should be defined.

// {} => scope when it comes with loop , control statement and functions
//var c = 300 // try to avoid using var
let a = 300 //global scope : these values can be accessible in local scope but viceversa is not true 
if (true) {
    let a = 10 //local scope : the values should not accessible outside the scope 
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


// global scope in node env and browser(coscope) are different , keep in mind important for interviews 

// in nested scope the inner scope can access the value of outside scope but viceversa is not correct 
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) // this will not give error, it will work 

function addone(num){
    return num + 1
}

addTwo(5) // this will not work , give error, so have knowledge about it.

// in js this addTwo is also called expression and in js we can store anything in varible, function , json , value anything
const addTwo = function(num){
    return num + 2
}