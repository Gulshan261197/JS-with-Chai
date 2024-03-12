/*Types of dataTypes

(1) Primitive Data Types
(2) Non Primitive(Reference Type)



( 1)Primitive

7 Types-> String, Number, Boolean, null, undefined,Symbol,
  BigInt  
  */

//use of primitive datatypes
const score = 100
const scoreValue = 100.4

const isLoggedIn = false
const outsidetemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

//(2) Refernce Type(Non Pimitive)

//Types=> Array, Objects, Functions
//Array
const heros = ['gulshan', 'rajendra', 'ashirbad'];

//Object
let myObj = {
    name: "Gulshan",
    age: 24,
}

//Function
const myFunction = function () {
    console.log("Hello world!")
}
