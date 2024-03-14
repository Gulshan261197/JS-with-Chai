//object literals

const mySymbol = Symbol("key1")

const JsUser = {
    name: "Gulshan",
    age: 18,
    location: "Ranchi",
    email: "gulu@gmail.com",
    [mySymbol]: "mykey1",//symbol ko without '[]' aise declare krne pr value print hoga but wo sahi tarika nhi hai
}

console.log(JsUser.email)/* you can  use the object both of type*/
console.log(JsUser["email"])/*aise v object ko print kra skte hai*/

console.log(JsUser[mySymbol])//syntax ko aise hi print krate hai

JsUser.email = "gulshan123@#"
//console.log(JsUser);

//Object.freeze(JsUser)
//object.freeze=>ka matlab ye object ko freeze kr deta and you can't modification on object
JsUser.email = "gulu123@#"
console.log(JsUser)

JsUser.greeting = function () {
    console.log("Hello Js User");
}

JsUser.greetingTwo = function () {
    console.log(`Hello Js User, ${this.name}`);
}//same object k attributes ko acess krne k liye this keyword ka use krte hai 

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())


