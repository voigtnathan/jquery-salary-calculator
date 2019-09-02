console.log('in js file');
const employees = [
  {
    firstName: 'Mike',
    lastName: 'Smith',
    employeeID: '2405',
    annualSalary: 47000,
    jobTitle: 'Marketing'
  },
  {
    firstName: 'Ben',
    lastName: 'Smith',
    employeeID: '24505',
    annualSalary: 51000,
    jobTitle: 'specialist'
  },
  {
    firstName: 'Mike',
    lastName: 'Mikerson',
    employeeID: '2605',
    annualSalary: 47000,
    jobTitle: 'boss man'
  },
  {
    firstName: 'Derp',
    lastName: 'Derpington',
    employeeID: '2705',
    annualSalary: 47000,
    jobTitle: 'secretary'
  },
  
];

$(document).ready(readyNow);

function readyNow(){
  console.log('in ready now')
  handleSubmit();
  renderList();
}

function handleSubmit(){
  console.log('in handle submit');
  $('#submit').on('click', addEmployee);
  
}
 
function addEmployee(){
  console.log('in addperson')
  let newEmployee = {
    firstName : $('#first').val(),
    lastName : $('#last').val(),
     employeeID : $('#empID').val(),
     annualSalary : $('#salary').val(),
    jobTitle : $('#jobPosition').val()
  }
  console.log(newEmployee);
  employees.push(newEmployee);
  renderList();
}

function renderList(){
  console.log('function to render list');
  $('#employeeList').empty();
  let objectIndex = 0;
  for(let i = 0; i < employees.length; i++){
  $('#employeeList').append(`<li id="employeeObject">First Name : ${employees[i].firstName}   Last Name : ${employees[i].lastName}   ID : ${employees[i].employeeID}   Salary : ${employees[i].annualSalary}   Job Title : ${employees[i].jobTitle}  <button id="delete" onCLick="removeEmployee(this)">Delete</button><br/></li>`);
  objectIndex += 1;
}
  totalSalary();
}

function totalSalary(){
  let total = 0;
  for(let i = 0; i<employees.length; i++){
    total += employees[i].annualSalary;
  }
  $('#totalSalary').empty();
  $('#totalSalary').append(`Monthly Total Salary = $${total}</h4>`)
  return total;
}
function removeEmployee(){

  // console.log('remove employee triggered');
 let toRemove = $(`#employeeObject`).index();
 console.group(toRemove);
$('#employeeObject').remove();

}

