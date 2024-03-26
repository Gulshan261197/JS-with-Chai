/*Reduce=>
//In JavaScript, the reduce() method is used to execute a reducer function on each element of an array, 
//resulting in a single output value. The reducer function takes four arguments: accumulator, current value, current index, and the array itself
//accumulator: Accumulates the result.
//currentValue: The current element being processed in the array.
//0: Initial value of the accumulator.*/


const myNums = [1, 2, 3]

// const MyTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval:${currval}`);
//     return acc + currval
// }, 0)
// console.log(MyTotal);

// const mytotal = myNums.reduce((acc, currval) => {
//     console.log(`acc: ${acc} and currval:${currval}`);
//     return acc + currval
// }, 0)
//console.log(mytotal);

//++++++++++++++++++++++++++++++++ real based scenario +++++++++++++++++++++++++++++++++++
//note=> jb hum shopcart total amount ko add krna chahte hai tb reduce ka use kr skte hai
const shoppingCart = [
    {
        courseName: "Js Course",
        price: 2999
    },
    {
        courseName: "Java Course",
        price: 1999
    },
    {
        courseName: "Python Course",
        price: 3999
    },
    {
        courseName: "React Course",
        price: 999
    },
]

const total = shoppingCart.reduce((acc, item) => {
    return acc + item.price
}, 0)
console.log(total);

