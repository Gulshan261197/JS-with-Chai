

//nested function me child function parent ka variables ko access krte hai but parent nhi kr skta
//or parent function ko call v krna hoga
function one() {
    const username = "Gulshan"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

    two()
}

one()



//+++++++++++++++ Interesting ++++++++++++++++++++++++++++++++==


console.log(addOne(5));//hoisting=>if function called top of the file or above the function that's called hoisting
function addOne(num1) {
    return num1 + 1
}

//note:
//you can create function both of types


console.log(addTwo(5));//agar aap  expression k sath hoisting krte ho tb ye error return krega
const addTwo = function (num) {//this type of function also called experation
    return num + 2
}
