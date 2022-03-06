console.log("hello world!")

// function randomly returns either scissors, paper, or rock. 
function itemSelector(){
    let compWeapon = "item"
    ranNum = Math.ceil(Math.random()*3);
    console.log(ranNum)
    if (ranNum === 1) {
        return "Scissors";
    }

    else if (ranNum === 2) {
        return "Paper";
    }

    else {
        return "Rock"
    }
}



console.log(itemSelector())