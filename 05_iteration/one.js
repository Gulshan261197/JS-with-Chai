//for
for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        // console.log(`5 is best number`);
    }
    // console.log(i);


}


//++++++++++++++++++++++ Nested Loop +++++++++++++++++++

for (let i = 1; i <= 10; i++) {
    console.log(`outter loop ${i}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(`Inner Loop ${j}`)
        console.log(`${i}*${j}=${i * j}`);

    }


}


//+++++++++++++++++ Break and Continue ++++++++++++++++++++++++++++++++++++++++
// for (let index = 1; index <= 10; index++) {

//     if (index == 5) {
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`value of indes is: ${index}`);

// }

for (let index = 1; index <= 10; index++) {

    if (index == 5) {
        console.log(`Detected 5`);
        continue;
    }
    console.log(`value of indes is: ${index}`);

}
