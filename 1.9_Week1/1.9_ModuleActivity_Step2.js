//Step 2
//The following code is missing operations to use on variables, add them in where necessary.

// Function for multiplying numbers by 10 and showing the result.
function multiplyByTen(...args) {
 

    for (let i = 0; i < args.length; i++) {
 

        // Store the current number temporarily.
        let currentNumber = args[i];
 

        // Multiply the current number by ten.
        let answer = currentNumber * 10;


        // Show the number in the console.
        console.log(`${currentNumber} multiplied by 10 = ${answer}`);
    }
}
 
// Multiply some numbers by 10.
multiplyByTen(5, 10, 15, 20);


// Function for checking if two values are the same.
function checkValuesEqual(first, second) {
 

    // Variable for storing Boolean.
    let valuesEqual
 

    // Check if the values are the same, including their type.
    valuesEqual = first === second;
    console.log('Values checked...');
 

    // Show the result in the console.
    if (valuesEqual) {

        console.log("The values were equal.");

    } else {

        console.log("The values were not equal.");

    }
}
 

// See if these pairs of values are the same.
checkValuesEqual("hello", "goodbye");
checkValuesEqual("hello", "hello");
checkValuesEqual(5, 5);
checkValuesEqual(5, "5");
 

// Function for counting how many 1s are in an array.

function countOnes (values) {
 

    // Variable for the number of ones.
    numOnes = 0;
 

    for (let i = 0; i < values.length; i++) {
 

        // Check if the current value is 1.
        let isOne = (values[i] == 1);
 

        // Add one to the count of ones.
        if (isOne) numOnes++;
 

    console.log(`Total ones: ${numOnes}`);
}


}

//call countOnes function
countOnes([1, 1, 1, 1])

