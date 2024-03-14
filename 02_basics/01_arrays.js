//Array=> collection of element of any datatype

//JavaScript arrays are resizable and can contain a mix of different data types.

//JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, 
//rather than deep copies).shallow copies means it share the same reference of object means you change anything in shallow copy then it also change in original data


//+++++++ Types of way to Array Declaration +++++++++++

const arr = [1, 2, 'Gulshan', 3]
console.log(arr[2])//is type se aap array ko access krte hai

const myArr = [1, 2, 3, 4, 5]
console.log(myArr[0])//is type se aap array ko access krte hai

const myarr = new Array(12, 13, 14, 15)
console.log(myarr[2])



//Array Methods

myarr.push(1)//push()=>insert the data in array
myarr.push(2)
myarr.pop()//pop()=>remove the data from array
myarr.pop()
console.log(myarr);

console.log(myarr.includes(1))//includes=>it returns true or false if data is available or not
console.log(myarr.indexOf(13))//indexOf=>it return index value if data is present otherwise return -1


//+++++++++++++++++ Slice and Splice +++++++++++++++++++
console.log("A", myarr);

const myn1 = myarr.slice(1, 3)
console.log("B", myarr);
//slice=>it reperesnt the sub array of original array whatever give the range
console.log(myn1);

console.log("B", myarr);

const myn2 = myarr.splice(1, 3)//splice=>ye original array ko change kr deta hai or range k according data break krta hai
console.log("c", myarr);
console.log(myn2);



