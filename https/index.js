const getTodos = (callback)=>{
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange',()=>{

        if(request.readyState==4  && request.status==200){
            console.log("inside request ready state");
            //  console.log(request.responseText);
            callback(undefined,request.responseText)
            const data=JSON.parse(request.responseText);
            callback(undefined,data)
        }else if (request.readyState==4){
            // console.log("could not fetch data");
            callback("could not fetch data",undefined)
        }
       
    
    });
    request.open("GET", "https://jsonplaceholder.typicode.com/todos")
    // request.open("GET","books.json")
    request.send();
}





//request are made to api end points
// readystates
// 0-unset
// 1-open
// 2-Headers received
// 3- loading
// 4- complete





getTodos((err,data)=>{
    console.log("callback called ....");
    if(err){
        console.log("could not fetch data"+err);
    }else{
        console.log(data)
    }
});

