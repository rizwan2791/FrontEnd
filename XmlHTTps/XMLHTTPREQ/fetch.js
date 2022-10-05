//javascript inbuilt api - fetch API

// internally fetch api implements promise

// fetch returns a promise, promise is resolved on success and rejected on failure


// fetch("books.json").then((response)=>{

//    // console.log("resolved", response);
//     //console.log( response.json().data);

//     return response.json();

// }).then((data)=>{console.log(data);

//         fetch("journal.json").then((response)=>{
//         return response.json();

//         }).then((data)=>{console.log(data);})


//     })

// .catch((err)=>{
//     console.log("error",err);
// })




// fetch("books.json").then((response)=>{
 
//      return response.json();
 
//  }).then((data)=>{console.log(data);
        
   
//  })

fetch("books.json").then((response)=>{

    return response.json()
 }).then((data)=>{
    console.log(data);
 }).catch((err)=>{
    console.log(err);
 })
 
 


