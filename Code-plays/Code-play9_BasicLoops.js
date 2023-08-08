//----CODE-PLAY 9 BASIC LOOPS----//

// for (let i = 0; i < 5; i++) {
//     console.log("The current number is " + i.toString());
// }

// The first statement indicates the starting value of the counter variable; 
// the second indicates the condition that ends the loop, and the third indicates how the counter variable is changed for each iteration of the loop.

// The second part of the statement is important! If the condition cannot be met, 
// the loop will never end and your program will be stuck in an infinite loop (unless something inside the loop stops it). 

// The following loop is an example:
// for (let i = 0; i > -1; i++) {
//     console.log("The current number is " + i.toString());
// }

// To force the loop to end, you can use Ctrl-C in your Node interpreter.

// If you already have a starting value for the loop's counter from elsewhere, you do not need to specify it in the first statement. 
// However, you will still need a space there:
// let counter = 5;
// for ( ; counter < 10; counter++) {
//     console.log("Counter is at " + counter.toString());
// }

// For loops can be very useful in examining the values inside an array. 
// For example, if we have an array of strings, we might want to print each of the values. 
// We can do this as follows:
let brands = ["Ferrari", "Pagani", "Mazda", "Holden", "Ford", "Mercedes", "Nissan", "Dacia", "Saab"];
for (let i = 0; i < brands.length; i++) {
    console.log(brands[i]);
}

// Remember that an array's first element is 0, not 1!
// If we are searching for a specific value in the array, we can modify the loop to break out if it finds it.
let target = "Nissan";
for (let i = 0; i < brands.length; i++) {
    if (brands[i] == target) {
        console.log(`The value ${target} is in position ${i} of the array.`);
        break;
    }
}