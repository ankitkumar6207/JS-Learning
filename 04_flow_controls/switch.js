//used in redux 

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


// if any case is correct and you dont use break then it will execute everything after that witout even checking the case excet default z
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