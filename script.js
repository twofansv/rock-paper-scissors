// MAKE A NUMBER GENERATOR FROM NUMBER 0 TO 3
// BOX FOR NUMBER GENERATED
// IF THE GENERATED NUMBER IS EQUALS TO 1 THEN IT MUST PLAY "ROCK" ELSE IF .. UPTO SCISSORS ..
//
// RANDOM NUMBER GENERATOR


const btns = document.querySelectorAll('.btn');

// const rock = document.querySelector('#Rock');
// const paper = document.querySelector('#Paper');
// const scissors = document.querySelector('#Scissors');


// rock.addEventListener('click', () => getHumanChoice = 'rock');
// paper.addEventListener('click', () => getHumanChoice = 'paper');
// scissors.addEventListener('click', () => getHumanChoice = 'scissors');


btns.forEach(button => {
    button.addEventListener('click', () => {
        getHumanChoice = button.id;
    
        playGame();
    })
});

function getHumanChoice (choice) {
    const humanChoice = choice;
    return humanChoice;
}


function playGame(){
    
    let humanScore = 0;
    let computerScore = 0;

  
    let gameComputer = getComputerChoice();
    let gameHuman = getHumanChoice;
   
    let result = versusChoice(gameComputer, gameHuman);
    console.log('Computer chose ' + gameComputer + ' and you chose ' + gameHuman + ' so...');
    console.log(result);

    if (result.includes(`won`)) {
        humanScore++;
    }
    else if (result.includes('lose')) {
        computerScore++;
    }
    console.log(`Your Score: ${humanScore} and Bot Score: ${computerScore}`)
    
    //console.log('Game over!')
    console.log(`Final Score -> You: ${humanScore} ` + `Bot: ${computerScore}`)
  
    
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
