//for of


const arr = [10, 20, 30, 40, 50]

for (const num of arr) {
    // console.log(num);
}


const greeting = "HEllo world"

for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
}


//+++++++++++++++++++++++++++ Maps +++++++++++++++++++++++++++++++++++
//Map objects are collections of key-value pairs. A key in the Map may only occur once;
// it is unique in the Map's collection.

const map = new Map()
map.set("IN", "India")
map.set("US", "United State")
map.set("AM", "America")

//console.log(map);
for (const [key, value] of map) {
    console.log(key, ":-", value);

}

//note=> Object iterable nhi hai using (For of)
//note=>Map iterable nhi hai using(For in)