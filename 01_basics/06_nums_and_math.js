const score = 400
console.log(score)

const balance = new Number(123.567)
console.log(balance)

console.log(balance.toString().length)//toString()=>used for convert Number into String
console.log(balance.toFixed())//toFixed()=>used to convert Number into string keeping specified 
//number of decimals also it rounds in decimal


const otherNumber = 132.524
console.log(otherNumber.toPrecision(8));//toprecision()=> used to format a number with a specified precision (total number of digits).
// It returns a string representation of the number with the specified precision.


const hundreds = 1300000
console.log(hundreds.toLocaleString('en-IN'))//toLcaleString()=>method is used to format numbers, dates,
// and currencies based on the locale of the user It returns a string representing the given number, date, or currency 



//+++++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++
const defaultNumber = -123.53

console.log(defaultNumber);
console.log(Math.abs(defaultNumber))//Math.abs=>Returns the absolute(means +ve Value) value of a number.

console.log(Math.round(defaultNumber))//Math.round=> Returns the value of a number rounded to the nearest integer.

console.log(Math.floor(1123.53))//Math.floor=>round a number downwords to the nearest integer

console.log(Math.max(1, 4, 2, 3))//Math.max(x1, x2, ..., xn)=> Returns the largest of zero or more numbers.

console.log(Math.min(4, 2, 1, 3));//Math.min(x1, x2, ..., xn)=> Returns the smallest of zero or more numbers.

console.log(Math.sqrt(4))//Math.sqrt(x)=>Returns the square root of a number.

console.log(Math.pow(2, 3))//Math.pow(x, y)=> Returns the base to the exponent power.

console.log(Math.log10(1))//Math.log(x)=> Returns the natural logarithm (base e) of a number.

console.log(Math.random())//Math.random(): Returns a random floating-point number between 0 (inclusive) and 1 (exclusive).

//note: hume random value one ya one se  bada cahhiye to usme 10 ka multiply or 1 ka addition
//krna hoga kyuki 0.02324 v no. ho skta hai isliye 0 ko avoid krne k liye 1 add krna padta hai
console.log(Math.floor(Math.random() * 10) + 1)

//example if need minimum 10 ya usse bada 
const min = 10
const max = 20

console.log(Math.floor(Math.random() * 10) + 10)