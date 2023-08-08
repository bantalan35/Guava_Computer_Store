//----CODE-PLAY 8 MORE ON CONDITIONALS----//

// What happens if you use a variable with a different value as the only component of a conditional statement?
let aString = "Hello world!";
if (aString) {
    console.log("aString exists");
}


// JavaScript will treat any variable that isn't already a Boolean and has a value as true when evaluating a conditional statement. 
// This can be used to only do a certain action if a variable has a value already—if the value is undefined or null (and of course a Boolean false), then it is treated as false.

// However, checking for a variable that doesn't exist isn't as simple:
// if (!notAString) {
//     console.log("notAString does not exist");
// }

// Because notAString was never initialised, we get an error because it doesn't exist when we call it.

// To check for a variable's existence rather than just whether it has a value, one way of doing this the typeof keyword:
if (typeof notAString === "undefined") {
    console.log("notAString does not exist");
}


// The conditional statements we used in the previous part are simple. However, if the result is a valid Boolean value, conditional statements of any complexity can be used. 
// The following is an example:
let number1 = 30;
let number2 = 20;
let number3 = 10;
if (number1 > number2 && number1 > number3) {
    console.log("Number 1 is greater than number 2 and number 3");
}


// Conditional statements can also be nested:
if (number1 > number2) {
    if (number1 > number3) {
        console.log("Number 1 is greater than number 2 and number 3");
    } else {
        console.log("Number 1 is greater than number 2 but not greater than number 3");
    }
}


// And there can be multiple conditional operators in one statement:
let coin1 = "heads";
let coin2 = "heads";
let coin3 = "heads";
if (coin1 === "heads" && coin2 === "heads" && coin3 === "heads") {
    console.log("Well done, you got three heads");
}


// Conditional operators have an order of operations, just like arithmetic ones, and can make use of brackets. 
// The following two conditional statements are parsed differently:
let coin4 = "heads";
let coin5 = "tails";
let coin6 = "tails";
if (coin4 === "heads" || coin5 === "heads" && coin6 === "heads") {
    console.log("Coin 4 is heads, or coin 5 and coin 6 are heads");
}
if ((coin4 === "heads" || coin5 === "heads") && coin6 === "heads") {
    console.log("Coin 4 or coin 5 are heads, and coin 6 is heads");
}


// A logical or comparison operator doesn't need to be used as the conditional statement. 
// A function that returns a Boolean value can be used too:
let unknownType = "five";
if (!Number.isNaN(unknownType)) {
    console.log("The value is a number");
} else {
    console.log("The value is not a number");
}


// An alternative to if else statements are switch statements, which provide a different syntax for conditionals based on a single value:
let flightStatus = "boarding";
switch(flightStatus) {
    case "scheduled":
        console.log("Flight is on time");
        break;
    case "boarding":
        console.log("Flight is boarding");
        break;
    case "departed":
        console.log("Flight has departed");
        break;
    default:
        console.log("Flight status unknown");
        break;
}



