// map :used when we want do some operation to all the elements : widely used
// instead of for each we can use map  
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

// chaining 
const newNums = myNumers
                .map((num) => num * 10)
                .map( (num) => num + 1) // here the value will taken from first map which we have done not the original array 
                .filter( (num) => num >= 40)

console.log(newNums);