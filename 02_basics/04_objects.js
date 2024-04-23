// const linkedinUser = new Object() // declared as a singleton onject
const linkedinUser = {} // declared as a non singleton object

linkedinUser.id = "starsailor"
linkedinUser.name = "Rishav"
linkedinUser.isLoggedIn = false

// console.log(linkedinUser) ; 

const regularUser = {
    email: "ris123@gmail.com",
    fullname: {
        firstname: "Rishav",
        lastname: "Raj"
    }
}

// console.log(regularUser.fullname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign( {}, obj1, obj2 ) // .assign(target, source)
// we give {} empty object as a target and all other as a source which then combine together and return a class 

// const obj3 = { ...obj1, ...obj2 } // spread operator
// console.log(obj3); 

// array of objects
const users = [
    {
        id: 1,
        email: "rishav@gmail.com"
    },
    {
        id: 2,
        email: "ri@gmail.com"
    },
    {
        id: 3,
        email: "rai@gmail.com"
    },
]

// console.log(users[1].id); 

console.log(linkedinUser);

console.log(Object.keys(linkedinUser)); // array of the keys
console.log(Object.values(linkedinUser)); // array of the values
console.log(Object.entries(linkedinUser)); // form nested array in which first is key and second is value

console.log(linkedinUser.hasOwnProperty('id')); // it is use to check whether (LinkedInUser) class has ('id') property, it returns boolean value

