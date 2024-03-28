
//const clock = document.querySelector('#clock')
//note=>dono me se kisi ka use kr skte hai

const clock = document.getElementById('clock')


setInterval(() => {

    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
}, 1000)

//setInterval=>you can  use 'setInterval' when you want to run the program in specific time duration