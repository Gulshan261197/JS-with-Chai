const accountId = 123
let accountEmail = "gulu123@gamil.com"
var accountPassword = "12345"
accountCity = "Chapra"
let accountState

//accountId = 2 //not allowed
accountEmail = "himu@gmail.com"
accountPassword = "2222222"
accountCity = "Delhi"
/* we can create a variable without using var, let and const but this not a  best habbit
   eg: account="1233" you an print this value*/

console.log(accountId);
/*
prefer not to use var
because of isssue in block scope and functional scope

*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])