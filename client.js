console.log('in js file');
const employees = [
  {
    firstName: 'Jenny',
    lastName: 'Tailya',
    employeeID: '2405',
    annualSalary: '47000',
    jobTitle: 'Marketing'
  },
  {
    firstName: 'Ben',
    lastName: 'Dover',
    employeeID: '2405',
    annualSalary: '51000',
    jobTitle: 'backroom specialist'
  },
  {
    firstName: 'Mike',
    lastName: 'Hunt',
    employeeID: '2405',
    annualSalary: '47000',
    jobTitle: 'boss man'
  },
  {
    firstName: 'Anna',
    lastName: 'Lee',
    employeeID: '2405',
    annualSalary: '47000',
    jobTitle: 'secretary'
  },
  
];

$(document).ready(readyNow);

function readyNow(){
  console.log('in ready now')
  handleSubmit();
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
}