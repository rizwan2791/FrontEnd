//callback function

const myFunc=function(callback){
    let value=40;
    callback(value);

}

myFunc(val=>{
    console.log(val);
});


//foreach

const players=["Rizwan","Ritesh","Shubham","Shivam","Reena"];

// for(let i=0;i<players.length;i++){
//     console.log(players[i]);
// }

// players.forEach((player,index)=>
//     {console.log(player+ " " + index)});

// players.forEach((p,i)=> {
//     console.log(p+" "+i);
// });

// const ul=document.querySelector(".players")
// console.log(ul);
// let html=``;
// players.forEach((player)=>{
//     html+=`<li>${player}</li>`;
//     });

// ul.innerHTML=html;

//object literals

let player ={
    name:"Sachin",
    age:35,
    matches:200,
    tweets:['India in Asia Cup','Federer retires','Indian cricket in 2025'],
    country:"India",
    score:function(){
        console.log("Highest score is 205");
    },
    printMatches:function() {
        console.log("Matches : "+this.matches);
        console.log(this);
    },
    tweeter:function(){
            player.tweets.forEach(tweet=>{console.log(tweet)})     
        }

        
    
}
console.log(player.name);
console.log(player['name']);
console.log(player.age);
console.log(player.tweets[0]);
player.score();
player.printMatches();
player.tweeter();


const a=function(callback){
    let a=10;
    callback(a);
}

a(val=>{
    console.log(val);
})

