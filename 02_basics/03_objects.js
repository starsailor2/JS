// singleton (apne tarah ka ek hi object hoga)
// Object.create  // create using constructor method

// object literals

const mySym = Symbol("key1")
// we want to use this symbol as a key in this object Juser


const Jsuser = {
    name: "Rishav",
    "full name": "Rishav Raj",
    // mySym: "myKey1", // it just recognize as a normal key as string
    [mySym]: "mykey1",  // we use square bracket when we refer to a symbol
    age: 21,
    location: "Bihar",
    email: "rishav19@google.com",
    isLoggedIn: false,
    lastLognDays: ["Monday", "Saturday"]
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]); // They both give the same value
// console.log(Jsuser["full name"]); // we can't access it through . operator
// console.log(Jsuser.mySym); //using it gives the value as string, but we wanted as symbol.
// console.log(typeof(mySym)); 

// console.log(Jsuser[mySym]);

Jsuser.email = "rishav@redifmail.com"
// console.log(Jsuser["email"]);

// Object.freeze(Jsuser) // by using freeze, we can stop further updation in the object
Jsuser.email = "rishav@chatgpt.com" // email won't update further
// console.log(Jsuser); 

Jsuser.greeting = function() {
    console.log("Hello JS user");
}
Jsuser.greetingTwo = function() { // {this} is use to access all the attribute of a class
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(Jsuser.greeting);
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());






