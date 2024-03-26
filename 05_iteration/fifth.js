const coding = ["Js", "Java", "C++", "Python", "C#"]

// coding.forEach(function (val) {
//     console.log(val);
// })

// coding.forEach((item) => {
//     console.log(item);
// })

// function printing(val) {
//     console.log(val);
// }
// coding.forEach(printing)


//+++++++++++++++++ How to access the multiple objects inside the Array +++++++++++++++++++++
const myCoding = [
    {
        LanguageName: "Javascript",
        LanguageFile: "JS"
    },
    {
        LanguageName: "Python",
        LanguageFile: "Py"
    },
    {
        LanguageName: "Java",
        LanguageFile: "Java"
    }
]

myCoding.forEach((item) => {
    console.log(item.LanguageName);
})