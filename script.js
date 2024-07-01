// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  const employees = [];
  let addEmployee = true;

  // Added a while loop to only show the prompts when it is true
  while (addEmployee) {
    let firstName = prompt(`Please enter the first name of employee.`);
    let lastName = prompt(`Please enter the last name of the employee.`);
    let salary = prompt(`Please enter the employee's salary.`);

    // Added an employee object
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: parseFloat(salary)
    };

    // Asking if they want another employee on the table
    employees.push(employee);

    // Asks the user if they want to add another employee
    // If no select 'cancel', if yes select 'ok'
    let continueToAdd = confirm(`Do you want to add another employee?`);

    // To end the while loop added an instance to make addEmployee to be false
    if (!continueToAdd) {
      addEmployee = false;
    }
  }
  
  displayAverageSalary(employees);
  getRandomEmployee(employees);
  return employees;
}


// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // Added a variable to track the total salary of the employees
  let salarySum = 0;

  // Used a for loop to calculate the salary total
  for (let i = 0; i < employeesArray.length; i++) {
    salarySum += employeesArray[i].salary;
  }
  // divide the sum by the array length
  salarySum = salarySum / employeesArray.length;

  // Logs the average salary for all them employees
  console.log(`The average salary for your employees is ${salarySum}.`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // Picks a random employee from the employeesArray
  const randomEmployee = Math.floor(Math.random() * employeesArray.length);

  // Logs the random winner (first and last names)
  console.log(`Congratulations to ${employeesArray[randomEmployee].first} ${employeesArray[randomEmployee].last}, this weeks random drawing winner.`);
}


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
