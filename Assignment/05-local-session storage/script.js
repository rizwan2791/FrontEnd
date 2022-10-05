
//localStorage

let players=['Virat','Dhoni','Rohit'];

//Add a key Value inside local Storage
localStorage.setItem('Name','Rizwan');
localStorage.setItem('Name2','Rohan');
localStorage.setItem('playerInfo',JSON.stringify(players));
// Clears entire local storage
// localStorage.clear();


//clear particular key-value pair
// localStorage.removeItem('Name2');


//Retrieve an item from storage
let name = localStorage.getItem('Name');
console.log(name);

name1=localStorage.getItem('playerInfo');
console.log(name1);

//array
name2=JSON.parse(localStorage.getItem('playerInfo'))
console.log(name2);

name2.forEach(element => {
    console.log(element);
});


//sessionStorage

sessionStorage.setItem('Name','Rizwan');
sessionStorage.setItem('Name2','Rohan');
sessionStorage.setItem('playerInfo',JSON.stringify(players));












