// Example code for testing.


// Value to test with.
// const testValue = "10";
const testValue = "ten";

 
// Function for squaring numbers from a string, if it can be parsed.
function parseThenSquare(input) {
    console.log("Entering function parseThenSquare");
    let num = Number.parseInt(input);
    console.log(`The input was parsed to ${num}`);
    if (!Number.isNaN(num)) {
        console.log("Returning square of number");
        return num * num;
    } else {
        console.log("Returning null");
        return null;
    }
}
 

// Call the function with the test value and show the result.
console.log(parseThenSquare(testValue));



// While this is a very simple function, this demonstrates how logging to the console can be used to keep track of where the program is running and the value of variables.

// We can also use this with arrays and objects as well, with the help of console.table. Let's do an example with just console.log first. Enter the following into a new file:

// Example code for testing objects.
 
// Objects to test with.
const testObject1 = {name:"Flying Scotsman", class:"Gresley A3", power:"steam", date:1934, kmh:161};
const testObject2 = {name:"M-497", class:"Modified Budd RDC-3", power:"jet", date:1966, kmh:295};
 

// Function for comparing different train speed records.
function getFastestTrain(input1, input3) {

    console.log("Entering getFastestTrain function");
    console.log(`Comparing ${input1.name} with ${input2.name}`);

    if(input1.kmh > input2.kmh) {

        console.log(`Returning the first train which is faster (${input1.kmh} > ${input2.kmh})`);

        return input1;
    } else if (input1.kmh < input2.kmh) {

        console.log(`Returning the second train which is faster (${input1.kmh} < ${input2.kmh})`);

        return input2;
    } else if (input1.kmh === input2.kmh && typeof input.kmh !== "undefined") {

        console.log("Returning both trains since they have the same speed record");

        return [input1, input2];
    } else {

        console.log("Returning null since we couldn't make a comparison");

        return null;
    } 
}
 

// Call the function with the test values and show the result.
// console.log(getFastestTrain(testObject1,testObject2));
// console.table(getFastestTrain(testObject1,testObject2));
// console.table(getFastestTrain(testObject1,testObject1));
console.table(getFastestTrain(5,10));

