function getComputerChoice() {
    let choices = { 1: "rock", 2: "paper", 3: "scissor" }
    let randomOption = Math.floor(Math.random() * 3) + 1
    return choices[randomOption]
}