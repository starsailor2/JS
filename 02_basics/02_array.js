const marvel_heroes = ["thor", "Ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes) // dc_heroes array attach to the marvel_heroes as a whole
// console.log(marvel_heroes);

// const allHeroes = marvel_heroes.concat(dc_heroes) // it return a new array by combining both array
// console.log(allHeroes);

// const all_new_heroes = [...marvel_heroes, ...dc_heroes] // break all elements and spread it
// console.log(all_new_heroes);

// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

// const real_another_array = another_array.flat(2); // it converts all the subarray into a single array
// console.log(real_another_array);

console.log(Array.isArray("Rishav"));
console.log(Array.from("Rishav"));

console.log(Array.from({name : "Rishav"})); // console could not decide which should be choose to convert into array so it will return empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // return an array from a set of elements

 

