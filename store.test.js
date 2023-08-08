// Import the functions to test:
const storeFunctions = require("./store.js");
 

// Test creating an employee.
test("Create Mary Sue as an employee.", () => {
    let test = new storeFunctions.Employee(1, "Mary", "Sue", "Female", 32, "Salesperson");
    expect(test).toEqual({id:1, firstName:"Mary", lastName:"Sue", gender:"Female", age:32, position:"Salesperson"});
});
 

// Test creating an employee with no parameters.
test("Create an empty employee.", () => {
    let test = new storeFunctions.Employee();
    expect(test).toEqual({id:undefined, firstName:undefined, lastName:undefined, gender:undefined, age:undefined, position:undefined});
});
