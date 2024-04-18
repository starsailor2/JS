const accountId = 144553
let accountEmail = "rishav@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState; // when print, it shows undefined
// accountId = 2 // not allowed 

console.table([accountId, accountEmail, accountPassword, accountCity]);
/*
prefer not to use var
because of the issue in block scope and functional scope 
*/

accountEmail = "hc2@yahoomail.com;"
accountPassword = "112233"
accountCity = "Muzaffarpur"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

