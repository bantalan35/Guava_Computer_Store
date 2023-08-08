//----CODE-PLAY 10 MORE ON LOOPS----//

let brands = ["Ferrari", "Pagani", "Mazda", "Holden", "Ford", "Mercedes", "Nissan", "Dacia", "Saab"];

// For loops are not the only way to do iteration. The other main way of doing so is the while loop.

// While loops are specified as follows;
let i = 0;
while (i < brands.length) {
    console.log(brands[i]);
    i++;
}

// This should function the same as our first for loop over the brands array.

// While loop headers work in the same way as an if statement:
let oneFound = false;
let index = 0;
let numbers = [5,3,1,4,2];
while (!oneFound && index < numbers.length) {
    if (numbers[index] === 1) {
        console.log(`Found 1 at index ${index}`);
        oneFound = true;
    }
    index++;
}

// There is no need for a break statement since setting oneFound to true will cause the conditional statement for the while loop to be false, ending the loop. 
// Also, remember you need to update the counter if you use one!

// Do while loops are a variant of while loop that ensures that the code inside of the loop is executed at least once, 
// even if the conditions for ending it are met in the first loop. 

// Here is the previous example recreated as a do while loop:
oneFound = false; // Resetting variables to original values.
index = 0;
do {
    if (numbers[index] === 1) {
        console.log(`Found 1 at index ${index}`);
        oneFound = true;
    }
    index++;
} while (!oneFound && index < numbers.length);


// Typically, you'd use do while loops for operations that should always run at least once.

// Loops can also be nested inside each other:
let coords = [[50,20],[60,10],[30,40]];
for (let i = 0; i < coords.length; i++) {
    console.log(`Getting coordinates at index ${i}`);
    for (let j = 0; j < coords[i].length; j++) {
        console.log(`Coordinate ${j} is ${coords[i][j]}`);
    }
}

// Also, note the behaviour of break statements when used with nested loops:
let newCoords = [[0,50],[30,30],[50,0]];
for (let i = 0; i < newCoords.length; i++) {
    console.log(`Looking for at least one 0 coordinate at index ${i}`);
    for (let j = 0; j < newCoords[i].length; j++) {
        if (newCoords[i][j] === 0) {
            console.log(`Coordinate ${j} is a 0, breaking`);
            break;
        } else {
            console.log(`Coordinate ${j} isn't a 0`);
        }
    }
}

// Only the loop in which the break statement was in (and any nested within it) will be stopped.

// Return works differently when in nested loops:
let moreNewCoords = [[10, 10],[0,20],[20,0]];
function findZeroCoordinate(coords) {
    for (let i = 0; i < coords.length; i++) {
        console.log(`Looking for at least one 0 coordinate at index ${i}`);
        for (let j = 0; j < coords [i].length; j++) {
            if (coords [i][j] === 0) {
                console.log(`Coordinate ${j} is a 0, returning`);
                return;
            } else {
                console.log(`Coordinate ${j} isn't a 0`);
            }
        }
    }
}
findZeroCoordinate(moreNewCoords);

// Since return ends the function immediately, as a consequence all loops in the function are halted.