// const getTodo=async()=>{
//     const response = await fetch("books.json") 
//     const data = await response.json();
//     console.log(data);

//     const response1 = await fetch("journal.json") 
//     const data1 = await response1.json();
//     console.log(data1);

//     }


const getTodo=async(resource)=>{
   // const response = await fetch(resource) 
    const response = await fetch(resource)
    const data = await response.json();
   
    return data

    }


 getTodo("books.json")
 .then((data)=>
 {console.log(data);
})
.catch((err)=>{
    console.log("could not fetch data");
 });

