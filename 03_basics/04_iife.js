// Immediately Invoked Function Expressions (IIFE) IMP


// we use iife when we dont want  global scope pollution 
// and we want to execute a function instant , include first line also imp 
// whenever we want to call a function immediately without the pollution of global values we can use iife ?
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
//; this should be there to stop the iife execution 


// syntax ()() first () is for defintion and () 2nd is for execution call 
// un named iife 
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
