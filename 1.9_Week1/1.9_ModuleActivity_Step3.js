//Step 3
// Program to compute Fibonacci sequence to N terms.

// Three constant variables for example uses of the function.
const n1 = 4;
const n2 = 8;
const n3 = 12;

// A function to compute the Fibonacci sequence.
// Parameter indicates how many terms to progress to.
function Fibonacci (terms = 0) {
    // Variables for the two terms to add together, starting with 0 and 1.
    let n1 = 0, n2 = 1, nextTerm;
    console.log('Fibonacci Series');
 

    // Variable for storing the next term.
    nextTerm = 2;
 

    // Loop through until we have computed the specified number of terms.
    for (let i = 1; i <= terms; i++) {
        // Print the current value of the first term to the console.
        console.log(n1);
                                            

        // Compute the next term and store it.
        nextTerm = n1 + n2;
 

        // Set the values of the values to add together for the next term.
        n1 = n2;
        n2 = nextTerm;
    }
}
 

// Call the function above with each of the constant variables.
Fibonacci(n1);
Fibonacci(n2);
Fibonacci(n3);