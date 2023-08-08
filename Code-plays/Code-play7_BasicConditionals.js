//----CODE-PLAY 7 BASIC CONDITIONALS----//

// The operators for Boolean values are what are used for creating conditional statements. Here’s a basic example:
let yes = true;
let no = false;

if (yes && no) {
    console.log("Both values are true");
}

if (yes || no) {
    console.log("One value is true");
}


// When you run this code, only the second string is printed to the console. 
// The && (and) operator requires that both values being compared are true, and since no is false, the expression evaluates to false.

// We can see a similar effect if we replace the expression with the logical operator with a comparison operator, as follows:
let number1 = 10;
let number2 = 20;

if (number1 < number2) {
    console.log("Number 1 is smaller than Number 2");
}

if (number1 > number2) {
   console.log("Number 1 is larger than Number 2");
}


// In this case, we will only see the first string, since 10 is smaller than 20.

// You do not need to explicitly define an opposite case. 
// If you want something different to happen if the conditional statement is false, you can add an else statement instead. 
// Here is an example:
if (number1 < number2) {
    console.log("Number 1 is smaller than Number 2");
}
else {
    console.log("Number 1 is larger than or equal to Number 2");
}


// Else can also be used in conjunction with if. 
// What happens if you change the value of the variable no in the first example to true, and then run the same code?

// Outputs:
// Both values are true
// One value is true

// Sometimes you want to stop the execution of following conditional statements when you have multiple conditions that can be met. 
// This can be done by using else if:
if (yes && no) {
    console.log("Both values are true");
}
else if (yes || no) {
    console.log("One value is true");
}


// Now, if both yes and no are true, then only the first case will print a line to the console, even if the second conditional statement would also be true.

// You do not need to have an else statement or cover every possible result, however. 
// If you wish for code to be executed when a certain condition is met, but otherwise the rest of the program remains the same, simply provide one case:
let special = false;

console.log("Performing a normal operation.");

if (special) {
    console.log("Performing a special operation.");
}

console.log("Program has ended.");


// Also, note the lack of an operator in the conditional statement. 
// If a variable will either be true or false, then it can be used by itself as the statement.

// For simple conditional statements for tasks such as assigning a variable's value, the "?" operator is available instead. 
// It can be used as follows:
let firstValue = true;
let newVariable;
newVariable = firstValue ? "first" : "second";

// This is equivalent to the following:
// if (firstValue) {
//     newVariable = "first";
//     else {
//        newVariable = "second";
//     }
// }