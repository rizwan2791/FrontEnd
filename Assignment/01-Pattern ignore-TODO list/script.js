const ul=document.querySelector("ul")
const input = document.querySelector("input")
const button = document.querySelector("button")

let html=``
button.addEventListener('click', e=>{
    // html =`<li>${input.value}</li>`;
    html =`<li class="list-group-item ">${input.value}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<i class=" fa-solid fa-trash-can"></i></li>`;
    ul.innerHTML+=html
    input.value=""

});



ul.addEventListener('click',e=>{
    if(e.target.localName=="i"){
        e.target.parentElement.remove();
    };
})