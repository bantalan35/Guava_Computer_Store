console.log("Code-play 2 Expressions");

console.log("--------------------------------------Using expression values-----------------------------");

//Expression using operators
let answer = 10 / 5;
console.log(answer);

//Using shorthand to change variables
let newNumber = 10;
newNumber = newNumber + 5;
console.log(newNumber);

newNumber += 5;
console.log(newNumber);

newNumber -= 5;
console.log(newNumber);

newNumber *= 5;
console.log(newNumber);

newNumber /= 5;
console.log(newNumber);

newNumber %= 5;
console.log(newNumber);

//Concatenation operator for strings
let newString = "every";
newString += "thing";
console.log(newString);

//Numbers, compact
++newNumber;
console.log(newNumber);
--newNumber;
console.log(newNumber);
newNumber++;
console.log(newNumber);
newNumber--;
console.log(newNumber);

//Returning a Boolean value of 'True' via expression using combination of logical operators
let booleanTEST = 9 != 5 && 7 < 11;
console.log(booleanTEST);

console.log("----------------------------------------Multiple expressions-----------------------------------------------");

console.log("Type in Terminal");
/*
5 + 5; 5 - 5;

{
    ... 5 + 5;
    ... 5 - 5;
    ... 
}
*/

console.log("----------------------------------------Basic functions-----------------------------------------------");

//Using console.log function (Quotes are not shown as the function sends input argument characters to JavaScript console to be displayed)
console.log("Hello World!");

//Argument as variable
let myname = "Brent Antalan";
console.log(myname);

//JS inbuilt functions for mathematical operations e.g. maximum or minimum of two numbers.
console.log(Math.max(10, 100));
console.log(Math.min(10, 100));

let maxNumber = Math.max(10, 100);
maxNumber > Math.min(10, 100);
console.log(maxNumber);

let minNumber = Math.min(10, 100);
minNumber > Math.max(10, 100);
console.log(minNumber);