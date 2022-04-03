let humanScore = 0 
let computerScore = 0
let cumulativeComp = 0 
let cumulativeHuman = 0 
console.log("hello world!")

// // add blank div to DOM, where the score will be inserted 
targetHuman = document.querySelector('#targetHuman')
targetHuman.textContent = "Humans Score: 0"

targetComputer = document.querySelector('#targetComputer')
targetComputer.textContent = "Computer's Score: 0"

messageDiv = document.querySelector('#messageDiv')
messageDiv.textContent = "test"

tiedRound = document.querySelector('#tie')



// itemSelector() randomly returns either scissors, paper, or rock. 
function itemSelector(){
    let compWeapon = "item"
    ranNum = Math.ceil(Math.random()*3);
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


// roundSorter takes the input from the button, stores it as a variable. 
// It runs a counter that calls playRound(), that keeps track of the scores
// the scores are pushed to the DOM
// once either side reaches 3, a winner is declared

function roundSorter(x){
    let buttonInput = x
    if (x === 0 || 1 || 2){
        tiedRound.textContent = ""
        let result = playRound (x)
        let winner = result[0]
        let humanHand = result[1]
        let computerHand = result[2]
        let message = result[3]
        if  (winner === "human") {
            cumulativeHuman ++
            targetHuman.textContent = ("Human's score = " + cumulativeHuman)
            messageDiv.textContent = (message)
            if (cumulativeHuman === 3){
                console.log("human wins!")
                tiedRound.textContent = "Defeated by a human... Ouch!"
                cumulativeHuman = 0
                cumulativeComp = 0
                targetComputer.textContent = "Computer's Score: 0"
                targetHuman.textContent = "Humans Score: 0"
            }
        }
        else if (winner === "t"){
            messageDiv.textContent = ("!!Tie alert!! It's a TIEEEEE!!!!")
            }
        else if (winner === "computer") {
            cumulativeComp ++ 
            targetComputer.textContent = ("Computer's score = " + cumulativeComp)
            messageDiv.textContent = (message)
            if (cumulativeComp === 3) {
                tiedRound.textContent = "HA HA HA, Human I have defeated you!"
                cumulativeHuman = 0
                cumulativeComp = 0
                targetComputer.textContent = "Computer's Score: 0"
                targetHuman.textContent = "Humans Score: 0"
            }
        
        }
    }
}




// humanSelector() takes the input from a human 

// function humanInput(x){
//     console.log(x + "+")
//     let humanChoice = x
//     if (humanChoice == "scissors"){
//         return 0
//     }
//     else if (humanChoice == "paper"){
//         return 1
//     }
//     else if (humanChoice == "rock"){
//         return 2
//     }
    
// }

// playRound() takes the input from human & computer, and declares a winner 

function playRound(x) {
    let result = ''
    let playerSelect = x;
    let computerSelect =  itemSelector();
    if (playerSelect === computerSelect) {
        console.log("its a tie!")
        return "tie"
        
    }
    else if (playerSelect===0 && computerSelect===1){
        return ["human", 0, 1, "Scissors cut paper, Human wins!"]
        console.log("Scissors cut paper, Human wins!");
        humanScore ++; 
        
    }
    else if (playerSelect===0 && computerSelect === 2){
        return ["computer", 0, 2, "Rock breaks Scissors, Computer wins!"]
        console.log("Rock breaks Scissors, Computer wins!");
        computerScore ++;
        
    }
    else if (playerSelect === 1 && computerSelect === 0){
        return ["computer", 1, 0, "Scissors cut paper, Computer wins!"]
        console.log("Scissors cut paper, Computer wins!");
        computerScore ++;
        
    }
    else if (playerSelect === 1 && computerSelect === 2){
        return ["human", 1, 2, "Paper wraps rock, Human wins!"]
        console.log("Paper wraps rock, Human wins!");
        humanScore ++;
        
        
    }
    else if (playerSelect === 2 && computerSelect === 0){
        return ["human", 2, 0, "Rock breaks Scissors, Human wins!"]
        console.log("Rock breaks Scissors, Human wins!");
        humanScore ++;
        
       

    }
    else if (playerSelect === 2 && computerSelect === 1){
        return ["computer", 2, 1, "Paper wraps rock, computer wins!"]
        console.log("Paper wraps rock, computer wins!");
        computerScore ++;
        
        
    }
    else {
        console.log("we seem to be having technical difficulties");
        console.log("player = " +playerSelect)
        console.log("Computer = " +computerSelect)
    }
    
    // console.log("round result =" + result)
    

     }

    



// const selected = document.querySelectorAll("button");
// selected.forEach(button => button.addEventListener('click', ))



const scissors = document.querySelector('.Sc');
scissors.addEventListener('click', () => roundSorter(0))


const paper = document.querySelector('.Pa');
paper.addEventListener('click', () => roundSorter(1))


const rock = document.querySelector('.Ro');
rock.addEventListener('click', () => roundSorter(2))



    // const butClick = document.querySelector('button');
    // butClick.addEventListener('click', function(e) {
    //     console.log(e)
    // })


    // window.addEventListener('click', function (e) {
    //     const buttAction = document.querySelectorAll('button')
    //     console.log(buttAction)
    //   })



// // game() runs playround 5 times, declares final winner
// function game(){
//     let humanScore = 0 
//     let computerScore = 0
//     for (let i = 0; i < 5; i++ ){
//         console.log(humanScore + " = running count Human")
//         console.log(computerScore + " = running count computer")
//         let result = playRound()
//         console.log(result + "in game")
//         if (result === "human") {
//             humanScore = humanScore+1;
//         }
//         else if (result = "computer"){
//             computerScore++ 
//         } 
    
//     }   
    
//     return humanScore;
    
// }


//     function tally(){
//     if (game() >= 3){
//         console.log("Congratulations, Human"); 
//     }
//     else {
//         console.log("I have defeated you!")
//     }
//     }


