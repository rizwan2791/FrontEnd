//create object
//set and get properties
//Constructor

// var newObject ={
// }

// var newObject = Object.create(Object.prototype);

// var newObject = new Object();

// //set
// newObject.someKey="hello"

// //get
// var value = newObject.someKey;
// console.log(newObject);
// console.log(value);


//2
// newObject["somekey"] = "Hello"

// var value = newObject["somekey"];

// console.log(value);

//3

// Object.defineProperty(newObject,"someKey",{
//     value:"hello",
//     writable:true,
//     enumerable:true,
//     configurable:true
// });

// var defineProp = function(obj,key,value){
//     var config ={
//         value : value,
//         writable:true,
//         enumerable:true,
//         configurable:true
//     }
//     Object.defineProperty(obj,key,config)
// }

// var person = Object.create(Object.prototype);
// defineProp(person,"car","something")
// console.log(person);

//4

// Object.defineProperties(newObject,{
//     "someKey":{
//         value:"hello",
//         writable:true
//     }
// })

// var value = newObject.someKey;

// console.log(newObject);

//  console.log(value);

//constructor

function Car(model,year,miles) {
    this.model=model;
    this.year=year;
    this.miles=miles;

    this.toString = function(){
        return this.model +" has done "+this.miles +" miles";
    }
}

 var civic = new Car("Honda",2009,200);
 var range = new Car("Range Rover",2004,100);

 console.log(civic.toString());
 console.log(range.toString());








