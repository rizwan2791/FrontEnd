let btn1 = document.querySelector("#btn1")

btn1.addEventListener('click',()=>{
    const workerObj= new Worker("worker.js");
    workerObj.postMessage("Start worker");
    workerObj.onmessage=function(e){
        document.querySelector("#output").innerHTML=e.data;

    }
    
})

const btn2= document.querySelector("#btn2");
btn2.addEventListener('click',()=>{
    document.querySelector("#hi").innerHTML+="hii !!"
})