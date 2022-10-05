//console log

console.log("hello");

//var 
//The var statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value.

var a=10;
if (a==10){
    var a=20
    console.log(a);
}console.log(a);

//hoisting
//One of the advantages of hoisting is that it lets you use a function before you declare it in your code.

function cat(name){
    console.log(`These is my cat ${name}`);
}

cat("kitty");

//var hoisting

console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
var num; // Declaration
num = 6; // Initialization
console.log(num); // Returns 6 after the line with initialization is executed.


//let 
let x = 1;
if (x === 1) {
  let x = 2;
  console.log(x);

}
console.log(x);


//const 
//Constants are block-scoped, much like variables declared using the let keyword. The value of a constant can't be changed through reassignment
const b=1;
try{
    console.log(b);
    b=20;
}catch(err){
    console.log(err);
}

