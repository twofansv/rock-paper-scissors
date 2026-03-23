// MAKE A NUMBER GENERATOR FROM NUMBER 0 TO 3
// BOX FOR NUMBER GENERATED
// IF THE GENERATED NUMBER IS EQUALS TO 1 THEN IT MUST PLAY "ROCK" ELSE IF .. UPTO SCISSORS ..
//
// RANDOM NUMBER GENERATOR


const btns = document.querySelectorAll('.btn');

const rock = document.querySelector('#Rock');
const paper = document.querySelector('#Paper');
const scissors = document.querySelector('#Scissors');

const score = document.querySelector('.score');
const scoreInfo = document.querySelector('.scoreInfo');
const rpsCompare = document.querySelector('.rpsCompare');
const winLose = document.querySelector('.win-lose');
   



rock.addEventListener('click', () => {
    getHumanChoice = 'Rock'

    playGame();
});

paper.addEventListener('click', () => {
    getHumanChoice = 'Paper'

    playGame();
});

scissors.addEventListener('click', () => {
    getHumanChoice = 'Scissors'

    playGame();
});





// btns.forEach(button => {
//     button.addEventListener('click', () => {
//         getHumanChoice = button.id;
    
//         playGame();
//     })
// });




function getHumanChoice (choice) {
    const humanChoice = choice;
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

  
function playGame(){
    


    let gameComputer = getComputerChoice();
    let gameHuman = getHumanChoice;
   

    //IF win or NOT:
    let result = versusChoice(gameComputer, gameHuman);
    rpsCompare.textContent = 'Computer chose ' + gameComputer + ' and you chose ' + gameHuman + ' so...';
    scoreInfo.textContent = result;
    //


   

  



    //Scoring System:
    if (result.includes(`won`)) {
        humanScore++;
    }
    else if (result.includes('lose')) {
        computerScore++;
    }
    //
    score.textContent = `Your Score: ${humanScore} and Bot Score: ${computerScore}`
    //


    //IF player or computer reaches 5 score:
    if (humanScore == 5) {
        winLose.textContent = 'Game over!';
        winLose.textContent = `Final Score -> You: ${humanScore} ` + `Bot: ${computerScore}`;

        humanScore = 0;
        computerScore = 0;

       
    }
    else if (computerScore == 5) {
        winLose.textContent = 'Game over!';
        winLose.textContent = `Final Score -> You: ${humanScore} ` + `Bot: ${computerScore}`;

        humanScore = 0;
        computerScore = 0;

        
    }
    //

    
}




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


//console.log(versusChoice(instanceOfComputer, instanceOfHuman));
//playGame();
