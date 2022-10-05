// asynchronize js

// console.log(1);
// console.log(2);

// console.log(3);

// setTimeout(()=>{
//     console.log("call back function called");
// },2000);



// console.log(4);
// console.log(5);

// const request = new XMLHttpRequest()
// request.addEventListener('readystatechange',()=>{

//     if(request.readyState==4 && request.status==200)
//    { console.log(request.responseText);}
//    else if(request.readyState==4){
//     console.log("could not fetch data.....");
//    }

// });

// // readystates
// // 0-unset
// // 1-open
// // 2-Headers received
// // 3- loading
// // 4- complete




// request.open("GET", "https://jsonplaceholder.typicode.com/todos")

// request.send();













const getTodo=(callback)=>{


    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange',()=>{

    if(request.readyState==4 && request.status==200)
   { 
    // console.log(request.responseText);
    const data = JSON.parse(request.responseText);
    //callback(undefined, request.responseText);
    callback(undefined, data);

}
   else if(request.readyState==4){
    // console.log("could not fetch data.....");

    callback("could not fetch data", undefined);
   }

});

// readystates
// 0-unset
// 1-open
// 2-Headers received
// 3- loading
// 4- complete


// request.open("GET", "https://jsonplaceholder.typicode.com/todos")
request.open("GET", "books.json")

request.send();



}












// coding using callBack function




getTodo((err,data)=>{

    console.log("callback called...");
if (err) {
    console.log(""+err);
}
else{
console.log(data);
}

})







































