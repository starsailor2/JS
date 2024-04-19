const name = "Rishav Raj"
const repoCount = 23

// console.log(name + repoCount + "value");

 const gameName = new String('rishav-raj-srivastava')

//  console.log(gameName[0]);
//  console.log(gameName.__proto__);

//  console.log(gameName.length);
//  console.log(gameName.toUpperCase());
//  console.log(gameName.charAt(4)); // which character in that position

 console.log(gameName.indexOf('a'));

 const newString = gameName.substring(0,4)
 console.log(newString);

 const anotherString = gameName.slice(-2, 6)
 console.log(anotherString);

 const newStringOne = "     Rishav Raj"
 console.log(newStringOne);
 console.log(newStringOne.trim());

 const url = "https://rishav19.com/rishav%20raj"
 console.log(url.replace('%20','-'));

console.log(url.includes('rishav'));
console.log(url.includes('@'));

console.log(gameName.split('-'));
