// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`User Power ${power}`);
// }



const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log(`Allow to buy course `);
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log(`User Logged In`);
}