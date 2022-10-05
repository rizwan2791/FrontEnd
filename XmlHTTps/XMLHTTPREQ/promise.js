// promise = resolved.rejected


const getSomething=()=>{
    return new Promise((resolve,reject)=>{

    resolve("data received...")


    // reject("could not fetch data...")

    })
};


getSomething().then((data)=>{

    console.log(data);
}).catch((err)=>{
    console.log(err);
})

// getSomething().then((data)=>{

//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })