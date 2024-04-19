// Array

const myArr = [0,1,2,3,true,"Rishav"]

// console.log(myArr);

// console.log(myArr[3]);

// Array methods

// myArr.push(6)
// myArr.push(9)
// myArr.pop() 

// myArr.unshift(10) // for adding element in the 0th index
// myArr.shift() // for removing element from the 0th index 

// console.log(myArr.includes(2)); // gives boolean value for the element present inside the array
// console.log(myArr.indexOf(true)); // gives the index of the element if present
// console.log(myArr.indexOf(5)); // if not then it returns -1

// const newArr = myArr.join() // binds the array and convert it to string
// console.log(typeof newArr); // it gives the output 'string' 
// console.log(newArr);

// console.log(myArr);

//    slice , splice

console.log("A ", myArr);
const myn1 = myArr.slice(1,3) // it just prints the elements of the array of the of that range exclusive 
console.log(myn1);

console.log("B ", myArr); // slice donot change the value of the Array 

const myn2 = myArr.splice(1,3) // it literally split the array in two parts (one is the splice range inclusive and other is the remaining)
console.log(myn2);

console.log("C ", myArr); // it prints the the remaining elements after splicing







