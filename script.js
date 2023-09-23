const tossButton = document.getElementById("toss-button");
const tossResultDisplay = document.getElementById("toss-result");
const userInput = document.getElementById("user-input");
const batorBowlSelection = document.getElementById("bat-or-bowl-selection");
let userScore = 0;
let computerScore = 0;
let wickets = 0;

tossButton.addEventListener("click", function () {
    let randomSelection =  Math.random();
    let computerToss;

    if(randomSelection < 0.5){
        computerToss = "heads";
    }else{
        computerToss = "tails";
    }
    const userToss = userInput.value.trim();
    let tossResult;

    if(userToss.toLowerCase() === computerToss.toLowerCase()){
        tossResult = "you win";
        batorBowlSelection.style.display = "block";
       
    }else{
        tossResult = "you loss";
        batorBowlSelection.style.display = "none";
        const computerChoice = randomSelection < 0.5 ? "bat" : "bowl";
    }


    tossResultDisplay.textContent = "Toss result:"+ tossResult;
});

batorBowlSelection.addEventListener("change", function(){
    const userChoice = batorBowlSelection.value;
});

