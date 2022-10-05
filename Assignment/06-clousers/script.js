
//   //You could use a global variable, and a function to increase the counter
// const eg4=document.querySelector('#demo4')
// let counter = 0;

// function add() {
//   counter += 1;
// }

// add();
// add();
// add();

// eg4.innerHTML = "The counter is: " + counter;

//clousers


const add = (function () {
    let counter = 0;
    return function () {
        counter += 1; 
        return counter;
    }
  })();
  
  function myFunction(){
    document.getElementById("demo5").innerHTML = add();
  }



var sum= function(a){
    console.log("Live Viewers"+a);
    var c=4;
    return function(b){
        return a+b+c;
    }
}
var store=sum(2);

console.log(store(5));
console.log(store(100));



var sum = function(a,b,c){
    return{
        getSumTwo:function(){
            return a+b;
        },
        getSumThree:function(){
            return a+b+c;
        }
    }
}
var store = sum(3,4,5);
console.log(store.getSumTwo());
console.log(store.getSumThree());




 