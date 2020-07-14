const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissor = document.querySelector(".scissor")
let result = document.querySelector(".result")
const scoreboard = document.querySelector(".scoreboard")


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
            scoreboard.querySelector(".comp span").innerHTML = compScore += 1
            
            break;
        default:
            result.innerHTML = "You win i chose scissor"
            scoreboard.querySelector(".user span").innerHTML = userScore += 1
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
            break;
        case 2:
            result.innerHTML = "It's a draw"
            break;
        default:
            result.innerHTML = "You lose I chose scissor"
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
            break;
        case 2:
            result.innerHTML = "You win I chose paper"
            break;
        default:
            result.innerHTML = "It's a draw"
            break;
    }
})

