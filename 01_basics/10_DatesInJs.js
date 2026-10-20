// Dates it is pain point in js , so practice it to be master in it.

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); // type is object , mostly asked in interviews

// let myCreatedDate = new Date(2023, 0, 23) //months starts from zero in js

//other way to declare dates 
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")//yy-mm-dd
let myCreatedDate = new Date("01-14-2023") //mm-dd-yy(followed  )
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() //it will calculate timee in milliseconds from 1970

// console.log(myTimeStamp); important
// console.log(myCreatedDate.getTime()); //it will calculate timee in milliseconds from 1970



// console.log(Math.floor(Date.now()/1000)); //change millisecond into seconds:asked in interviews

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


// `${newDate.getDay()} and the time `
// ctrl + space will give suggestion 
newDate.toLocaleString('default', { //important and used widely
    weekday: "long",
    
})