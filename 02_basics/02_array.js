const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // it will add the dc_heros in the last of marvel_heros array as an array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); //not a good habbit to do this , merging this way is not a good way

// push changes the original array but the concat creates new array witout changing the original one 

// const allHeros = marvel_heros.concat(dc_heros) // it return a new array and doesn't manipulate the original one

// console.log(allHeros);// it merges both the arrays not a good habbit to do this

// spreading the arrays : good way to merge, recommended to use and widely used
const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // you have to provide the number (depth) ( it could 1, 2, 3 .... but use infinity to not worry about depth) all the insider elements will be in one array, recommended to use number in depth
console.log(real_another_array);


//important : study about all three
console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh")) // converts into an array
console.log(Array.from({name: "hitesh"})) // interesting imp : create array from keys or value if not then return empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //merge all the elememts // array.of return a new array from set of elements.