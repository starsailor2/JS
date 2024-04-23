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

console.log(loginuserMessege());
// console.log(loginuserMessege("Rishav"));