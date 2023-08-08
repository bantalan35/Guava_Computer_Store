//Constructor employee object variables
const employeeOne = new Employee(1,"John","Smith","Male",23,"Manager")
const employeeTwo = new Employee(2,"Mary","Sue","Female",32,"Salesperson")
//
//Constructor employee object functions
function Employee(id, firstName, lastName, gender, age, position) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
    this.position = position;
    this.aMethod = function () {
        return '\n-EMPLOYEE INFO-' 
        + '\nStaff ID: ' + this.id
        + '\nName: ' + this.firstName + " " + this.lastName 
        + '\nGender and age: ' + this.gender + ', ' + this.age
        + '\nPosition: ' + this.position;
    }
    this.aString = function () {
        return '\n-EMPLOYEE INFO-' 
        + '\nStaff ID: ' + this.id.toString() 
        + '\nName: ' + this.firstName.toString() + " " + this.lastName.toString() 
        + '\nGender and age: ' + this.gender.toString() + ', ' + this.age.toString()
        + '\nPosition: ' + this.position.toString();
    }
}
//
//Constructor sales object variables
const firstSale = new Sale(1,"Wi-Fi Adapter",40.00,'01-09-2022')
const firstSaleDate = new Date('2022-09-01')
const firstSaleDateDay = firstSaleDate.toDateString();
const secondSale = new Sale(1,"Wi-Fi Adapter",40.00,'03-09-2022')
const secondSaleDate = new Date('2022-09-03')
const secondSaleDateDay = secondSaleDate.toDateString();
//
//Constructor sales object functions
function Sale(staffId, item, price, date) {
    this.staffId = staffId;
    this.item = item;
    this.price = price;
    this.date = date;
    this.aMethod = function () {
        return '\n-SALE INFO-' + '\nStaff ID: ' + this.staffId 
        + "\nItem: " + this.item
        + '\nPrice: $' + this.price
        + '\nDate: ' + this.date;
    }
    this.aString = function () {
        return '\n-SALE INFO-' 
        + '\nStaff ID: ' + this.staffId.toString() 
        + "\nItem: " + this.item.toString()
        + '\nPrice: $' + this.price.toString()
        + '\nDate: ' + this.date.toString();
    }
}

console.log('\n----BONUS TASK 1----')
// When creating a constructor for these objects, add the function for displaying employee and sale information as a method.
//
console.log(employeeOne.aMethod())
console.log(employeeTwo.aMethod())
console.log(firstSale.aMethod())
console.log(secondSale.aMethod())


console.log('\n----BONUS TASK 2----')
// Using toString() on one of these custom objects does not produce useful output. Modify the objects, so they do have a useful toString method.
//
console.log(employeeOne.aString())
console.log(employeeTwo.aString())
console.log(firstSale.aString())
console.log(secondSale.aString())


console.log('\n----BONUS TASK 3----')
// JavaScript has built-in functions that can work with dates, called JavaScript Date ReferenceLinks to an external site. (W3Schools, 2022). 
// Use them to convert the date string in the sales object and get that date's day of the week.
//
console.log(firstSaleDateDay);
console.log(secondSaleDateDay);