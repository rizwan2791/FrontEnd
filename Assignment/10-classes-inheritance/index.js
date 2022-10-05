class CarsNameYear {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }
  const car = new CarsNameYear("Ford", 2014);
  
  const c = document.querySelector("#demo")
  c.innerHTML=`${car.name} was founded in ${car.year}`

class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age(x) {
      return x - this.year;
    }
  }
  
  let date = new Date();
  let year = date.getFullYear();
  
  let myCar1 = new Car("Ford", 2014);
  const cars=document.getElementById("demo1")
  cars.innerHTML=`My car is ${ myCar1.age(year)} years old  `


//inheritance


class Car2 {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
class Model extends Car2 {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }
  
let myCar = new Model("Ford", "Mustang");
document.getElementById("demo3").innerHTML = myCar.show();

//getter setter

class Car4 {
    constructor(brand) {
      this.carname = brand;
    }
    set carname(x) {
      this.newcarname = x;
    }
    get carname() {
      return this.newcarname;
    }
  }
  
  let myCar4 = new Car4("Ford");
  myCar.carname = "Volvo";
  document.getElementById("demo4").innerHTML = myCar.carname;
