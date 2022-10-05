//Dom Manipulation


// const para = document.querySelector("p");
// console.log(para);
// para.innerText= "Statement updated to Wonderfull world";

// const paras=document.querySelectorAll("p");

// console.log(paras);

// paras.forEach(para=>{
//     para.innerText+="  more text...."
// })

// const errorPara = document.querySelector(".error");

// errorPara.innerText = "Error message changed";

//getElementsbyId()
//getElementsByClassName()
//getElementbyClassId()

// const welcomePara  = document.querySelector("#welcome");
// const welcomePara = document.getElementById("welcome");

// console.log(welcomePara);

// const errortag= document.querySelectorAll(".error");

// const errortag=document.getElementsByClassName("error");

// console.log(errortag);

// const par=document.querySelector(".content");

// par.innerHTML+="<h1> hiiiiiii </h1>";

// const players = ["Sachin","Sehwag","Yuvi","Dravid"];

// players.forEach(player=>{
//     par.innerHTML+=`<p> ${player}</p>`;
// })

const studentDetails=[
    {id:101,name:"Ritesh",course:"BE-CS",gradYear:2022},
    {id:102,name:"Divesh",course:"BE-Auto",gradYear:2021},
    {id:103,name:"Ganesh",course:"BE-IT",gradYear:2022},
    {id:104,name:"Mangesh",course:"BE-Mech",gradYear:2020},
    {id:105,name:"Pritesh",course:"BE-CS",gradYear:2023},
    {id:106,name:"Mahesh",course:"BE-IT",gradYear:2022}
];

// let html = ``;
// studentDetails.forEach((studentsDetail)=>{
//      html +=`<tr>
//     <td> ${studentsDetail.id}</td>
//     <td> ${studentsDetail.name}</td>
//     <td> ${studentsDetail.course}</td>
//     <td> ${studentsDetail.gradYear}</td>
//     </tr>`;
//  });
// const table= document.querySelector("table")
// table.innerHTML+= html;


Getting and setting tag attributes

getAttribute()
setAttribute()

link reference

const link = document.querySelector("a");

console.log(link.getAttribute("href"));

link.setAttribute("href","http://www.instagram.com");

console.log(link.getAttribute("href"));

link.innerText="Link to Instagram"


const para=document.querySelector("p");
para.setAttribute("Class","success");
para.innerText="Some inner text"
para.setAttribute("style","color:green;");


//Adding and removing css class


// const para = document.querySelector("p");
// para.classList.remove("error");
// para.classList.replace("error","success");
// para.classList.toggle("error")
// para.classList.toggle("error")


// classList.add()
// classList.remove()
// classList.replace()
// classList.toggle()


//Parent child siblings
const article = document.querySelector("article");
const children = article.children;
console.log(children);

// for(let i=0;i<children.length;i++){
//     if(children[i].localName=='p'){
//         children[i].classList.add("error");
//     }
//     if(children[i].localName=='h1' || children[i].localName=='h2'){
//         children[i].classList.add('success');
//     }
//     }


// Array.from(children).forEach(child=>{
//     if(child.localName=='p'){
//         child.classList.add("error");
//     }
//     if(child.localName=='h1' || child.localName=='h2'){
//         child.classList.add('success');
//     }
    
// });


const head2=document.querySelector("h2")
const articles=head2.parentElement;

console.log(head2.parentElement);

console.log(head2.previousElementSibling);

console.log(head2.nextElementSibling.nextElementSibling);


//Events

// const h1 =  document.querySelector("h1")
// const input = document.querySelector("input")
// const button = document.querySelector("button")

button.addEventListener('click', e=>{

    h1.innerText="Event changed the text...";

    h1.innerText = input.value;

    input.value="";

});

const playerList = document.querySelectorAll("li");

// playerList.forEach(player=>{
//     player.addEventListener('click',e=>{
//         e.target.remove();
//     })
// });

const ul=document.querySelector("ul")
const input = document.querySelector("input")
const button = document.querySelector("button")

let html=``
button.addEventListener('click', e=>{
    // html =`<li>${input.value}</li>`;
    html =`<li>${input.value}<i class="fa-solid fa-trash-can"></i></li>`;
    ul.innerHTML+=html
    input.value=""

});
// button.addEventListener('click',e=>{
//     const li=document.createElement("li");
   
//     li.textContent = input.value;
//     li.button=input.value;
//     ul.append(li);
//     const playerList = document.querySelectorAll("li");
//     playerList.forEach(player=>{
//     player.addEventListener('click',e=>{
//         e.target.remove();
//     })
// });
    
// })


//Event Bubbling(events are propogated from child to parent element)

ul.addEventListener('click',e=>{
    if(e.target.localName=="i"){
        e.target.parentElement.remove();
    };
})



