// var myCar ={
//     name:"Ford Escort",
//     drive:function(){
//         console.log("Weeeee . I am Driving");
//     },
//     panic:function(){
//         console.log("Wait how do you stop these Thing");
//     }
// };

// var yourCar = Object.create(myCar);

// console.log(yourCar.name);

// var vehicle={
//     getModel:function(){
//         console.log(("Get Model"));
//     }
// }

// var car = Object.create(vehicle,{
//     "id" :{
//         value : "Something",
//         writable:false,
//         enumerable:true
//     },
//     "model" : {
//         value : "mercedes",
//         enumerable:true
//     }
// })






var vehiclePrototype ={
    init: function(carModel){
        this.model=carModel;
    },
    getModel:function(){
        console.log("THis model of this vehicle is .."+this.model);
    }
};

function vehicle (model){
    function F(){};
    F.prototype = vehiclePrototype;
    var f = new F();
    f.init(model);
    return f;
}

var car = vehicle("Honda");

car.getModel();

