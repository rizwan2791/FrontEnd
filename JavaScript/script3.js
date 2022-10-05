const num = [0,10,20,30,40,50]

const num1=[]
// num.forEach(number => {number>21 ? num1.push(number) : console.log();   })
num.forEach(num=>{
    num>21 ? num1.push(num) : console.log();
})
// console.log(num1);
console.log(num1);


// num.filter(num=>num>30).forEach(num=>num1.push(num));


// console.log(num1);


//array functions

const scores =[20,30,40,50,60];

//filter

// const filteredScores=scores.filter(score=>{
//     return score >=30;
// })


console.log(filter);
// console.log(filteredScores);


// const users=[
//     {name:"Jayesh",subscribed:true},
//     {name:"Manish",subscribed:false},
//     {name:"Vijay",subscribed:false},
//     {name:"Krishna",subscribed:true},
// ];


// const subscribers = users.filter(users=> {
//     return users.subscribed==true ;
// })

// console.log(subscribers);


const prices=[100,200,340];

const discountPrice =prices.map(price=>{
    return price-=price*0.3;
})

console.log(discountPrice);

const products=[
    {name:"Parle-g",price:10},
    {name:"Frooti",price:100},
    {name:"Maggi",price:20},
    {name:"Pasta",price:40}
];

// const discountPrice =products.filter(product=>{
//     if(product.price>20){
//         return {name:product.name,price:product.price-=product.price*0.2}
//     }
//     return product;
    
// })
// console.log(discountPrice);
// console.log(products);

//reduce

// const ages=[10,20,30,40,50];
// const result =ages.reduce((sum,age)=>{
//     console.log(sum,age);
//     sum+=age;
//     return sum;

// },0)
// console.log(result);

// const result =ages.reduce((sum,age)=>sum+age);
// console.log(result);

// const productCat=[
//     {category:"groceries",name:"Parle-g",price:10},
//     {category:"groceries",name:"Frooti",price:12},
//     {category:"electronics",name:"boat headphone",price:20},
//     {category:"groceries",name:"Pasta",price:40}
// ];

// const totalCost = productCat.reduce((total,productCat)=>total+productCat.price,0)

console.log(totalCost);

// find method 
// const scores = [0,10,20,30,40,50];
// const ScoreGreaterThan30 = scores.find((score)=>{
//     return score >30;   
//  });
//  console.log(ScoreGreaterThan30);

//sort
// let students =["Ashish","Ritesh","Shubham","Shivam","Reena"];

// students=students.map(s=>s.toUpperCase());
// students.sort();
// console.log(students);

// const scores = [5,4,55,45,10,60,90,20,30,40,50];
// scores.sort((a,b)=>{
//     if(a<b){
//         return -1;
//     }else if(a>b){
//         return 1;
//     }else{
//         return 0;
//     }
//     return a-b;
// });
// console.log(scores);

// const players=[
//     {name:"finch",score:50},
//     {name:"Surya",score:60},
//     {name:"Virat",score:50},
//     {name:"Dhoni",score:65}
// ]

// players.sort((a, b)=> {
//     return a.score - b.score;
//   });

// console.log(players);

// items.sort(function(a, b) {
//     var nameA = a.name.toUpperCase(); // ignore upper and lowercase
//     var nameB = b.name.toUpperCase(); // ignore upper and lowercase
//     if (nameA < nameB) {
//       return -1;
//     }
//     if (nameA > nameB) {
//       return 1;
//     }
  
//     // names must be equal
//     return 0;
//   });

// players.sort((a, b)=> {
//     return (a.name).localeCompare(b.name);
//   });

// console.log(players);

// const products =[
//     {name:"tshirt",price:500},
//     {name:"chinos",price:1200},
//     {name:"jeabs",price:1000},
//     {name:"shirt",price:800},
//     {name:"Jacket",price:2500}, 
// ]

// const discountPrice =products.filter(product=>{
//     if(product.price>=1000){
//         return {name:product.name,price:product.price-=product.price*0.25}
//     }
    
// })
// console.log(discountPrice);



