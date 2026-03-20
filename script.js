// MAKE A NUMBER GENERATOR FROM NUMBER 0 TO 3
// BOX FOR NUMBER GENERATED
// IF THE GENERATED NUMBER IS EQUALS TO 1 THEN IT MUST PLAY "ROCK" ELSE IF .. UPTO SCISSORS ..
//
// RANDOM NUMBER GENERATOR





function getComputerChoice(){
    let numberChoice = Math.floor(Math.random() * 3);
switch(numberChoice){
    case 0:
        return 'Rock'
    case 1:
        return 'Paper'
    case 2:
        return 'Scissors'
    }
}

function playGame(){
    
    let humanScore = 0;
    let computerScore = 0;

    console.log('Game over!')
    console.log(`Final Score -> You: ${humanScore} ` + `Bot: ${computerScore}`)
    
}



function versusChoice(instanceOfComputer, instanceOfHuman) {

    const winMap = {
        Rock: 'Scissors',
        Paper: 'Rock',
        Scissors: 'Paper'
    }

    if (instanceOfComputer === instanceOfHuman){
        return (`Draw! ${instanceOfComputer} and ${instanceOfHuman} = Tie!`);
    }
    else if (winMap[instanceOfHuman] === instanceOfComputer){
        return (`You won! ${instanceOfHuman} beats ${instanceOfComputer}!`);
    }
    else if (winMap[instanceOfComputer] === instanceOfHuman){
        return (`You lose! ${instanceOfComputer} beats ${instanceOfHuman}!`);
    }

}

function getHumanChoice() {
    let humanChoice = prompt('Rock? Paper? or Scissors?');
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice == 'rock')  {
       return 'Rock'
    }
    else if (humanChoice == 'paper'){
        return 'Paper'
    }
    else if (humanChoice == 'scissors'){
        return 'Scissors'
    }
}

//console.log(versusChoice(instanceOfComputer, instanceOfHuman));
playGame();
