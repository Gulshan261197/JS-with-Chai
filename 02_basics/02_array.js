const south_heros = ['mahesh', 'ram', 'teja']

const bolly_heros = ['akshay', 'hritik', 'ajay']

let combinedAllHeros = south_heros.concat(bolly_heros)
console.log(combinedAllHeros)//concat=>you can combined two or more arrays together but it's less used.

const all_new_heros = [...south_heros, ...bolly_heros]
console.log(all_new_heros)
/*spread operator(...)=>The spread operator in JavaScript is represented by three consecutive dots (...)
isko use kr k aap do ya do se jada array ko ek array me combined kr skte hai
.spread operator is more useable*/


const arr = [1, 2, 3, [4, 5, 6], 4, 5, [7, 8, 9, [10]]]
const realarr = arr.flat(Infinity)
//nested array ko ek array me convert krne k liye flat(infinity) or koi depth de skte hai
console.log(realarr);



console.log(Array.isArray("Gulshan"))
//Array.isArray()=>The Array.isArray() static method determines whether the passed value is an Array.

console.log(Array.from("Gulshan"))
/*Array.from()=>The Array.from() static method creates a new, shallow-copied Array instance 
from an iterable or array-like object.*/

console.log(Array.from({ name: "Gulshan" }))
//interesting case hai for used in project

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))
/* Array.of()=>The Array.of() static method creates a new Array instance 
from a variable number of arguments, regardless of number or type of the arguments.*/
