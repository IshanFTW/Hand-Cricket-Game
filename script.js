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
            startGame("bowl");
        }else if(computerChoice === "bowl"){
            tossDecision.innerText = "Computer have won the Toss and elected to Bowl first";
            startGame("bat");
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
    startGame("bat");  
});

bowlButton.addEventListener("click", function () {
    document.getElementById("bat-or-bowl-selection").style.display = "none";
    tossDecision.innerText = "You have won the Toss and elected to Bowl first";
    startGame("bowl");
})

function userBatting() {
    document.getElementById("user-inning").style.display = "block";
    var userScore = 0;
    var userOut = false;
    var shotButtons = document.querySelectorAll('.shot-button');
    var userScoreDisplay = document.getElementById('user-score');

    shotButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            if (!userOut) {
                var userShot = parseInt(button.getAttribute('data-value'));
                var computerShot = generateComputerShot();

                console.log("Your shot:", userShot);
                console.log("Computer's shot:", computerShot);

                if (userShot === computerShot) {
                    console.log("You're out!");
                    userOut = true;
                    return userScore;
                } else {
                    userScore += userShot;
                    userScoreDisplay.innerText = userScore;
                }
            }
        });
    });
    return userScore;
}


function generateComputerShot() {
    // Generate a random decimal number between 0 (inclusive) and 1 (exclusive)
    const randomDecimal = Math.random();
    
    // Map the random decimal to a shot between 1 and 6 (inclusive)
    const minShot = 1;
    const maxShot = 6;
    const computerShot = Math.floor(randomDecimal * (maxShot - minShot + 1)) + minShot;
    
    return computerShot;
}

function startGame(choice){
    if(choice === "bat"){
        
       console.log(userBatting());
    }
}