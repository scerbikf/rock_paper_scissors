const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const winnerText = document.querySelector("#winnerText");
const buttons = document.querySelectorAll(".buttons");

let playerName = window.prompt("Enter your name: ");
let player;
let computer;

if(playerName == ""){
    playerName = "Player"
}

buttons.forEach(button => button.addEventListener("click", () => {
    const input = button.textContent;
    
    switch(input){
        case "Rock":
            player = "✊";
            break;
        case "Paper":
            player = "✋";
            break;
        case "Scissors":
            player = "✌️";
            break;
    }

    computerTurn();
    playerText.textContent = `${playerName}: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    winnerText.textContent = results();
    playerText.style.marginTop = "0px"
}));

function computerTurn(){
    const randomNum = Math.floor(Math.random() * 3) + 1;

    switch(randomNum){
        case 1:
            computer = "✊";
            break;
        case 2:
            computer = "✋";
            break;
        case 3:
            computer = "✌️";
            break;
    }

}

function results(){
    if(computer == player){
        return "Draw!";
    }
    else if(computer == "✊"){
        return (player == "✋") ? `${playerName} won!` : `${playerName} lost!`;
    }
    else if(computer == "✋"){
        return (player == "✌️") ? `${playerName} won!` : `${playerName} lost!`;
    }
    else if(computer == "✌️"){
        return (player == "✊") ? `${playerName} won!` : `${playerName} lost!`;
    }
}

