var randomChoice = [
    "rock",
    "paper",
    "scissors"
]

var computerChoice = randomChoice[Math.floor(Math.random()*randomChoice.length)]

let choice = prompt("Rock, paper or scissors?")

if (choice == "rock" && computerChoice == "scissors" || choice == "scissors" && computerChoice == "paper" || choice == "paper" && computerChoice == "rock") {
    console.log("Win!");
} else if (choice == computerChoice) {
    console.log("Tie!");
} else {
    console.log("Oh no! YOU LOSE!");
}

