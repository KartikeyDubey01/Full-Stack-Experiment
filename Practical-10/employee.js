const readline = require('readline');
let employees = [];
let nextId = 1; // To ensure unique IDs

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mainMenu() {
  console.log('\nEmployee Management System');
  console.log('1. Add Employee');
  console.log('2. List Employees');
  console.log('3. Update Employee');
  console.log('4. Delete Employee');
  console.log('5. Exit');
  rl.question('Select an option: ', (choice) => {
    switch(choice) {
      case '1': addEmployee(); break;
      case '2': listEmployees(); break;
      case '3': updateEmployee(); break;
      case '4': deleteEmployee(); break;
      case '5': rl.close(); break;
      default:
        console.log('Invalid choice!');
        mainMenu();
    }
  });
}

function addEmployee() {
  rl.question('Employee Name: ', (name) => {
    rl.question('Position: ', (position) => {
      rl.question('Salary: ', (salary) => {
        let s = parseFloat(salary);
        const emp = { id: nextId++, name, position, salary: s };
        employees.push(emp);
        console.log('Employee added successfully!');
        mainMenu();
      });
    });
  });
}

function listEmployees() {
  if (employees.length === 0) {
    console.log('No employees found!');
  } else {
    console.log('\nEmployee List:');
    employees.forEach(emp => {
      console.log(`ID: ${emp.id}, Name: ${emp.name}, Position: ${emp.position}, Salary: $${emp.salary}`);
    });
    console.log(`Total employees: ${employees.length}`);
  }
  mainMenu();
}

function updateEmployee() {
  rl.question('Enter employee ID: ', (id) => {
    const employee = employees.find(emp => emp.id === parseInt(id));
    if (!employee) {
      console.log('Employee not found!');
      return mainMenu();
    }
    rl.question(`New name (${employee.name}): `, (name) => {
      rl.question(`New position (${employee.position}): `, (position) => {
        rl.question(`New salary (${employee.salary}): `, (salary) => {
          if (name) employee.name = name;
          if (position) employee.position = position;
          if (salary && !isNaN(salary)) employee.salary = parseFloat(salary);
          console.log('Employee updated!');
          mainMenu();
        });
      });
    });
  });
}

function deleteEmployee() {
  rl.question('Enter employee ID to delete: ', (id) => {
    const index = employees.findIndex(emp => emp.id === parseInt(id));
    if (index === -1) {
      console.log('Employee not found!');
    } else {
      employees.splice(index, 1);
      console.log('Employee deleted!');
    }
    mainMenu();
  });
}

mainMenu();
