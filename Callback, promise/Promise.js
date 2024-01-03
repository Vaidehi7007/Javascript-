console.log('This is Promises');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done")
            resolve("Neha")
        }, 3000);
    }
})
let p2 = Promise.all([prom1, prom2])
p3.then((a)=>{
    console.log(a)
}).catch(err=>{
    console.log(err)
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you 2")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done 2")
            resolve("Neha 2")
        }, 1000);
    }
})

 
let p3 = Promise.race([prom1, prom2])
p3.then((a)=>{
    console.log(a)
}).catch(err=>{
    console.log(err)
})



let prom3 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you 3")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done 3")
            resolve("Neha 3")
        }, 1000);
    }
})

 
let p4 = Promise.any([prom1, prom2, prom3])
p3.then((a)=>{
    console.log(a)
}).catch(err=>{
    console.log(err)
})


let prom4 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you 4")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done 4")
            resolve("Neha 4")
        }, 1000);
    }
})

 
let p5 = Promise.allSettled([prom1, prom2, prom3, prom4])
p3.then((a)=>{
    console.log(a)
}).catch(err=>{
    console.log(err)
})


let prom5 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you 5")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done 5")
            resolve("Neha 5")
        }, 1000);
    }
})

 
let p6 = Promise.resolve([prom1, prom2, prom3, prom4, prom5])
p3.then((a)=>{
    console.log(a)
}).catch(err=>{
    console.log(err)
})