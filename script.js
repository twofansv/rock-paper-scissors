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
   






versusChoice();


function versusChoice() {

    if (getComputerChoice() == 'Rock' && getHumanChoice() == 'Paper') {
        console.log('You Won! Paper beats Rock!');
    }
    else if (getComputerChoice() == 'Rock' && getHumanChoice() == 'Scissors') {
        console.log('You Lose! Rock beats Scissors!')
    }
    else if (getComputerChoice() == 'Rock' && getHumanChoice() == 'Rock') {
        console.log('Draw! Both is Rock!')
    }
    else if (getComputerChoice() == 'Paper' && getHumanChoice() == 'Scissors') {
        console.log('You Won! Scissors beats Paper!')
    }
    else if (getComputerChoice() == 'Paper' && getHumanChoice() == 'Rock') {
        console.log('You Lose! Paper beats rock!')
    }
    else if (getComputerChoice() == 'Paper' && getHumanChoice() == 'Paper') {
        console.log('Draw! Both is Paper!')
    }
    else if (getComputerChoice() == 'Scissors' && getHumanChoice() == 'Rock') {
        console.log('You Won! Rock beats Scissors!')
    }
    else if (getComputerChoice() == 'Scissors' && getHumanChoice() == 'Paper') {
        console.log('You Lose! Scissors beats Paper!')
    }
    else if (getComputerChoice() == 'Scissors' && getHumanChoice() == 'Scissors') {
        console.log('Draw! Both is Scissors!')
    }
    
}

function getHumanChoice() {
    let humanChoice = prompt('Input number for: 1. Rock 2. Paper 3. Scissors');
    switch(humanChoice){
        case 1:
            return 'Rock'
        case 2:
            return 'Paper'
        case 3:
            return 'Scissors'
    }
}
























