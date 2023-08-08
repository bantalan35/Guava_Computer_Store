// For this workshop, you will be writing code related to the following example: 
// The small Guava Computer Store keeps track of its employees and the sales their employees make. 
// The data is exported by their system into JSON format. An example of each is below. 
//
// Employee: 
// {"id":1,"firstName":"John", "lastName":"Smith", "gender":"Male", "age":23, "position":"Manager"} 
//
// Sale: 
// {"staffId":1, "item":"Wi-Fi Adapter", "price":40.00, "date":"01-09-2022"}     



// STEP 1: CREATE SCRIPT by first putting employee and sale details into objects.
//
console.log('\n----STEP 1: CREATE A SCRIPT----')
//
const employee = {
    id: "1",
    firstName: "John",
    lastName: "Smith",
    gender: "Male",
    age: "23",
    position: "Manager"
}
console.log(employee)
//
const sale = {
    staffId: "1",
    item: "Wi-Fi Adapter",
    price: "40.00",
    date: "01-09-2022"
}
console.log(sale);


// STEP 2: Create functions that output a formatted version of the information for the employee and sale. 
//
console.log('\n----STEP 2: CREATE FUNCTIONS----')
//
function showEmployeeDetails() {
    console.log(`Name: ${employee.firstName} ${employee.lastName}\nStaff ID: ${employee.id}\nAge and Gender: ${employee.age}, ${employee.gender}\nPosition: ${employee.position}`);
}
//
showEmployeeDetails(employee)
//
function showSaleDetails () {
    console.log(`Date of sale: ${sale.date}\nItem sold: ${sale.item}\nItem price: ${sale.price}\n Staff ID of seller: ${sale.staffId}`);
}
//
showSaleDetails(sale)






