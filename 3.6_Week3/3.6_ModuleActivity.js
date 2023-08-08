//--STEP 1--//
const employees = [
    new Employee(1,"John","Smith","Male",23,"Manager"),
    new Employee(2,"Mary","Sue","Female",32,"Salesperson"),
    new Employee(3,"Fred","Jones","Non-Binary",54,"Salesperson"),
    new Employee(4,"Jane","Doe","Female",41,"Accountant"),
    new Employee(5,"Joe","Bloggs","Male",65,"IT Administrator")
]

function Employee(id, firstName, lastName, gender, age, position) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
    this.position = position;
}

const sales = [
    new Sale(1, "Wi-Fi Adapter", 40.00, "01-09-2022"),
    new Sale(1, "Wi-Fi Adapter", 40.00, "03-09-2022"),
    new Sale(1, "USB Cable", 5.00, "03-09-2022"),
    new Sale(1, "Thermal Paste", 7.50, "05-09-2022"),
    new Sale(1, "Wi-Fi Adapter", 40.00, "07-09-2022"),
    new Sale(2, "USB Stick", 40.00, "06-09-2022"),
    new Sale(3, "Pre-built PC", 40.00, "02-09-2022"),
    new Sale(3, "USB Cable", 40.00, "02-09-2022"),
    new Sale(3, "HDMI Cable", 40.00, "02-09-2022")
]

function Sale(staffId, item, price, date) {
    this.staffId = staffId;
    this.item = item;
    this.price = price;
    this.date = date;
}

//--STEP 2--//
function showEmployeeDetails (employee) {
    console.log(`Name: ${employee.firstName} ${employee.lastName}\nStaff ID: ${employee.id}\nAge and Gender: ${employee.age}, ${employee.gender}\nPosition: ${employee.position}`);
}

function viewAllEmployees() {
    for (var i = 0; i < employees.length; i++) {
        showEmployeeDetails(employees[i]);
    }
}
viewAllEmployees();

function showSaleDetails (sale) {
    console.log(`Date of sale: ${sale.date}\nItem sold: ${sale.item}\nItem price: ${sale.price}\n Staff ID of seller: ${sale.staffId}`);
} 

function viewAllSales() {
    for (var i = 0; i < sales.length; i++) {
        showSaleDetails(sales[i]);
    }
}
viewAllSales();

//--STEP 3--//
function findEmployeeWithId (id) {

    let employeeIdFound = false;

    for (let i = 0; i < employees.length; i++) {
        const employee = employees[i];

        if (employees[i].id === id) {
            console.log(employee);
            employeeIdFound = true;
            break;
        }

        if (!employeeIdFound) {
             console.log('NO employee found');
        }
    }
}
findEmployeeWithId(3);

// let employeeWithId = employees.filter(employees => {
//     if (employees.id === 4) {
//         console.log("Employer ID found!: 4");
//     }
// })

//--STEP 4--//
function findEmployeeWithPosition(position) {

    let employeePositionFound = false;

    for (let i = 0; i < employees.length; i++) {
        const employee = employees[i];

        if (employees[i].position === position) {
            console.log(employee);
            employeePositonFound = true;
            break;
        }

        if (!employeePositionFound) {
             console.log('NO employee found');
        }
    }
}
findEmployeeWithPosition("Accountant");


