// summary : 
// object -> for in loop 
// arrays -> can be applied multiple loops 

// for each is by default injected to the array in js so this loop is most widely type of loop which is used , for each loop is a higher order function
const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){ //callback function doesnt have name and the attribute will iterate through loop and fetch value one by one.
//     console.log(val);
// } )


// using arrow function 
// coding.forEach( (item) => {
//     console.log(item);
// } )



// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe) //giving refernce only not calling the function 



// in for each callback function multiple things are coming item , index, and arr 
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )


// array of objects are widely used and for each we use widely with it , it is wideyly used with db
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )