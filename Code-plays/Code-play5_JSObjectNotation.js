

//Style string
let incomingData = '{"brand":"Mazda","model":"MX-5","year":1989}'; 

//Make Style string into object as Car 2
let thisCar = JSON.parse(incomingData);

//Access object properties
console.log(thisCar.brand); 
console.log(thisCar.model); 
console.log(thisCar.year); 

//For sending JS objects elsewhere or saving them.
let outgoingData = JSON.stringify(thisCar);
console.log(outgoingData);


//Arrays
let listOfNumbers = [1, 2, 3, 4, 5];
let listOfValues = [1, "one", true];
console.log(listOfValues[1]);

listOfNumbers[2] = 6;

let multiArray = [[1,2],[3,4],[5,6]];
console.log(multiArray[0][0]);
console.log(multiArray[0]);








//2.4 module content Practice

//JSON.stringify and JSON.parse are used to convert between objects and JSON strings.
let car = JSON.parse('{"brand":"Mazda","model":"MX-5","year":1989}');
console.log(car);

let carString = JSON.stringify(car);
console.log(carString);



//ARRAYS

//Define
let emptyArray = [];
let myListOfNumbers = [1, 2, 3, 4, 5];
let myListOfValues = [1, "one", true];

//Accessing values array
console.log("listOfValues Index 1 is", myListOfValues[1]);
console.log("emptyArray is", emptyArray[2]); //Can't do this. The array is currently empty, thus the index value is undefined.

//Adding and changing values
console.log("listOfNumbers Index 2 is", myListOfNumbers[2]); //Current number at index 2 is the number 3.
console.log("listOfNumbers Index 2 is now", myListOfNumbers[2] = 6); //Replace with the number 6.
console.log("emptyArray Index 2 is", emptyArray[2] = 7); //Can do this. The array is now defined with a value to its respective index.
console.log("emptyArray Index 1 is", emptyArray[1] = 6); //Defined another value within array.
console.log("emptyArray Index 3 is", emptyArray[3]); //Index 1 and 2 are defined with values but Index 3 is not.




//MULTIDIMENSIONAL ARRAYS

//Create multidimensional array
let myMultiArray = [[1,2],[3,4],[5,6]]; //The first subarray (pink brackets) represents the first pair of elements (1 and 2).

//Access pairs of values (pink brakcets) within the array (yellow brackets).
console.log("The first element of the first subarray is", myMultiArray[0][0]); 
console.log("The second element of the second subarray is", myMultiArray[1][1]); 
console.log("The second element of the third subarray is", myMultiArray[2][1]); 



//ARRAYS CONTAINING JS OBJECTS
let car1 = {brand:"Ferrari", model:"F50", year:1995};
let car2 = {brand:"Honda", model:"Civic", year:2015};
let cars = [car1,car2];

console.log(cars);
