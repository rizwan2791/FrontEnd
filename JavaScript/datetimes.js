// const now = new Date();
// console.log(now);

// console.log(now.getFullYear());//2022
// console.log(now.getMonth());//
// console.log(now.getDay());
// console.log(now.getDate());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());

// console.log("Timestamp"+now.getTime());

// console.log(now.toTimeString());
// console.log(now.toDateString());
// console.log(now.toLocaleDateString());
// console.log(now.toLocaleTimeString());

const before=new Date("Sat Aug 03 2022 13:33:24");

console.log(before);

const now=new Date();
console.log(now);


let difference = now.getTime()-before.getTime();
let TotalDays = Math.trunc(difference / (1000 * 60*60 * 24));

console.log("You have logged out "+TotalDays);