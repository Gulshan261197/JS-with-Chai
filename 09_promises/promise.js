//promise=> jb promise create krte hai tb uske perenthisis me function or us function me resolve
//and reject perameter pass krte hai jo ki resolve '.then' k sath sidha connection banata hai or 
//reject '.catch ' k sath 


//example 1
const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task 1");
        resolve();
    }, 1000)
})

promiseOne.then(() => {
    console.log("promise is completed");
})
//.then=>isko execute krane k liye hume resolve ko call krna padta hai
//promise=>promise ko bina kisi variable me store kiye v execute kra skte hai below example


//example 2
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task 2 is complete");
        resolve()
    }, 1000)
}).then(() => {
    console.log("Second promise completed");
})

//example 3
//note=>resolve me jo v data pass hota hai wo .then me access hojata hai    
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ userName: "Gulshan", email: "gulu@gmail.com" })
    }, 1000)
})
promiseThree.then((user) => {
    console.log(user);
})

//example 4
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: 'Gulshan', password: "123" })
        }
        else {
            reject("something went wrong");
        }
    }, 1000)
})
promiseFour.then((user) => {
    console.log(user);
    return user.username;
})
    .then((username) => {
        console.log(username);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => console.log("the promise is either resolved or rejected")

    )
//note=>you can use the multiple then called as chaining
//finally=>it is always executed if the promises is complected or not

//example 5

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: 'Javascript', password: "12353" })
        }
        else {
            reject("Javascript went wrong");
        }
    }, 1000)
})
//note=>async and await se v promise return kr skte hai using try and catch block
const asyncPromiseFive = async () => {
    try {
        const response = await promiseFive
        console.log(response);

    } catch (error) {
        console.log(error, "run aync catch block");
    }
}
asyncPromiseFive()

//how to fecth API in javascript using async and await
// const getAllUser = async () => {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()//yaha await isliye likha kyuki process hone time lg raha tha
//         console.log(data);

//     } catch (error) {
//         console.log("error in aync and await catch");
//     }
// }
// getAllUser()


//How to fetch API in javascript using promises

fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log("error in fetch api");
    })