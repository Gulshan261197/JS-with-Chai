//filter=>The filter() method of Array instances creates a shallow copy of a portion of a given array.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//const newNums = myNums.filter((item) => item > 5)
const newNums = myNums.filter((item) => {
    return item > 5//note=>agar currly brackects open krte hai to "return" likhna compulsory h
})


//console.log(newNums);



const books = [
    {
        title: "Book One",
        genre: "Fiction",
        publish: 1981,
        edition: 2004
    },
    {
        title: "Book Two",
        genre: "Non-Fiction",
        publish: 1992,
        edition: 2008
    },
    {
        title: "Book Three",
        genre: "History",
        publish: 1999,
        edition: 2007
    },
    {
        title: "Book Four",
        genre: "Science",
        publish: 2009,
        edition: 2014
    },
    {
        title: "Book Five",
        genre: "Non-Fiction",
        publish: 1987,
        edition: 2010
    },
    {
        title: "Book Six",
        genre: "Fiction",
        publish: 1984,
        edition: 2015
    },
    {
        title: "Book Seven",
        genre: "Science",
        publish: 2011,
        edition: 2016
    },
]

//const userBooks = books.filter((bk) => bk.genre === 'Science')
const userBooks = books.filter((bk) => {
    return bk.publish >= 2000 && bk.genre === 'Science'
})
console.log(userBooks);