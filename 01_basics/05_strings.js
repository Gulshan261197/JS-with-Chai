
const myname = "Gulshan"
const age = 24

console.log(`my name is ${myname} and age is ${age}`)



const gamename = new String("Gulshan")
// console.log(gamename.length)
// console.log(gamename.toUpperCase())
//console.log(gamename.charAt(3));//charAt =>used to find character 
//console.log(gamename.indexOf('s'));//indexOf=.used to find character index

const newstr = gamename.substring(0, 5)//substring=>used to find sub string but last digit not include
console.log(newstr);

const anotherstr = gamename.slice(0, 5)//slice=>used to shallow copy of array not changes in 
// original array but last value not include 
const originalArray = [21, 32, 23, 43, 23, 12]
const arr = originalArray.slice(1, 4)
console.log(arr);
console.log(anotherstr);


const newStringOne = "    Gulshan kumar    "//trim=>used for remove starting space and ending space
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://gulshan.com/gulshan%20kumar"//replace=>used for replace any character or data
console.log(url);
console.log(url.replace('%', '-'));

console.log(url.includes('gulshan'))
//includes=>used for find value are available or not
console.log(url.includes('hdgsjb'));

const mystring = "gulshan kumar singh"

//split=>is used for convert string to array or list and isko separators(" ",- etc.) se use krte h 
const words = mystring.split(' ')

console.log(words[1])

