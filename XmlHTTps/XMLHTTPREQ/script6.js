// call back hell

// waiting for one api before calling another

const getTodo=(resource,callback)=>{


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


request.open("GET", resource)

request.send();


}



getTodo("books.json",(err,data)=>{

    console.log(data);

    getTodo("journal.json",(err,data)=>{

        console.log(data);



        getTodo("books.json",(err,data)=>{

            console.log(data);



            getTodo("journal.json",(err,data)=>{
        
                console.log(data);
            });
        
        
        });



  
    });



   
});


