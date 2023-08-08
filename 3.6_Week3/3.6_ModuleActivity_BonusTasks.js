//--BONUS TASKS--//

//1. Instead of copying the contents of the text files into your JavaScript program, read them directly and parse them into the required objects.

//Read file text data
const fs = require("fs");


function readFileData () {
        fs.readFile('x_Workshop_JSON_Employees.txt', 'utf8', (err, data) => {
           if(err) {
           console.log(err);
           return;
           }
          console.log('\nEmployee File Data '+data)
        });

        fs.readFile('x_Workshop_JSON_Sales.txt', 'utf8', (err, data) => {
            if(err) {
            console.log(err);
            return;
            }
           console.log('\nSales File Data '+data)
         });
}
readFileData();

//Parse text data into objects
const empText = '{ "employees" : [' +
'{ "id":1 , "firstName":"John" , "lastName":"Smith" , "gender":"Male" , "age":23 , "position":"Manager" },' +
'{ "id":2 , "firstName":"Mary" , "lastName":"Sue" , "gender":"Female" , "age":32 , "position":"Salesperson" },' +
'{ "id":3 , "firstName":"Fred" , "lastName":"Jones" , "gender":"Non-Binary" , "age":54 , "position":"Salesperson" },' +
'{ "id":4 , "firstName":"Jane" , "lastName":"Doe" , "gender":"Female" , "age":41 , "position":"Accountant" },' +
'{ "id":5 , "firstName":"Joe" , "lastName":"Bloggs" , "gender":"Male" , "age":65 , "position":"IT Administrator" } ]}';

const salText = '{ "sales" : [' +
'{ "staffId":1 , "item":"Wi-Fi Adapter" , "price":40.00 , "date":"01-09-2022" },' +
'{ "staffId":1 , "item":"Wi-Fi Adapter" , "price":40.00 , "date":"03-09-2022" },' +
'{ "staffId":1 , "item":"USB Cable" , "price":5.00 , "date":"03-09-2022" },' +
'{ "staffId":1 , "item":"Thermal Paste" , "price":7.50 , "date":"05-09-2022" },' +
'{ "staffId":1 , "item":"Wi-Fi Adapter" , "price":40.00 , "date":"07-09-2022" },' +
'{ "staffId":2 , "item":"USB Stick" , "price":10.99 , "date":"06-09-2022" },' +
'{ "staffId":3 , "item":"Pre-Built PC" , "price":1999.95 , "date":"02-09-2022" },' +
'{ "staffId":3 , "item":"USB Cable" , "price":5.00 , "date":"02-09-2022" },' +
'{ "staffId":3 , "item":"HDMI Cable" , "price":15.45 , "date":"02-09-2022" } ]}';

function parseFileData () {

    let empData = JSON.parse(empText);
    let salData = JSON.parse(salText);

    console.log(

        //Employees
        '\nID: '+empData.employees[0].id+
        '\nName: '+empData.employees[0].firstName+' '+empData.employees[0].lastName+
        '\nGender: '+empData.employees[0].gender+
        '\nAge: '+empData.employees[0].age+
        '\nPosition: '+empData.employees[0].position+'\n',

        '\nID: '+empData.employees[1].id+
        '\nName: '+empData.employees[1].firstName+' '+empData.employees[1].lastName+
        '\nGender: '+empData.employees[1].gender+
        '\nAge: '+empData.employees[1].age+
        '\nPosition: '+empData.employees[1].position+'\n',

        '\nID: '+empData.employees[2].id+
        '\nName: '+empData.employees[2].firstName+' '+empData.employees[2].lastName+
        '\nGender: '+empData.employees[2].gender+
        '\nAge: '+empData.employees[2].age+
        '\nPosition: '+empData.employees[2].position+'\n',

        '\nID: '+empData.employees[3].id+
        '\nName: '+empData.employees[3].firstName+' '+empData.employees[3].lastName+
        '\nGender: '+empData.employees[3].gender+
        '\nAge: '+empData.employees[3].age+
        '\nPosition: '+empData.employees[3].position+'\n',

        '\nID: '+empData.employees[4].id+
        '\nName: '+empData.employees[4].firstName+' '+empData.employees[4].lastName+
        '\nGender: '+empData.employees[4].gender+
        '\nAge: '+empData.employees[4].age+
        '\nPosition: '+empData.employees[4].position+'\n',

        // Sales
        '\nStaff ID: '+salData.sales[0].staffId+
        '\nItem: '+salData.sales[0].item+
        '\nPrice: '+salData.sales[0].price+
        '\nDate: '+salData.sales[0].date+'\n',

        '\nStaff ID: '+salData.sales[1].staffId+
        '\nItem: '+salData.sales[1].item+
        '\nPrice: '+salData.sales[1].price+
        '\nDate: '+salData.sales[1].date+'\n',

        '\nStaff ID: '+salData.sales[2].staffId+
        '\nItem: '+salData.sales[2].item+
        '\nPrice: '+salData.sales[2].price+
        '\nDate: '+salData.sales[2].date+'\n',

        '\nStaff ID: '+salData.sales[3].staffId+
        '\nItem: '+salData.sales[3].item+
        '\nPrice: '+salData.sales[3].price+
        '\nDate: '+salData.sales[3].date+'\n',

        '\nStaff ID: '+salData.sales[4].staffId+
        '\nItem: '+salData.sales[4].item+
        '\nPrice: '+salData.sales[4].price+
        '\nDate: '+salData.sales[4].date+'\n',

        '\nStaff ID: '+salData.sales[5].staffId+
        '\nItem: '+salData.sales[5].item+
        '\nPrice: '+salData.sales[5].price+
        '\nDate: '+salData.sales[5].date+'\n',

        '\nStaff ID: '+salData.sales[6].staffId+
        '\nItem: '+salData.sales[6].item+
        '\nPrice: '+salData.sales[6].price+
        '\nDate: '+salData.sales[6].date+'\n',

        '\nStaff ID: '+salData.sales[7].staffId+
        '\nItem: '+salData.sales[7].item+
        '\nPrice: '+salData.sales[7].price+
        '\nDate: '+salData.sales[7].date+'\n',

        '\nStaff ID: '+salData.sales[8].staffId+
        '\nItem: '+salData.sales[8].item+
        '\nPrice: '+salData.sales[8].price+
        '\nDate: '+salData.sales[8].date

        );
}
parseFileData();

//2. Create a new object that allows you to combine an employee with sales records and then add the sales to the employees for all employees.
let empSalTxt = '{ "employeeSalesData" : [' +
'{ "id":1 , "position":"Manager", "name":"John Smith" , "item":"Wi-Fi Adapter" , "price":40.00 , "date":"01-09-2022" },' +
'{ "id":1 , "position":"Manager", "name":"John Smith" , "item":"Wi-Fi Adapter" , "price":40.00 , "date":"03-09-2022" },' +
'{ "id":1 , "position":"Manager", "name":"John Smith" , "item":"USB Cable" , "price":5.00 , "date":"03-09-2022" },' +
'{ "id":1 , "position":"Manager", "name":"John Smith" , "item":"Thermal Paste" , "price":7.50 , "date":"05-09-2022" },' +
'{ "id":1 , "position":"Manager", "name":"John Smith" , "item":"Wi-Fi Adapter" , "price":40.00 , "date":"07-09-2022" },' +
'{ "id":2 , "position":"Manager", "name":"Mary Sue" , "item":"USB Stick" , "price":40.00 , "date":"06-09-2022" },' +
'{ "id":3 , "position":"Manager", "name":"Fred Jones" , "item":"Pre-Built PC" , "price":1999.95 , "date":"02-09-2022" },' +
'{ "id":3 , "position":"Manager", "name":"Fred Jones" , "item":"USB Cable" , "price":5.00 , "date":"02-09-2022" },' +
'{ "id":3 , "position":"Manager", "name":"Fred Jones" , "item":"HDMI Cable" , "price":15.45 , "date":"02-09-2022" } ]}';

//3. Once you have done so, create a function to show formatted information on an employee and all the sales they have made, if any.
function showEmployeeSales() {

    let empSalDat = JSON.parse(empSalTxt);

    console.log(

        '\nItem Sold: '+empSalDat.employeeSalesData[0].item+
        '\nSold by: '+empSalDat.employeeSalesData[0].name+
        '\nStaff ID: '+empSalDat.employeeSalesData[0].id+
        '\nDate Sold: '+empSalDat.employeeSalesData[0].date+'\n',

        '\nItem Sold: '+empSalDat.employeeSalesData[1].item+
        '\nSold by: '+empSalDat.employeeSalesData[1].name+
        '\nStaff ID: '+empSalDat.employeeSalesData[1].id+
        '\nDate Sold: '+empSalDat.employeeSalesData[1].date+'\n',

        '\nItem Sold: '+empSalDat.employeeSalesData[2].item+
        '\nSold by: '+empSalDat.employeeSalesData[2].name+
        '\nStaff ID: '+empSalDat.employeeSalesData[2].id+
        '\nDate Sold: '+empSalDat.employeeSalesData[2].date+'\n',

        '\nItem Sold: '+empSalDat.employeeSalesData[3].item+
        '\nSold by: '+empSalDat.employeeSalesData[3].name+
        '\nStaff ID: '+empSalDat.employeeSalesData[3].id+
        '\nDate Sold: '+empSalDat.employeeSalesData[3].date+'\n',

        '\nItem Sold: '+empSalDat.employeeSalesData[4].item+
        '\nSold by: '+empSalDat.employeeSalesData[4].name+
        '\nStaff ID: '+empSalDat.employeeSalesData[4].id+
        '\nDate Sold: '+empSalDat.employeeSalesData[4].date+'\n',

        '\nItem Sold: '+empSalDat.employeeSalesData[5].item+
        '\nSold by: '+empSalDat.employeeSalesData[5].name+
        '\nStaff ID: '+empSalDat.employeeSalesData[5].id+
        '\nDate Sold: '+empSalDat.employeeSalesData[5].date+'\n',

        '\nItem Sold: '+empSalDat.employeeSalesData[6].item+
        '\nSold by: '+empSalDat.employeeSalesData[6].name+
        '\nStaff ID: '+empSalDat.employeeSalesData[6].id+
        '\nDate Sold: '+empSalDat.employeeSalesData[6].date+'\n',

        '\nItem Sold: '+empSalDat.employeeSalesData[7].item+
        '\nSold by: '+empSalDat.employeeSalesData[7].name+
        '\nStaff ID: '+empSalDat.employeeSalesData[7].id+
        '\nDate Sold: '+empSalDat.employeeSalesData[7].date+'\n',

        '\nItem Sold: '+empSalDat.employeeSalesData[8].item+
        '\nSold by: '+empSalDat.employeeSalesData[8].name+
        '\nStaff ID: '+empSalDat.employeeSalesData[8].id+
        '\nDate Sold: '+empSalDat.employeeSalesData[8].date+'\n',

        );
}
showEmployeeSales();