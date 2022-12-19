

let gameScore = { "player": 0, "computer": 0, "draw": 0 }
let rockButtons = document.querySelectorAll(".container-buttons button")
let scores = document.querySelectorAll(".container-results span")

for (let button of rockButtons) {
    button.addEventListener("click", (e) => {
        if ((gameScore.player === 5) || (gameScore.computer === 5)) {
            return
        } else {
            /*The computer chooses its move*/
            let computerChoice = getComputerChoice()
            /*Initiates the game*/
            let result = gameRockPaperScissor(e.target.dataset.choice, computerChoice)
            /* Update Scorecard */
            printResult(result)
            winCheck(gameScore)
        }
    })
}

let resetButton = document.querySelector(".resetbutton")
resetButton.addEventListener("click", resetgame)



/* FUNCTION DEFINITIONS 
 
/* Returns a random option */
function getComputerChoice() {
    let choices = { 1: "rock", 2: "paper", 3: "scissor" }
    let randomOption = Math.floor(Math.random() * 3) + 1
    return choices[randomOption]
}

/*Plays a round it returns 0 if its a draw, 1 if player won and 2 if computer won */

function gameRockPaperScissor(player, computer) {
    h1Var = document.querySelector("h1")
    textVars = document.querySelector("p")

    let outcomes = { "rock": "scissor", "paper": "rock", "scissor": "paper" }
    if (player === computer) {
        h1Var.innerText = "Draw!"
        textVars.innerText = `Its a DRAW!`
        return 0
    } else if (outcomes[player] === computer) {
        h1Var.innerText = "Player Wins this Round!"
        textVars.innerText = `${player} beats ${computer}`
        return 1
    } else {
        h1Var.innerText = "Computer Wins this round!"
        textVars.innerText = `${computer} beats ${player}`
        return 2
    }

}
/*Updates the gameScore variable. The result input is the return value from the gameRockPaperScissor function*/
function printResult(result) {

    if (result === 1) {
        ++gameScore.player
    } else if (result === 2) {
        ++gameScore.computer
    } else if (result === 0) {
        ++gameScore.draw
    }
    scores[0].innerText = gameScore.player
    scores[1].innerText = gameScore.computer
    scores[2].innerText = gameScore.draw

}


/*Winner Check*/
function winCheck({ player, computer, draw }) {
    let h1Var = document.querySelector("h1")
    if (player === 5) {
        h1Var.innerText = "PLAYER WINS THE GAME!"

    } else if (computer === 5) {
        h1Var.innerText = "COMPUTER WINS THE GAME!"
    }
}


function resetgame() {
    window.location.reload()

}











