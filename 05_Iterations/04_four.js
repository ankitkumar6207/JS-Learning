// in for of loop in array it was directly printing the vlues of key but in for in loop it is printing the index as key
// for in loop 

// we use object because we can create our own keys of any type , for array the key will always be numbers starting from 0 
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(key);    
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]


for (const key in programming) {
    console.log(key);// it will print the indexes starting from zero

    
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")


// this will not work as map is not iterable so only for of loop work with map. 
// for (const key in map) {
//     console.log(key);
// }