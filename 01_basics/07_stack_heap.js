// stack : all primitives data types are stored in stack and you will get copy of it so original value will not be changes if you change something

// heap : all the non primitive data are stored in heap and you will get the reference of it and the original value will you change becoz you have the address of it 

let myYoutubeName = "Hitesh sir"

let anotherName = myYoutubeName
anotherName = "chai aur code "

console.log(myYoutubeName);
console.log(anotherName);
// above are primitive so uses stack and orginal values are unchanged

// non primitive 
let user={
    email : "email.gmail.com",
    upi : "ankit@ubl"

}

let userTwo = user;
userTwo.email = "ankit@kiit.ac.in"

console.log(user.email);
console.log(userTwo.email);
// so the original email changes so here heap memory is used pointing to same reference 