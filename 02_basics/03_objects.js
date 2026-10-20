// there are two ways to create object 
// 1. using constrctor 
// 2. using literals 

// imp 
// singleton : if object created using constructor then it is sigleton.
// if object is created as literals then that is not singleton. 

// Object.create // constructor method 

// object literals :

const mySym = Symbol("key1") //this is a data type

// bydefault the object treats all the keys as strings but we write in normally
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary", //this can not be accessed using dot because the key is defined as string and there are two two names in the key (full name) with space
    [mySym]: "mykey1", // way to declare the symbol and can't be accessed using dot notation
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

// when you use brackets then you must use key inside the double quotes. 
// usually we fetch the value using . but in some cases we needto use []
// console.log(JsUser.email) // one way to access the value
// console.log(JsUser["email"])// 2nd way to access the element 
// console.log(JsUser["full name"]) // only way to access the element
// console.log(JsUser[mySym]) // only way to access the symbol


JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) // the value can't change now
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);


// in js function is treated as type 1 citizen means it will treated as variable without any discrimination 
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // this pointsout the object from where the value should come from
}
console.log(JsUser.greeting);// this will give the function reference only it will not run the function
// console.log(JsUser.greeting()); // this will run the function and give the output

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());