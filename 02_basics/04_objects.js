const newObj = {}

newObj.name = "Rohit"
newObj.email = "rohit@gmail.com"
newObj.phone = 878427287824
console.log(newObj)

const regularUser = {
    email: "some@gamil.com",
    fullname: {
        userfullname: {
            firstname: "Gulshan",
            lastname: "Kumar"
        }
    }

}//you can create a nested objects

//console.log(regularUser.fullname.userfullname.lastname)

//+++++++++++++++ how to combined multiple objects ++++++++++++++
const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }
const obj3 = { 5: "e", 6: "f" }

// const obj4 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj4);// but this is less used

const obj4 = { ...obj1, ...obj2, ...obj3 }//spread operator mostly used fof concat
console.log(obj4);

console.log(Object.keys(obj1))//by using we can get key of object
console.log(Object.values(obj1));//by using we can get value of object
console.log(Object.entries(obj1));


//++++++++++++ when you create Api Then use +++++++++++++++++

const course = {
    coursename: "Javascript",
    price: "999",
    courseInstructor: "Gulshan"
}
console.log();
//const {coursename}=course