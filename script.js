// MAKE A NUMBER GENERATOR FROM NUMBER 0 TO 3
// BOX FOR NUMBER GENERATED
// IF THE GENERATED NUMBER IS EQUALS TO 1 THEN IT MUST PLAY "ROCK" ELSE IF .. UPTO SCISSORS ..
/// 










//RANDOM NUMBER GENERATOR
function getComputerChoice(){
    let numberChoice = Math.floor(Math.random() * 3);

if (numberChoice == 0) {
    console.log("Rock")
}
else if (numberChoice == 1) {
    console.log("Paper")
}
else if (numberChoice == 2) {
    console.log("Scissors")
    
}
return numberChoice;
}
   




getComputerChoice();
getHumanChoice();
versusChoice();


function versusChoice() {
    if (getComputerChoice == 'Rock' && getHumanChoice == 'Paper') {
        console.log('You Won!');
    }
    else if (getComputerChoice == 'Rock' && getHumanChoice == 'Scissors') {
        console.log('You Lose!')
    }
    else if (getComputerChoice == 'Rock' && getHumanChoice == 'Rock') {
        console.log('Draw!')
    }
}

function getHumanChoice() {
    let humanChoice = prompt('Input number for: 1. Rock 2. Paper 3. Scissors');
    

    if (humanChoice == 1) {
        console.log('Rock');
    }
    else if (humanChoice == 2) {
        console.log('Paper')
    }
    else if (humanChoice == 3) {
        console.log('Scissors')
    }
    return humanChoice;
    
}
    
//ROCK PAPER SCISSORS AS STRING GENERATION  























