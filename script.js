function getComputerChoice() {
    let choices = { 1: "rock", 2: "paper", 3: "scissor" }
    let randomOption = Math.floor(Math.random() * 3) + 1
    return choices[randomOption]
}



function gameRockPaperScissor(player, computer) {
    //0 si es empate, 1 si ganó el jugador o 2 si ganó la computadora
    let outcomes = { "rock": "scissor", "paper": "rock", "scissor": "paper" }
    if (player === computer) {
        return 0
    } else if (outcomes[player] === computer) {
        return 1
    } else {
        return 2
    }

}

function gameOn() {
    let playerWins = 0
    let computerWins = 0
    for (let i = 1; i < 6; i++) {
        console.log(`Round ${i}`)
        let player = prompt("What's your move?").toLowerCase()
        let computer = getComputerChoice()
        let result = gameRockPaperScissor(player, computer)
        if (result === 1) {
            console.log(`Player wins, ${player} beats ${computer}`)
            playerWins++
        } else if (result === 2) {
            console.log(`Computer wins, ${computer} beats ${player}`)
            computerWins++
        } else if (result === 0) {
            console.log("DRAW!")
        }
    }
    if (playerWins === computerWins) {
        return (`Its a draw! Player has won ${playerWins} times, and Computer ${computerWins} times as well!`)
    } else if (playerWins > computerWins) {
        return (`Player WINS! Player has won ${playerWins} times, and Computer ${computerWins} times!`)
    } else {
        return (`Computer WINS! Player has only won ${playerWins} times, and Computer ${computerWins} times!`)
    }
}

console.log(gameOn())

