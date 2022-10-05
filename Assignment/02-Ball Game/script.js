const startButton = document.querySelector('.startButton');
var a=0;
startButton.addEventListener('click', e=>{
            e.value=Math.floor(Math.random() * 40) + 1;
            a=e.value;
            console.log(a);
            document.querySelector('.startButton').disabled=true;
        })

const div=document.querySelector(".container")
let html=``
for(var i=1;i<=40;i++){
    html=`<button class="bts"  onclick="incrementer()">${i}</button>`;
    div.innerHTML+=html;
}
const AllButtons = document.querySelectorAll(".bts");
AllButtons.forEach(e=>{
    e.addEventListener('click', function() {
        if (e.innerText==a){
            this.style.backgroundColor="green"
            document.querySelectorAll(".bts").forEach(e=>{
                e.disabled = true;
                if(counter<6){
                    turnsTaken1.innerText=`Turns Taken : ${counter-1} You Won`
                }else{
                    turnsTaken1.innerText=`Turns Taken : ${counter} You Won`
                }
               
            })
        }else if(e.innerText>a){
            this.style.backgroundColor="red"
        }else if(e.innerText<a){
            this.style.backgroundColor="yellow"
        }
        else{
            this.style.backgroundColor = "blue"
    }
    })

});

const turnsTaken1=document.querySelector(".turnsTaken");
var counter = 1;

function incrementer(){
 if(counter<6){ 
    console.log(counter);
    turnsTaken1.innerText=`Turns Taken : ${counter}`
    counter++;
   
 }else
 document.querySelectorAll(".bts").forEach(e=>{
    e.disabled = true;
    turnsTaken1.innerText=`Turns Taken : ${counter} You Lost `

   
}) 
}