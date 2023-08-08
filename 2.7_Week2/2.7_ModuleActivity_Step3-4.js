
// STEP 3: Create a constructor for these two object types to make it easier to define new employees and sales in future. 
//
// Example data to use with the constructors:
// The employee shown above sold a second Wi-Fi Adapter two days after their first sale.
// The store also has a female salesperson named Mary Sue, who is 32 years old.
//
console.log('\n----STEP 3:CREATE A CONSTRUCTOR----')
//
let employeeOne = new Employee(1,"John","Smith","Male",23,"Manager")
let employeeTwo = new Employee(2,"Mary","Sue","Female",32,"Salesperson")
let firstSale = new Sale(1,"Wi-Fi Adapter",40.00,'01-09-2022')
let secondSale = new Sale(1,"Wi-Fi Adapter",40.00,'03-09-2022')
//
function Employee(id, firstName, lastName, gender, age, position) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
    this.position = position;
}
//
function Sale(staffId, item, price, date) {
    this.staffId = staffId;
    this.item = item;
    this.price = price;
    this.date = date;
}
//
//TEST
//
//Sales by John. 
console.log(`Name: ${employeeOne.firstName} ${employeeOne.lastName}\nStaff ID: ${employeeOne.id}\nAge and Gender: ${employeeOne.age}, ${employeeOne.gender}\nPosition: ${employeeOne.position}`);
//
console.log(`\nDate of sale: ${firstSale.date}\nItem sold: ${firstSale.item}\nItem price: ${firstSale.price}\n Staff ID of seller: ${firstSale.staffId}`);
console.log(`\nDate of sale: ${secondSale.date}\nItem sold: ${secondSale.item}\nItem price: ${secondSale.price}\n Staff ID of seller: ${secondSale.staffId}`);
//
//Employee information for Mary.
console.log(`\nName: ${employeeTwo.firstName} ${employeeTwo.lastName}\nStaff ID: ${employeeTwo.id}\nAge and Gender: ${employeeTwo.age}, ${employeeTwo.gender}\nPosition: ${employeeTwo.position}`);


// STEP 4: Make an array each for the two types of objects you have, with the original objects and the above objects you created in the array.
//
console.log('\n----STEP 4:MAKE AN ARRAY----')
//
// Assign to array index [0,1]
let allEmployees = [employeeOne, employeeTwo];
let allSales = [firstSale, secondSale];
//
// Test array index
console.log(
    '\nArray Index Data', '\n',
    allEmployees[0],
    allEmployees[1],
    allSales[0],
    allSales[1]
    )
// console.log(employees[0])
// console.log(sales[0])
// console.log(sales[1])
//
// Test all array data
console.log(
    '\nCombined Array Data',
    allEmployees,
    allSales
    )


