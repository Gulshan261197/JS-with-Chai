const form = document.querySelector('form')
//when you select here the element then this usecase will giv you empty
//const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === ' ' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a  valid heigth ${height}`
    }

    else if (weight === ' ' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a  valid heigth ${weight}`
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        //shoe the results
        if (bmi < 18.6) {
            results.innerHTML = ` <span>${bmi}</span>=> under the weight`
        }
        else if (bmi > 18.6 && bmi < 24.8) {
            results.innerHTML = `<span>${bmi}</span>=> Noraml Range`
        }
        else {
            results.innerHTML = `<span>${bmi}</span>=> Over Weight`
        }

    }
})
