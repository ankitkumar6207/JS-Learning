// const tinderUser = new Object() // singleton object
const tinderUser = {} // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// have the knowledge about option chaining     
// console.log(regularUser.fullname?.userfullname.firstname); if fullname is not there then how it willfetch the data 

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } // problem : object inside object
// const obj3 = Object.assign({}, obj1, obj2, obj4) //syntax not used in production , {} this one is target and all the other objects are source ,{} this is not compulsory but recommended to use


const obj3 = {...obj1, ...obj2} //most used in production (spread operator)
// console.log(obj3); 

//array of objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // it returns all the keys in the form of array and it is widely used // very important and is used in production and databases


// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // not that much used

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));// it is used to check availability


// part 2 : objects 
// destructuring of objects : hoti array ki bhi hai  (important)

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor //regular way to use the key values but if you are using it multiple times then it is not a good way to do it

// most widely used way to use key value pairs 
const {courseInstructor} = course
console.log(courseInstructor);//now we can use courseInstructor directly without using course before it

// destructuring is a way to extract values from objects and arrays

const {courseInstructor: instructor} = course //new way ,just use instructor

// so wherever {}: this is used then there is destructuring happening 

// console.log(courseInstructor);
console.log(instructor);

// mostly used in react , whenver you see curly braces then it is destructuring 


// api : apna kaam kisi aur pe thopna : ex : restaurant menu card we don't care how the food they are making, we only order  

// api is a way to communicate with other applications or services, it allows us to use their data or functionality without knowing how they work internally

// apis are used to get data from server or send data to server
// apis are usually in json format, which is a way to represent data in key-value pairs

// in early days apis were in xml format, but now json is more widely used because it is easier to read and write
// in json both keys and values are in string format, so we can use it in any programming language

// this is json
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// apis can be in array format also 
[
    {},
    {},
    {}
]

// json can be of object format also in aray format , spent some time to understand the data in json formatttor 

// use json formator to see the values inside the api and understand it
// free api data webpage : https://randomuser.me/

// https://jsonformatter.org/


