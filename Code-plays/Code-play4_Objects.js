

//PROPERTIES AND METHODS

//Define variables
let numberVar = 1.337;
let stringVar = "computers are cool";

//Input method. Print output.
console.log(numberVar.toString());
console.log(numberVar.toFixed(2));
console.log(stringVar.length);
console.log(stringVar.slice(0,9));
console.log(stringVar.replace("cool", "uncool"));


//CREATING NEW OBJECTS

//New Object
let car1 = {
    brand: "Ferrari",
    model: "F50",
    year: 1995
}

//Access properties of object. Print to console.
console.log(car1.brand);
console.log(car1.model);
console.log(car1.year);

//Change value of properties . Print to console.
car1.brand = "Pagani"; car1.model = "Zonda"; car1.year = 1999;
console.log(car1.brand);
console.log(car1.model);
console.log(car1.year);

