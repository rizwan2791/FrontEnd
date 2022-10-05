const num=[0,10,20,30,40,50];
num1=[];
// num.forEach(n=>{
//     n>20 ? num1.push(n) : console.log();
// })
// console.log(num1);

num.filter(n=>n>30).forEach(n=>{num1.push(n)});
// num.filter(n=>{
//     return n>30;
// })
console.log(num1);

//filter

const scores=[10,20,30,40,50,60]
const finalScores=scores.filter(f=>{
    return f>30;
})
console.log(finalScores);


const users=[
    {name:"Jayesh",subscribed:true},
    {name:"Manish",subscribed:false},
    {name:"Vijay",subscribed:false},
    {name:"Krishna",subscribed:true},
];

const finalUsers=users.filter(u=>{
    return u.subscribed==true;
})
finalUsers.forEach(f=>{
    console.log(f);
})

//map
const prices=[100,200,340];
const finalPrice=prices.map(p=>{
    return p=p*0.2;
})
console.log(finalPrice);


const products=[
    {name:"Parle-g",price:10},
    {name:"Frooti",price:100},
    {name:"Maggi",price:20},
    {name:"Pasta",price:40}
];

const finalProduct = products.map(p=>{
    if(p.price>20){
        return {name:p.name, price:p.price=p.price*0.2}
    }else{
        return p;
    }
});
console.log(finalProduct);

//reduce
const ages=[10,20,30,40,50];
const finalAges = ages.reduce((a,b)=>{
    b=a+b
    return b;
},0);
console.log(finalAges);

// const result = ages.reduce((a,b)=>(a+b));
// console.log(result);


const productCat=[
    {category:"groceries",name:"Parle-g",price:10},
    {category:"groceries",name:"Frooti",price:12},
    {category:"electronics",name:"boat headphone",price:20},
    {category:"groceries",name:"Pasta",price:40}
];

const finalProductCat= productCat.reduce((initial,final)=>{
    initial=initial+final.price;
    return initial;
},0)
console.log(finalProductCat);

//find
const scores1 = [0,10,20,30,40,50];

const finalScores1= scores1.find(s=>{
    return s>30;
})
console.log(finalScores1);


//sort

var students =["Ashish","Ritesh","Shubham","Shivam","Reena"];

students=students.map(s=>{
    return s.toUpperCase();
})
console.log(students.sort());

const scores2 = [5,4,55,45,10,60,90,20,30,40,50];
scores2.sort((a,b)=>{
    return a-b;
})

console.log(scores2);
scores2.sort((a,b)=>{
    return b-a;
})
console.log(scores2);


const players3=[
    {name:"finch",score:70},
    {name:"Surya",score:60},
    {name:"Virat",score:50},
    {name:"Dhoni",score:65}
]

players3.sort((a, b)=> {
    return a.score - b.score;
  });
console.log(players3);


players3.sort((a,b)=>{
    return (a.name).localeCompare(b.name);
})
console.log(players3);












   