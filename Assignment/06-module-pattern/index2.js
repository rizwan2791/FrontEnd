function EmployeeDetails() {
    var name = "Rizwan";
    var age = 30;
    var designation = "Developer";
    var salary = 10000;
  
    var calculateBonus = function(amount) {
      salary = salary + amount;
      return salary;
    }
  
    return {
      name: name,
      age: age,
      designation: designation,
      calculateBonus:calculateBonus
      
    }
  }
  
  var newEmployee = EmployeeDetails()
  console.log(newEmployee.name);
  console.log(newEmployee.calculateBonus(5000));
  

