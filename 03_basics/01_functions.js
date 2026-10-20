// # functions are important understand
// functions are the package of some code which you can reuse wheerever you want

//definition
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// sayMyName //this is reference 
// sayMyName() // execution of function

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }


// console.log will not return the value if you are storing that value to some variable then it should be returned from the function 


function addTwoNumbers(number1, number2){ // these are parameters when we define the function

    // let result = number1 + number2
    // return result
    return number1 + number2 // after return no code will run 
}

const result = addTwoNumbers(3, 5) // these are arguments when we call the function

// console.log("Result: ", result);




function loginUserMessage(username = "sam"){ // if we don't pass any value then it will take sam as default value
    if(!username){// if username is undefined or empty
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))






// function part 2 
function calculateCartPrice(val1, val2, ...num1){ // these three dots are called REST operator,it is used to pass multiple values to the function it will take all the values after val2 and put them in an array called num1
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))
// 200 and 400 went to val1 and val2 rest went to that array 

// passing object in function
const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

// passing array to function 

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));