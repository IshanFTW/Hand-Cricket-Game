const tossButton = document.getElementById("toss-button");
const tossResultDisplay = document.getElementById("toss-result");
const userInput = document.getElementById("user-input");
const batorBowlSelection = document.getElementById("bat-or-bowl-selection");
const tossDecision = document.getElementById("toss-decision");

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
        let computerChoice;
        let computerRandom =  Math.random();
        

        if(computerRandom < 0.5){
            computerChoice = "bat";
        }else{
            computerChoice = "bowl";
        }
        
        if(computerChoice === "bat"){
            tossDecision.innerText = "Computer have won the Toss and elected to Bat first";
        }else if(computerChoice === "bowl"){
            tossDecision.innerText = "Computer have won the Toss and elected to Bowl first";
        }
    }
    tossResultDisplay.textContent = "Toss result:"+ tossResult;
});

// batorBowlSelection.addEventListener("change", function(){
//     const userChoice = batorBowlSelection.value;
// });

const batButton = document.getElementById("bat-button");
const bowlButton = document.getElementById("bowl-button");

batButton.addEventListener("click", function(){
    document.getElementById("bat-or-bowl-selection").style.display = "none";

    tossDecision.innerText = "You have won the Toss and elected to Bat first";
    console.log("bat");
    startGame("bat");
    
});

bowlButton.addEventListener("click", function () {
    document.getElementById("bat-or-bowl-selection").style.display = "none";
    tossDecision.innerText = "You have won the Toss and elected to Bowl first";
    console.log("bowl");
    startGame("bowl");
  
})