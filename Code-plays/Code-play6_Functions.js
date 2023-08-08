
//Convert string to a number.
console.log(Number.parseInt("5"));
console.log(Number.parseInt("five")); //Different from functions created yourself, hence the output is NaN.

//Adding more arguments to functions.
console.log("hello", "world");

//These values are intended to prevent your program from halting if they receive incorrect argument values.
console.log(Number.parseInt("5", "4")); //Attempt to change multiple strings into numbers at once.
console.log(Math.max()); //Attempt to get maximum number out of no numbers.



//CREATING FUNCTIONS

//function as variable
// let greeting = function () {
//     console.log("Hello world!");
// }

//Or:

// function as declaration
// function greeting() {
//     console.log("Hello world!");
// }

//Call function
// greeting();

// function as variable using "Salutaions, Earth!" greeting. *NOTE: return text.length wasn't working properly, so I had to define them as variables to work.
let text = "Salutations, Earth!";
let textLength = text.length
let greeting = function (text) {
    console.log(text);
    console.log(textLength);
}

// function as declaration
// function greeting(text) {
//     console.log(text);
//     return text.length;
// }

greeting(text);


let text2 = "Nothing specified!";
let textLength2 = text2.length
let greeting2 = function (text) {
    console.log(text2);
    console.log(textLength2);
}

greeting2(text2);



//FUNCTION SCOPE

//Including new variables
function addFive (initialNum) {
    let five = 5;
    return initialNum + five;
}

//Doen't work if the variable is used outside of the function.
//console.log(five); 

let six = 6;
function addSix (initialNum) {
    return initialNum + six;
}

//Global variables
let five = "five";
six = "six";

//Print functions
console.log(addFive(10));
console.log(addSix(10)); //Doesn't perform addition, instead concatenates "six" to the number. Code relying on global variables can run into unexpected behaviour. 

//Using a constant helps prevent change to values.
// const six = 6;


//Function using conditionals and a loop.
function addManyOnes (initialNum, numOfOnes) {
    let counter = 0;
    let newNum = initialNum;
    while (counter < numOfOnes) {
        let one = 1;
        newNum = newNum + one;
        counter = counter + 1;
    }
    return newNum;
}
 
console.log(addManyOnes(10, 5));


//This code doesn't work; the variable two is defined in the scope of the second set of braces, hence it is only accessible there.
// function addTwoTwos (initialNum) {
//     let counter = 0;
//     let newNum = initialNum;
//     while (counter < two) {
//         let two = 2;
//         newNum = newNum + two;
//         counter = counter + 1;
//     }
//     return newNum;
// }
 
// addTwoTwos(2);

//The same variable name can be used in different scopes as well since they are discarded once exiting the scope:

// let three = "three";

function addSingleThree (initialNum) {
    let three = 3;
    return initialNum + three;
}
function addTwoThrees (initialNum) {
    let three = 3;
    return initialNum + three + three;
}
// console.log(three);

//A variable name can be used in a lower scope even if it exists in a higher one:
let eight = "eight";
function addEight (initialNum) {
    let eight = 8;
    return initialNum + 8;
}
console.log(eight);

//A scope will always use the value assigned to the variable name of the lowest scope available to it.



//CONSTRUCTORS

//Make constructor function for car object.
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

//Create a new car object.
let car3 = new Car("Bugatti", "Veyron", 2005);
console.log(car3);

//What happens if you create a car object with arguments missing?
let emptyCar = new Car();
emptyCar.brand;
emptyCar.model;
emptyCar.year;
console.log("Empty", emptyCar);


//CREATING METHODS

//Create a string representation of this car object.
car3.name = function() {
    return this.year + " " + this.brand + " " + this.model;
};
console.log(car3.name());

//Add this to the constructor as well if you want all car objects to have access to the method. (Though you'll need to recreate the constructor function rather than just adding it).
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.name = function() {
    return this.year.toString() + " " + this.brand + " " + this.model;
    }
}
console.log(Car());



