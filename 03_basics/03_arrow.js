 const user = {
    username: "Rishav",
    price: 999,

    // "this" means current context and it is use to access the variables a class
    welcomeMessage : function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }
 }

//  user.welcomeMessage()
//  user.username = "sam" // here we update the context of the class
//  user.welcomeMessage() // here we print the username of the current context using 'this'

//  console.log(this);


// this don't work in function it shows undefined
// this context only work for objects

// function chai() {
//     let username = "Rishav"
//     console.log(this.username);
// }
// chai() 

// or

// const chai = function() {
//     let username = "Rishav"
//     console.log(this.username);
// }
// chai() 

// arrow function

// const chai = () => {
//     let username = "Rishav"
//     console.log(this.username);
// } 
// chai() 

// explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// implicit return (also written as)
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2) // imp. technique for react

// when we have to  return an object we have to wrap it into paranthesis
const addTwo = (num1, num2) => ({username: "Rishav"})
console.log(addTwo(3,4))
