const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissor = document.querySelector(".scissor")
let result = document.querySelector(".result")
let compRes = document.querySelector(".comp span")
let userRes = document.querySelector(".user span")
let compChoice = Math.ceil(Math.random()*3)

let userScore = 0
let compScore = 0

//Rock
//Rock - 1, Paper - 2, Scissor - 3
rock.addEventListener('click', () => {
    const compChoice = Math.ceil(Math.random() * 3)

    switch (compChoice) {
        case 1:
            result.innerHTML = "It's a draw"
            break;
        case 2:
            result.innerHTML = "You lose I chose paper"
            compScore++
            compRes.innerHTML = compScore
            
            break;
        default:
            result.innerHTML = "You win i chose scissor"
            userScore++
            userRes.innerHTML = userScore
            break;
    }
})

//Paper
//Rock - 1, Paper - 2, Scissor - 3
paper.addEventListener('click', () => {
    const compChoice = Math.ceil(Math.random() * 3)

    switch (compChoice) {
        case 1:
            result.innerHTML = "You win i chose rock"
            userScore++
            userRes.innerHTML = userScore
            break;
        case 2:
            result.innerHTML = "It's a draw"
            break;
        default:
            result.innerHTML = "You lose I chose scissor"
            compScore++
            compRes.innerHTML = compScore
            break;
    }
})

//Scissor
//Rock - 1, Paper - 2, Scissor - 3
scissor.addEventListener('click', () => {
    const compChoice = Math.ceil(Math.random() * 3)

    switch (compChoice) {
        case 1:
            result.innerHTML = "You lose i chose rock"
            compScore++
            compRes.innerHTML = compScore
            break;
        case 2:
            result.innerHTML = "You win I chose paper"
            userScore++
            userRes.innerHTML = userScore
            break;
        default:
            result.innerHTML = "It's a draw"
            break;
    }
})

