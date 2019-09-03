console.log('in js file');
const employees = [
  {
    firstName: 'Mike',
    lastName: 'Smith',
    employeeID: '2405',
    annualSalary: 7000,
    jobTitle: 'Marketing'
  },
  {
    firstName: 'Ben',
    lastName: 'Smith',
    employeeID: '24505',
    annualSalary: 1000,
    jobTitle: 'specialist'
  },
  {
    firstName: 'Mike',
    lastName: 'Mikerson',
    employeeID: '2605',
    annualSalary: 7000,
    jobTitle: 'boss man'
  },
  {
    firstName: 'Derp',
    lastName: 'Derpington',
    employeeID: '2705',
    annualSalary: 4000,
    jobTitle: 'secretary'
  },

];

$(document).ready(readyNow);

function readyNow() {
  console.log('in ready now')
  handleSubmit();
  renderList();
  
}

function handleSubmit() {
  console.log('in handle submit');
  $('#submit').on('click', addEmployee);
  totalSalary();

}

function addEmployee() {
  console.log('in addperson');
  let salaryToNum = $('#salary').val();
  
  let newEmployee = {
    firstName: $('#first').val(),
    lastName: $('#last').val(),
    employeeID: $('#empID').val(),
    annualSalary: parseInt(salaryToNum),
    jobTitle: $('#jobPosition').val()
  }
  console.log(newEmployee);
  employees.push(newEmployee);
  renderList();
}

function renderList() {
  console.log('function to render list');
  $('#employeeList').empty();
  //for (let i = 0; i < employees.length; i++) 
  for(employee of employees)
  {
    let $li = $(`<li id="employeeObject">First Name : ${employee.firstName}  
      Last Name : ${employee.lastName}  
      ID : ${employee.employeeID}  
      Salary : ${employee.annualSalary}  
      Job Title : ${employee.jobTitle} 
    <button class="delete">Delete</button><br/></li>`);
    $li.data('empObjectId', employee.employeeID);
    $('#employeeList').append($li);
  }
  $('.delete').on('click', removeEmployee);//adds listener to delete button
  totalSalary();
}

function totalSalary() {
  let total = 0;

  $('#totalSalary').removeClass('error');//
  for (employee of employees) {
    total += employee.annualSalary;
  }
  $('#totalSalary').empty();
  $('#totalSalary').append(`Monthly Total Salary = $${total}`);
  
  if(total > 20000){
    $('#totalSalary').addClass('error');
  }
  return total;
}
let removee;
function removeEmployee() {
  removee = $(this).parent();
  $(this).parent().remove();//removes employee object from DOM
  adjustSalary(removee);
  console.log(removee);
  return removee;
}
//Stretch Goals

// function adjustSalary(removee){
//   const salaryVal = totalSalary();
//   const subtractVal = $(removee.annualSalary).val();
//   console.log(totalSalary());
//   console.log(removee);
//   console.log(salaryVal);
//   console.log(subtractVal);
//   let newTotal = salaryVal-subtractVal;
//   $('#totalSalary').empty();
//   $('#totalSalary').append(`Monthly Total Salary = $${newTotal}`);
// }