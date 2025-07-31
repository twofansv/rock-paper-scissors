// MAKE A NUMBER GENERATOR FROM NUMBER 0 TO 3
// BOX FOR NUMBER GENERATED
// IF THE GENERATED NUMBER IS EQUALS TO 1 THEN IT MUST PLAY "ROCK" ELSE IF .. UPTO SCISSORS ..
/// 










//RANDOM NUMBER GENERATOR
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
   






function versusChoice() {

    let compareChoice;

    if (getComputerChoice() == 'Rock' && getHumanChoice() == 'Paper') {
        compareChoice = 'You won! Paper beats Rock!';
    }
    else if (getComputerChoice() == 'Rock' && getHumanChoice() == 'Scissors') {
        compareChoice = 'You lose! Rock beats Scissors!';
    }
    else if (getComputerChoice() == 'Rock' && getHumanChoice() == 'Rock') {
        compareChoice = 'Draw! Both are Rocks!';
    }
    else if (getComputerChoice() == 'Paper' && getHumanChoice() == 'Scissors') {
        compareChoice = 'You won! Scissors beats Paper!';
    }
    else if (getComputerChoice() == 'Paper' && getHumanChoice() == 'Rock') {
        compareChoice = 'You lose! Paper beats Rock!';
    }
    else if (getComputerChoice() == 'Paper' && getHumanChoice() == 'Paper') {
        compareChoice = 'Draw! Both are Paper!';
    }
    else if (getComputerChoice() == 'Scissors' && getHumanChoice() == 'Rock') {
        compareChoice = 'You Won! Rock beats Scissors!';
    }
    else if (getComputerChoice() == 'Scissors' && getHumanChoice() == 'Paper') {
        compareChoice = 'You lose! Scissors beats Paper!';
    }
    else if (getComputerChoice() == 'Scissors' && getHumanChoice() == 'Scissors') {
        compareChoice = 'Draw! Both are Scissors!';
    }
    return compareChoice;
    
}

function getHumanChoice() {
    let humanChoice = prompt('Input number for: 1. Rock 2. Paper 3. Scissors');
    switch(humanChoice){
        case '1':
            return 'Rock'
        case '2':
            return 'Paper'
        case '3':
            return 'Scissors'
    }
}





console.log(versusChoice());


















