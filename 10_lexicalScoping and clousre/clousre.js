//clousre=>a closure gives you access to an outer function's scope from an inner function
//jb function return hota tb pura lexical scope return hota hai
//Example for clousre 
function outerFunction() {
    const outerVariable = 'I am from outer function';

    function innerFunction() {
        console.log(outerVariable); // Accessing outerVariable from the outer scope
    }

    return innerFunction;
}

const innerFunc = outerFunction();
innerFunc(); // Output: "I am from outer function"




//lexical scope=>Lexical scope is the ability for a function scope to access variables from the parent scope.

//In this example, innerFunction has access to the outerVariable declared in the outer scope because of lexical scoping

// function outerFunction() {
//     const outerVariable = 'I am from outer function';

//     function innerFunction() {
//         console.log(outerVariable); // Accessing outerVariable from the outer scope
//     }

//     innerFunction();
// }

// outerFunction(); // Output: "I am from outer function"




//++++++++++++++++++++++++ Real problem on clousre +++++++++++++

const clickHandler = (color) => {
    const a = () => {
        document.body.style.backgroundColor = `${color}`
    }
    return a
}
document.getElementById('orange').onclick = clickHandler("orange")
document.getElementById('green').onclick = clickHandler("green")