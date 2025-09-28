let userScore = 0;
let compScore = 0;

let userscore = document.querySelector("#user-score");
let compscore = document.querySelector("#comp-score");


const msg = document.querySelector("#msg");

const choices = document.querySelectorAll(".choice");

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissor"];
    const ranIdx = Math.floor(Math.random()*3);
    return options[ranIdx];
}

const drawGame = () =>{
    console.log("Game was draw");
    msg.innerText = "Game was draw.Try again";
    msg.style.backgroundColor = "#081b31"

}
const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        console.log("you win!");
         msg.innerText = `you win! your ${userChoice} beats ${compChoice} .`; 
         msg.style.backgroundColor = "green";
         userscore.innerText = ++userScore;
    }else {
        console.log("you lose ");
        msg.innerText = `you Lose ! ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor = "red";
        compscore.innerText = ++compScore;
    }
}

const playgame = (userChoice) =>{
    console.log("userchoice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice = ", compChoice);

    if (userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            // paper, scissor
            userWin = compChoice === "paper" ? false : true;
        }else if (userChoice === "paper") {
            //scissor, rock
            userWin = compChoice === "scissor" ? false : true;

        }else {
            //paper, rock
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }

}

 choices.forEach((choice) => {

    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});


