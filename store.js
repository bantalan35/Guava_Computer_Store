// We can export multiple functions as an object:

function Employee(id, firstName, lastName, gender, age, position) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
    this.position = position;
}

function Sale(staffId, item, price, date) {
    this.staffId = staffId;
    this.item = item;
    this.price = price;
    this.date = date;
}

function showEmployeeDetails() {
    console.log(`Name: ${employee.firstName} ${employee.lastName}\nStaff ID: ${employee.id}\nAge and Gender: ${employee.age}, ${employee.gender}\nPosition: ${employee.position}`);
}

function showSaleDetails () {
    console.log(`Date of sale: ${sale.date}\nItem sold: ${sale.item}\nItem price: ${sale.price}\n Staff ID of seller: ${sale.staffId}`);
}

module.exports = {
    Employee: Employee,
    Sale: Sale,
    showEmployeeDetails: showEmployeeDetails,
    showSaleDetails: showSaleDetails
}





