let a = "33"

console.log(typeof a);
console.log(typeof(a));
let valueInNumber = Number(a)
console.log(typeof valueInNumber);
console.log(valueInNumber);

let b = "33abc" //it will also converted to number though when find the value it shows "NaN"
console.log(typeof b);
console.log(typeof(b));
let valueInNumber2 = Number(b)
console.log(typeof valueInNumber2);
console.log(valueInNumber2);

let c = undefined;
console.log(typeof c);
console.log(typeof(c));
let valueInNumber3 = Number(c)
console.log(typeof valueInNumber3);
console.log(valueInNumber3); 

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// "" => false
// "Rishav" => true