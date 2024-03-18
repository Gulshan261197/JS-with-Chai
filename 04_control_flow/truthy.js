const userEmail = "gulu@gmail.com"

if (userEmail) {
    console.log("Got user email");
}
else {
    console.log("Don't have user email");
}

//falsy=>(false, 0 , -0 , BigInt 0n , "" ,null , undefined , NaN) isko chor k baki sb truthy value hote hai

//truthy=>("0" , "false" ," " , [] , {} , function(){ })


//++++++++++++++ How to call empty object ++++++++++++++++++++++++++++++
const emptyObject = {}
if (Object.keys(emptyObject).length === 0) {
    console.log(`Object is Empty`);
}

//++++++++++++++ Nullish Coalescing Operator(??) +++++++++++++++++++++++++++
let val1;
//val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 10
//note=>nullish coalescing operator used for NUll and Undefined


console.log(val1);