// function definition
function sayMyName() {
    console.log("RISHAV");
}
// sayMyName is refrence and when we add () after that it become its execution
// sayMyName()

// when we define function we pass the parameters
function addTwoNumbers(number1 , number2) {
    console.log(number1 + number2);
}
// when we call the function we pass the arguments
addTwoNumbers(3, 4)

function addTwoNumbers(number1 , number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
}
result = addTwoNumbers(4,5)
// console.log("Result:" , result);

function loginuserMessege(username = "bot") {
    // if (username === undefined) {
     if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginuserMessege());
// console.log(loginuserMessege("Rishav"));

// function calculateCartPrice(num1) { // when we use that we consider only the first paramter
// function calculateCartPrice(...num1) { // we use ... operator before the parameters to take multiple values in a pass
function calculateCartPrice(val1, val2, ...num1) { // if we use some parameter before ... operator then first argument will be taken by first parameter and so on then rest remaining argument will taken as ...parameter .
    return num1
}

// console.log(calculateCartPrice(2,3,4,6)) 

const user = {
    username: "Rishav",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);
}

handleObject(user) // passing object inside a function
handleObject({
    username: "sam",
    price: 500
})

const myNewArray = [200, 300, 500, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([300, 600, 900]));