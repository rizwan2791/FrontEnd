var a="25";
var b=Number(a);
console.log(typeof b);

const cofee=["expresso","lateee","copachiiino"]
console.log(cofee);
const fish = ["new",,"new1"]
console.log(fish);
const fish1 = [,"new",,"new1"] //length 4


//basicsss strings 

let email='jitesh.guntuka@aurionpro.com';
//1. find index of @
console.log(email.indexOf("@"));

//2. get domain name from email id
console.log(email.substring(0,email.indexOf("@")));


//3. get characters after . and before @
console.log(email.substring(email.indexOf(".")+1,email.indexOf("@")));

//4. replace j by r
console.log(email.replace("j", "r"));


//5. find the length of the string
console.log(email.length);


const title="Proramming in Java";
const author="Balagurusamy";
const price=500;

console.log(`Thes book is based on ${title} by ${author} for ${price} rupees`);

const players = ["Sachin","Sehwag","kohli","Jadeja"];
const newPlayers=["Jahid","sahid"]
const totalPlayers  = players.concat(newPlayers);
console.log(totalPlayers);

totalPlayers.push("Samay");
console.log(totalPlayers);
totalPlayers.pop();
console.log(totalPlayers);
console.log(totalPlayers.includes("Sehwag"));
console.log(totalPlayers.indexOf("sahid"));

//Strings
//split
var hello="hello how are you hows everything going";
console.log(hello.split(" "));
console.log(hello.split(" ",3));

//prototype

function myfather(name,age,gender){
    this.name=name;
    this.age=age;
    this.gender=gender;
}
myfather.prototype.money=2000;
const fatherDetails=new myfather("A",25,"M");
console.log(fatherDetails.money);

//slice
console.log(hello.slice(0,10));//end exclusive
console.log(hello.slice(20));

var hemlo= "how are"
console.log(hemlo.slice(-3,2));//both sides exclusive
console.log(hemlo.substring(4, 1));//exclusive start

//number methods

let x=12.3
//The toString() method returns a number as a string.
console.log(x.toString());

//toExponential() returns a string, with a number rounded and written using exponential notation.
console.log(x.toExponential(2));

//toFixed() returns a string, with the number written with a specified number of decimals:
console.log(x.toFixed(5));

//toPrecision() returns a string, with a number written with a specified length:
console.log((x.toPrecision(2)));



