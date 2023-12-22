//+++++++++ global scope +++++++++
//var c = 300
let a = 300
//+++++++++++ block scope +++++++++
if (true) {   
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


//++++++++++++++++ scope level ++++++++++++

function one(){
    const username = "neha"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "neha"
    if (username === "neha") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}


// hosting function
addTwo(5)
const addTwo = function(num){
    return num + 2
}