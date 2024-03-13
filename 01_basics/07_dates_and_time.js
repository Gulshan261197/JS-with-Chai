let myDate = new Date()

console.log(myDate.toISOString());//show this type of formate (2024-03-13T11:52:23.767Z)
console.log(myDate.toJSON());//show same as toISOString( 2024-03-13T11:53:53.985Z)

console.log(myDate.toDateString());//show this type of formate( Wed Mar 13 2024)

console.log(myDate.toLocaleDateString());//show this type of formate(3/13/2024)
console.log(myDate.toLocaleString());//show this type of formate(3/13/2024, 5:25:53 PM)

console.log(myDate.toLocaleTimeString());//show only time of date(5:26:56 PM)

console.log(myDate.toString());//show this type of formate (Wed Mar 13 2024 17:27:43 GMT+0530 (India Standard Time))
console.log(myDate.toTimeString());//show this type of formate(17:28:26 GMT+0530 (India Standard Time))



let myCretedDate = new Date(2023, 0, 13)//jb aap single digit likhte hai tb january 0 se satrt hota hai
console.log(myCretedDate.toDateString());
console.log(myCretedDate.toLocaleDateString())

let myDatee = new Date("01-12-2024")//mm-dd-yy me january 01 se start hota hai
console.log(myDatee.toLocaleString());





const newdate = new Date()
console.log(newdate.toLocaleString())
console.log(newdate.getTime())
console.log(newdate.getMonth() + 1);
