// Dates

let myDate = new Date()
// console.log(myDate.toString()); //Fri Apr 19 2024 11:10:10 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toDateString()); //Fri Apr 19 2024
// console.log(myDate.toISOString()); // 2024-04-19T11:09:44.216Z
// console.log(myDate.toJSON()); // 2024-04-19T11:09:44.216Z
// console.log(myDate.toLocaleDateString()); // 4/19/2024
// console.log(myDate.toLocaleString()); // 4/19/2024, 11:09:44 AM

console.log(typeof myDate);

// let myCreateDate = new Date(2023, 0, 23) // here month starts with 0 for january 
// let myCreateDate = new Date(2023, 0, 23, 5, 3, 34)
// let myCreateDate = new Date("2023-01-14") // YYYY-MM-DD
let myCreateDate = new Date("01-14-2023") // MM-DD-YYYY
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp); // Time upto now
// console.log(myCreateDate.getTime()); // Time upto 01-14-2023

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay()); // 1 for monday

// console.log(`The day is ${newDate.getDay()} and the time is ${newDate.getTime()}`)

newDate.toLocaleString('default',{ // for default suggestions press (ctrl + space)
    weekday: "long"
})

