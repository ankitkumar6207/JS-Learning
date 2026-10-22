//truthy and falsy 
// we assume some values to be true , like any string is true , any empty string is false 
// any empty array is true 

// falsy values 
// false , -0,0, BigInt 0n, "", null, undefined, NaN 
// truthy values 
// apart from above everything is truthy values 
// but there are some values which seems to be falsey but are true 
// "0", 'false'," ",[],{},function() {}


// userEmail =[]
// // you can check the array is empty or not by doing this 
// if(userEmail.length === 0){
//     console.log("array is empty");
    
// }

// checking that object is empty or not 
// emptyObj = {}
// if(Object.keys(emptyObj).length ===0){
//     console.log("object is empty");
    
// }


// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}

// interview 
false == 0 //true
false == ''//true
0 == ""//true 

// Nullish coalescing operator : null and undefined 
// usually used with db , because sometime db can give you null or undefined values 
// so we need to handle that also 
// fallback which is used to handle null and undefined values

let val1 = 4?? 5
val1 = null??4 //4
val1 = undefined??34//34
val1 = null??20??40//20
console.log(val1)


// null colescene and ternary operator are tow different things
// ternary operator 
// condition?true : false 

let iceTea = 100
iceTea >=20 ?console.log("ice tea"):console.log('not a ice tea');

// in js code null and undefined values should be handled