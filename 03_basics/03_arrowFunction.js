//this=>This keyword current conext ko represent krta hai


const user = {
    userName: "Gulshan",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.userName} ,welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.userName = "sam"
// user.welcomeMessage()


// function chai() {
//     userName = "ROHIT"
//     console.log(this.userName);
// }
// chai()

// const chai = function () {
//     let userName = "ROHIT"
//     console.log(userName);
// }
// chai()

//++++++++++++++++++++++++++++++++ Arrow Function ++++++++++++++++++++++++++++
const chai = () => {
    userName = "ROHIT"
    console.log(this.userName);
}
chai()
//note->Arraow Fuction K sath This operator use nhi hota hai

const add = (num1, num2) => {
    return num1 + num2
}
console.log(`Sum is:`, add(2, 3));

//implicite function=>jb ek statement ko print krna ho
const sub = (num1, num2) => (num1 - num2)//arrow function aise v likhte hai jb single statement ko 
//print krana ho
console.log(sub(5, 2));

