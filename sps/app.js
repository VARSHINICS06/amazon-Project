let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice =() =>{
    const options =["rock","paper","scissor"];
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
}
const drawGame =()=>{
    console.log("game was draw.")
    msg.innerText="game was draw.play agin"
    msg.style.backgroundColor="#081b31"
};
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
       
        msg.innerText=`you Win! your ${userChoice} bets ${compChoice}`;
        msg.style.backgroundColor="green"
    }else{
        compScore++;
        compScorePara.innerText=compScore;
       
        msg.innerText=`you lose! .comp${compChoice} bets ${userChoice}`;
        msg.style.backgroundColor="red"
    }
}

const playGame = (userChoice) =>{
    console.log("user choice=",userChoice)
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = ",compChoice)
    if(userChoice===compChoice){
        //Draw game
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissor,paper
           userWin= compChoice==="paper"? false :true;
        }else if(userChoice==="paper"){
            //rock,scissor
            userWin=compChoice==="scissor"? false: true;
        }else{
            userWin=compChoice==="rock"? false: true;

        }
        showWinner(userWin,userChoice,compChoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    }) 
});