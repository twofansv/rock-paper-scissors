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
   

let instanceOfComputer = getComputerChoice();
let instanceOfHuman = getHumanChoice();

console.log('Computer chose ' + instanceOfComputer + ' and you chose ' + instanceOfHuman + ' so...');



function versusChoice() {

    let compareChoice;

    if (instanceOfComputer == 'Rock' && instanceOfHuman == 'Paper') {
        compareChoice = 'You won! Paper beats Rock!';
    }
    else if (instanceOfComputer == 'Rock' && instanceOfHuman == 'Scissors') {
        compareChoice = 'You lose! Rock beats Scissors!';
    }
    else if (instanceOfComputer == 'Rock' && instanceOfHuman == 'Rock') {
        compareChoice = 'Draw! Both are Rocks!';
    }
    else if (instanceOfComputer == 'Paper' && instanceOfHuman == 'Scissors') {
        compareChoice = 'You won! Scissors beats Paper!';
    }
    else if (instanceOfComputer == 'Paper' && instanceOfHuman == 'Rock') {
        compareChoice = 'You lose! Paper beats Rock!';
    }
    else if (instanceOfComputer == 'Paper' && instanceOfHuman == 'Paper') {
        compareChoice = 'Draw! Both are Paper!';
    }
    else if (instanceOfComputer == 'Scissors' && instanceOfHuman == 'Rock') {
        compareChoice = 'You Won! Rock beats Scissors!';
    }
    else if (instanceOfComputer == 'Scissors' && instanceOfHuman == 'Paper') {
        compareChoice = 'You lose! Scissors beats Paper!';
    }
    else if (instanceOfComputer == 'Scissors' && instanceOfHuman == 'Scissors') {
        compareChoice = 'Draw! Both are Scissors!';
    }
    return compareChoice;
    
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





console.log(versusChoice());


















