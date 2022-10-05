const getTodo=(resource)=>{
    return new Promise((resolve, reject)=>{

        const request = new XMLHttpRequest()
        request.addEventListener('readystatechange',()=>{
    
        if(request.readyState==4 && request.status==200)
       { 
         
        const data = JSON.parse(request.responseText);
        resolve(data);
    
    }
       else if(request.readyState==4){

        reject("data could not fetch")
       }
    
    });

    request.open("GET", resource)
    request.send()

    })
};









getTodo("books.json").then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
});


































// getTodo("journal.json").then((data)=>{
//     console.log(data);


//     getTodo("books.json").then((data)=>{
//         console.log(data);


//         getTodo("journal.json").then((data)=>{
//             console.log(data);

//             getTodo("books.json").then((data)=>{
//                 console.log(data);
                
//             }).catch((err)=>{
//                 console.log(err);
//             })
            
//         }).catch((err)=>{
//             console.log(err);
//         })
        
//     }).catch((err)=>{
//         console.log(err);
//     })


// }).catch((err)=>{
//     console.log(err);
// })