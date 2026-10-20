//this and arrow function 

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);// whenever we want to refer the corrent context then we can use this 
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam" // here we are changing the context
// user.welcomeMessage() // sam name will be used 

// console.log(this); here it will give empty context but in browswer it will give window object IMP because in browswer global engine is used which is mainly a window object, but in node the engine standalone

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); // this will not give value so it will only work with object not with function 
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }


//arrow funnction remove function keyword and add => after ()
const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


//all below are used react widely 
// const addTwo = (num1, num2) =>  num1 + num2 //if there is only one statement the implicite return (curly braces htao and return htao)

// const addTwo = (num1, num2) => ( num1 + num2 ) // () this can be used without return and {} 
//explicite return means = add return keyword 

const addTwo = (num1, num2) => ({username: "hitesh"}) //returning object with ()


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()