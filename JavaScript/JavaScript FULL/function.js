function myfunction(a,b){
    var c= a+b;
    console.log("Addition is "+c);

}
myfunction(5,10);

function myfunc(a,b){
    return a+b;
}
var addtion = myfunc(4,6);
console.log(addtion);


//function expression

var subs= function(a,b){
    return a-b;
}
console.log(subs(10,5));

var sub1=(a,b)=>{
    return a-b;
}
console.log(sub1(10,7));

var sub2=(a,b)=>(a-b);
console.log(sub2(20,10));


//callback function

 var num=function(callback) {
    var a=20;
    callback(a);  
 }
 num(val=>{
    console.log(val);
 }
 )

 function processUserInput(callback){
    console.log("User name is as follows");
    userName="Sarah"
    callback(userName)
 }
 function userInput(val){
    console.log(val);
 }
 processUserInput(userInput);


 //functionsss

 const mfunction = new Function("a","b","return a*b");
 console.log(mfunction(5,5));

 //function call
 const person1={
    firstName :"Rizwan",
    lastName:"Siddiqui"
 }
 const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
console.log(person.fullName.call(person1));

//apply

const person2 = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person3 = {
    firstName:"John",
    lastName: "Doe"
  }
console.log(person2.fullName.apply(person3, ["Oslo", "Norway"]));

//object literals

let player5 ={
   name:"Sachin",
   age:35,
   matches:200,
   tweets:['India in Asia Cup','Federer retires','Indian cricket in 2025'],
   country:"India",
   score:function(){
       console.log("Highest score is 205");
   },
   printMatches:function() {
       console.log("Matches : "+player5.matches);
   },
   tweeter:function(){
           player5.tweets.forEach(tweet=>{console.log(tweet)})     
       }     
   
}
console.log(player5.name);
console.log(player5.age);
console.log(player5.matches);
console.log(player5.score());
console.log(player5.printMatches());
console.log(player5.tweeter());
//bind

//clousers

