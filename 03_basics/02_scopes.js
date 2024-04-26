var c = 100 //  its a global scope

if (true) {
    let a = 10 // its a block scope
    const b = 20
    // console.log("INNER: ", a);
}

// console.log(a);// if we want to print a and b it won't print like it shouldn't be.
// console.log(b);
// console.log(c); // in case of using var, it donot follow the scope and hence it will print 


function one() {
    const username = "Rishav"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if (true) {
    const username = "Rishav"
    if (username === "Rishav") {
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++++++

// addOne(4)  // we can call the function before declaring that
function addOne(num) { // if we write like that
    return num + 1
}
addOne(4)

// but if we put the function into a variable, then we can't call it before the definition
const addTwo = function(num) {
    return num + 2
}
console.log(addTwo(5))

