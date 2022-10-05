//for Each

const players=["Rizwan","Ritesh","Shubham","Shivam","Reena"];

// for(var i =0;i<players.length;i++){
//     console.log(players[i]);
// }

players.forEach((player,index)=>{
    console.log(player+" "+index);
}
)

var ulist=document.querySelector(".unorderedList")
html=``;
players.forEach(player=>{
    html=`<li>${player}</li>`
    ulist.innerHTML+=html;
})

//if else 

var a=30;
if (a==20){
    console.log(a);
}else{
    console.log(a=a-10);
}

//switch
var day;
var date = new Date().getDay();
switch(date){
    case 0:
        day ="Sunday";
        break;
    case 1:
        day="Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case  6:
        day = "Saturday";

}
console.log("Today is "+day);


//for in

const person ={name:"Rizwan",age:21}
for(let x in person){
    console.log(person[x]);
}

//for of

const playerArr=["sachin","Sehwag","Dhoni"];
for(var x of playerArr){
    console.log(x);
}

//while
num=5;
// while(num>1){
//     console.log(num);
//     num--;
// }

//do while

do{
    console.log(num);
    num--;
}while(num>0);






