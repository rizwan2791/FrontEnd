// alert("hello bae")
//doctment selection


// const para=document.querySelector("p");
// console.log(para);
// para.innerText="hello are you para ? ";

// const allPara = document.querySelectorAll("p");
// allPara.forEach(p=>{
//     p.innerText+="  i guess text is added";
// })

// const content = document.querySelector(".content");
// console.log(content);
// content.innerHTML+=`<h1>hiii</h1>`;


//inserting in html 


// const players=["Sachin","Sehwag","Dhoni","Harbhajan","Kohli"];
// var html1=``
// players.forEach(p=>{
//     html1+=`<p>${p}</p>`
//     console.log(html1);
// })
// content.innerHTML+=html1;

// const studentDetails=[
//     {id:101,name:"Ritesh",course:"BE-CS",gradYear:2022},
//     {id:102,name:"Divesh",course:"BE-Auto",gradYear:2021},
//     {id:103,name:"Ganesh",course:"BE-IT",gradYear:2022},
//     {id:104,name:"Mangesh",course:"BE-Mech",gradYear:2020},
//     {id:105,name:"Pritesh",course:"BE-CS",gradYear:2023},
//     {id:106,name:"Mahesh",course:"BE-IT",gradYear:2022}
// ];

// html=``;
// studentDetails.forEach(p=>{
//     html+=`<tr><td>${p.id}</td>
//     <td>${p.name}</td>
//     <td>${p.course}</td>
//     <td>${p.gradYear}</td>
//     </tr>`
// })
// const table1= document.querySelector("table");
// table1.innerHTML+=html;

//get set attributes of html

// const attributeGoogle=document.querySelector("a");
// console.log(attributeGoogle);
// console.log(attributeGoogle.getAttribute("href"));
// attributeGoogle.setAttribute("href","www.facebook.com");
// attributeGoogle.innerText="Facebook Link";

// const para=document.querySelector("p");
// console.log(para);
// para.setAttribute("class","success");
// para.setAttribute("style","color:red");
// para.innerText="Hi i am red";

// classList.add()
// classList.remove()
// classList.replace()
// classList.toggle()

// para.classList.remove("error");
// para.classList.replace("success","newSucess");
// para.classList.toggle("success");//remove if present add if not present
// para.classList.add("xioooo")




//parent Child Siblingsss

// const article= document.querySelector("article");
// console.log(article);
// console.log(article.children);
// const child=article.children;
// const h1= document.querySelector("h1");
// console.log(h1);
// console.log(h1.parentElement);
// console.log(h1.nextElementSibling);
// console.log(h1.previousElementSibling);

// const table = document.querySelector("table");
// const itag=document.querySelector("i");
// console.log(itag);
// console.log(itag.parentElement);
// console.log(itag.parentElement.parentElement);
// console.log(itag.parentElement.parentElement.children[2].remove());


// const child=article.children;
// Array.from(child).forEach(c=>{
//     console.log(c.localName);
//     if(c.localName=="h1"  || c.localName=="h2"){
//         c.classList.add("success");
//         c.setAttribute("style","color:blue");
//     }else if(c.localName=="p"){
//         c.classList.add("error");
//         c.setAttribute("style","color:green")
//     }
// })




//event Listener

const input=document.querySelector("input");
const select=document.querySelector(".selecttag")
const select1=document.querySelector(".selecttag1")
const button=document.querySelector("button");
select.addEventListener('click',e=>{
    input.value=e.target.value;
    // h1.innerText=input.innerText;
    // input.value="";
})
// console.log(select1.value);
var table = document.querySelector("table");
var total1=document.querySelector("h1");

console.log(total1);

console.log(typeof(total1.innerHTML));
var html1=``;
var html=``;
button.addEventListener('click',e=>{
    var selector = document.getElementsByName("price")[0];
    console.log(selector);
    var quantityTotal = selector[selector.selectedIndex].value;
    const total = input.value*quantityTotal;
    
   

    var selector = document.getElementsByName("product")[0];
    var productno = selector[selector.selectedIndex].innerHTML;

    
    html=`<tr><td>${productno}</td>
         <td>${input.value}</td>
        <td>${quantityTotal}</td>
        <td>${total}</td>
        <td><button class="hella">Delete</button></td>
        </tr>`
    table.innerHTML+=html;
    a=Number(total1.innerHTML);
    
    total1.innerHTML=a+total;

   



})

table.addEventListener("click", (e) => {
    if (e.target.localName == "button") {
        console.log(e.target.localName);
      console.log(e.target.parentElement.localName);
      e.target.parentElement.parentElement.remove();
      let b= Number(e.target.parentElement.parentElement.children[3].innerHTML);
      console.log(b);
      console.log(total1.innerHTML);
      a=Number(total1.innerHTML);
      total1.innerHTML=a-b;
   

     
      
     
    }
  });





























