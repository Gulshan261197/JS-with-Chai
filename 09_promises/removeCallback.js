//callback hell=>nested call back is called callback hell .because its not readable

//example of callback hell
// const test = () => {
//     setTimeout(() => {
//         console.log("called to Hr");
//         setTimeout(() => {
//             console.log("called to Director");
//             setTimeout(() => {
//                 console.log("Director give output")
//             }, 2000);
//         }, 2000)
//     }, 2000);
// }
// test()

//by using promises we can avoid the callback hell 
//separate promise declare kr skte ya ('promise.All') ka use kr k v handle ho skta hai
//example
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('called to hr');
//         resolve(`first promise completed`)
//         reject(`first promise rejected`)
//     }, 2000);
// })
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('called to Director');
//          resolve(`second promise completed`)
//          reject(`second promise rejected`)
//     }, 3000);
// })
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Director give some output');
//          resolve(`second promise completed`)
//          reject(`second promise rejected`)
//     }, 4000);
// })
// promise1.then((e) => {
//     console.log(e);
// })
//     .catch((error) => {
//         console.log(error);
//     })
// promise2.then((e) => {
//     console.log(e);
// })
//     .catch((error) => {
//         console.log(error);
//     })
// promise3.then((e) => {
//     console.log(e);
// })
//     .catch((error) => {
//         console.log(error);
//     })

//using promise.All

let promisee1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let result = {
            name: "Gulshan",
            marks: 90
        }
        resolve(result)
        reject("Something went wrong")
    }, 2000);
})
let promisee2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let city = "Delhi"
        resolve(city)
        reject("Something went wrong")
    }, 2000);
})
let promisee3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise 3")
        reject("Something went wrong")
    }, 2000);
})
Promise.all([promisee1, promisee2, promisee3])
    .then((e) => {
        console.log(e[1]);
    })