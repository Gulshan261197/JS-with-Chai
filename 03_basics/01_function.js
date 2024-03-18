//function=>it is a block of code that perform specific task


function addTwoNumber(num1, num2) //it's called pearameter
{
    console.log(num1 + num2)

}
addTwoNumber(2, 3)//it's called arguments



function TwoNumber(num1, num2) {
    // let sum = num1 + num2
    // console.log("hiii");//return k bad aap koi v operation perform nhi kra skte hai
    // return sum//agar aap return krayenge tabhi aap function ko kisi dusre value me store kr k print kr skte hai
    return num1 + num2;

}
let result = TwoNumber(3, 3)
console.log(result);//

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function loginUserMessage(username) {
    if (username === undefined)// OR if(!username)
    {
        console.log("please Enter a username");
        return
    }
    return `${username} just logged in`
    s
}
console.log(loginUserMessage("Gulshan"))



//++++++++++++ when you work on react or backend ++++++++++++++++++++++++++

function calculatecartPrice(val, val2, ...num1) {
    return num1
}
//rest Operator=>The rest parameter syntax allows a function to accept an indefinite number of arguments as an array
console.log(calculatecartPrice(10, 20, 30, 40, 50));



//+++++++++++++++++++++++++++ OBJECT +++++++++++++++++++++++++++++++
const user = {
    userName: "Gulshan",
    price: 200,

}
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}`)

}
handleObject(user)





const myNewArray = [200, 300, 400, 500]

function returnsecondvalue(getarray) {
    return getarray[2]
}
console.log(returnsecondvalue(myNewArray));