// var age=25;
// console.log(typeof age);
// age="Hello"
// console.log(typeof age);

// let percentage=80;
// percentage="distinctions"
// console.log(percentage);


// const rate=9.0;

// rate=10;
//1. find index of @
let email='jitesh.guntuka@aurionpro.com';

console.log(email.indexOf("@"));

//2. get domain name from email id
console.log(email.substring(0, email.lastIndexOf("@")));


//3. get characters after . and before @
console.log(email.substring(email.indexOf('.')+1,email.indexOf('@')));

//4. replace j by r
console.log(email.replace("j", "r"));


//5. find the length of the string
console.log(email.length);


let a=10;
let b=20;
// result=Sum of ${a} and ${b} is ${a+b};
// console.log(result);

const title="Proramming in Java";
const author="Balagurusamy";
const price=500;

res = `Book of ${title} written by ${author} is of ${price} rs`;

let age=null;
console.log(age,age+10);

const players=["Rizwan","Sahil","xyz"];

// console.log(players.join('-'));

let result=players.concat(["Rishab","Sarah"]);

console.log(result);

players.push("Ashwin");
console.log(players);

let rem=players.pop();

console.log(rem);

console.log(players);

console.log(result.indexOf("Rizwan"));

console.log(players.includes("Rishab"));

let a1=25;
let b1="25";

console.log(a1==b1); //loose camparison

console.log(a1===b1);  //strict camparison

//function
function greet(){
    console.log("Hello");
}

greet();


function addNumbers(a,b){
    return a+b;
}
let results=addNumbers(10,20);
console.log(results);

console.log(addNumbers(10,20));


// function expression

const addNew = function(a,b) {
    return a+b;
}

console.log(addNew(20,70));

//function expression
const addNewNumbers = (a,b)=>{
    return a+b;
}

const addNewNumbers1 = (a,b)=>(a+b);
   

console.log(addNewNumbers(20,700));

console.log(addNewNumbers1(40,80));


