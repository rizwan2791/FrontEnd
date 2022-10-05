function EmployeeDetails() {
    var name = "Rizwan";
    var age = 30;
    var designation = "Developer";
    var salary = 10000;
  

    return {
      name: name,
      age: age,
      designation: designation
    }
  }
  
  var newEmployee = EmployeeDetails()

  console.log(newEmployee.salary);

