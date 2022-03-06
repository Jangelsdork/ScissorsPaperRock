console.log("hello world!")

// itemSelector() randomly returns either scissors, paper, or rock. 
function itemSelector(){
    let compWeapon = "item"
    ranNum = Math.ceil(Math.random()*3);
    console.log(ranNum)
    if (ranNum === 1) {
        return 0;
    }

    else if (ranNum === 2) {
        return 1;
    }

    else {
        return 2;
    }
}

// humanSelector() takes the input from a human 
let humanChoice = ""
function humanInput(){
    let humanChoice = prompt("Choose either scissors, paper, or rock").toLowerCase().replaceAll(' ','');
    if (humanChoice == "scissors"){
        return 0
    }
    else if (humanChoice == "paper"){
        return 1
    }
    else if (humanChoice == "rock"){
        return 2
    }
    else {
        humanInput()
    }
    
}

// playRound() takes the input from human & computer, and declares a winner 
function playRound() {
    let result = "";
    let playerSelect = humanInput();
    let computerSelect =  itemSelector();
    if (playerSelect === computerSelect) {
        console.log("its a tie!")
    }
    else if (playerSelect===0 && computerSelect===1){
        result = "human"
        console.log("Scissors cut paper, Human wins!");
        
        
    }
    else if (playerSelect===0 && computerSelect === 2){
        result = "computer"
        console.log("Rock breaks Scissors, Computer wins!");
        
        
    }
    else if (playerSelect === 1 && computerSelect === 0){
        result = "computer"
        console.log("Scissors cut paper, Computer wins!");
        
        
    }
    else if (playerSelect === 1 && computerSelect === 2){
        result = "human"
        console.log("Paper wraps rock, Human wins!");
        
        
    }
    else if (playerSelect === 2 && computerSelect === 0){
        result = "human"
        console.log("Rock breaks Scissors, Human wins!");
        
       

    }
    else if (playerSelect === 2 && computerSelect === 1){
        result = "computer"
        console.log("Paper wraps rock, computer wins!");
        
        
    }
    else {
        console.log("we seem to be having technical difficulties");
    }
    console.log("result = " + result)
    return result;
}


// game() runs playround 5 times, declares final winner
function game(){
    let humanScore = 0 
    let computerScore = 0
    for (let i = 0; i < 5; i++ ){
        console.log(humanScore + " = running count Human")
        console.log(computerScore + " = running count computer")
        let result = playRound()
        console.log(result + "in game")
        if (result === "human") {
            humanScore = humanScore+1;
        }
        else if (result = "computer"){
            computerScore++ 
        } 
        else {
            playRound()
        }
        
    }   
    
    return humanScore;
    
}
    if (game() >= 3){
        console.log("Congratulations, Human"); 
    }
    else {
        console.log("I have defeated you!")
    }




/* function playround(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        return "its a tie!"
    }
    else if ()

}

*/

// humanSelector() takes the input from a human 
/*function humanSelector() {
    let humanChoice = "x"
    while (humanChoice != "scissors") {
        let humanChoice = prompt("Choose either scissors, paper, or rock"); //.toLowerCase().replaceAll(' ','');
        console.log(humanChoice)
    }
    return humanChoice
}

console.log(humanSelector())

console.log(itemSelector())
*/