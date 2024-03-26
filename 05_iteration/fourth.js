//+++++++++++++++++++++++++ How to Iterate Object +++++++++++++++++++++++++++++++

const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} is shortcut for ${myObject[key]}`);

}
