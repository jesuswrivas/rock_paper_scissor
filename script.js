let gameScore = { "player": 0, "computer": 0, "draw": 0 }


let rockButton = document.querySelector("#rock")
rockButton.addEventListener("click", (e) => {
    /*Se genera la opción de la computadora */
    let computerChoice = getComputerChoice()
    /*Se inicia un juego */
    let result = gameRockPaperScissor(e.target.id, computerChoice)
    /* Update Scorecard */
    printResult(result)


})

/* FUNCTION DEFINITIONS 

/* Returns a random option */
function getComputerChoice() {
    let choices = { 1: "rock", 2: "paper", 3: "scissor" }
    let randomOption = Math.floor(Math.random() * 3) + 1
    return choices[randomOption]
}


/*Plays a round it returns 0 if its a draw, 1 if player won and 0 if computer won */

function gameRockPaperScissor(player, computer) {

    let outcomes = { "rock": "scissor", "paper": "rock", "scissor": "paper" }
    if (player === computer) {
        return 0
    } else if (outcomes[player] === computer) {
        return 1
    } else {
        return 2
    }

}

function printResult(result) {
    if (result === 1) {
        ++gameScore.player
    } else if (result === 2) {
        ++gameScore.computer
    } else if (result === 0) {
        ++gameScore.draw
    }
}







