// MAKE A NUMBER GENERATOR FROM NUMBER 0 TO 3
// BOX FOR NUMBER GENERATED
// IF THE GENERATED NUMBER IS EQUALS TO 1 THEN IT MUST PLAY "ROCK" ELSE IF .. UPTO SCISSORS ..
///  










//RANDOM NUMBER GENERATOR
function getComputerChoice(){
    let numberChoice = Math.floor(Math.random() * 3);
    return numberChoice;
}

let numberInstance = getComputerChoice();

function forTest(){
    
    
if (numberInstance == 0) {
    console.log("Rock")
}
else if (numberInstance == 1) {
    console.log("Paper")
}
else if (numberInstance == 2) {
    console.log("Scissors")
    
}
return numberInstance;
}
