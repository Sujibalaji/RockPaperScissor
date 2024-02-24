const rock = 1;
const paper = 2;
const scissor = 3;
function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1 
if(randomNumber === rock)
{
    return 'rock';
}
if(randomNumber === paper)
{
    return 'paper';
}
else{
    return 'scissor';
}
}
const btnRock = document.querySelector('#btnRock');
const btnPaper = document.querySelector('#btnPaper');
const btnScissor = document.querySelector('#btnScissor');
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
function playRound(playerSelection, computerSelection){
    const info = document.querySelector('.info');
    const score = document.querySelector('.score');
    if(playerSelection === "paper" && computerSelection ==="rock" ||
    playerSelection === "rock" && computerSelection==="scissor"||
    playerSelection === "scissor" && computerSelection==="paper")
{
    playerScore++
    info.textContent =`you won! ${playerSelection} beats ${computerSelection}`;
score.textContent =`${playerScore} : ${computerScore}`;
return;
}
if(playerSelection === computerSelection){
    tieScore++
    info.textContent= `Tie - ${playerSelection} against ${computerSelection}`;
    score.textContent =`${playerScore} : ${computerScore}`;
    return;
}
computerScore++
info.textContent = `you Lose! ${computerSelection} beats ${playerSelection}`;
score.textContent =`${playerScore} : ${computerScore}`;
return; 
}
document.querySelector('.computer-info').disabled = true;

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

  button.addEventListener('click', () => {

    if (button.id === 'btnRock'){

      playerSelection = "rock";      
      return game();     
    }

    if (button.id === 'btnPaper'){

      playerSelection = "paper";
      return game();    
    }

    if (button.id === 'btnScissor'){

      playerSelection = "scissor";
      return game();      
    } 
  }) 
})
let computerSelection = getComputerChoice();
function game()
{
    playRound(playerSelection, computerSelection)
    const btnRockCom = document.querySelector('#btnRockCom');
    const btnPaperCom = document.querySelector('#btnPaperCom');
    const btnScissorCom = document.querySelector('#btnScissorCom');
    if(computerSelection === 'rock')
    {
        btnRockCom.classList.add('active');
        btnPaperCom.classList.remove('active');
        btnScissorCom.classList.remove('active');
    }     
    if(computerSelection === 'paper')
    {
        btnRockCom.classList.remove('active');
        btnPaperCom.classList.add('active');
        btnScissorCom.classList.remove('active');
    }
    if(computerSelection === 'scissor')
    {
        btnRockCom.classList.remove('active');
        btnPaperCom.classList.remove('active');
        btnScissorCom.classList.add('active');
    }  
   
    computerSelection = getComputerChoice();
    console.log("PlayerScore: " + playerScore) 
    console.log("ComputerScore: " + computerScore) 
    console.log("TieScore: " + tieScore)
    if(playerScore === 5)
    {
        btnRock.disabled = true;
        btnPaper.disabled= true;
        btnScissor.disabled = true;

        const info = document.querySelector('.info');
        const btnRestart = document.querySelector('#btnRestart');
        info.classList.add('infoActive');
        btnRestart.classList.add('btnRestartActive');
        info. textContent= `Congratulations! You Won this Game with Score ${PlayerScore} : ${computerScore}`
        btnRestart.disabled = false;
        btnRestart.textContent = 'RESTART';
        return;
    }
    if(computerScore === 5)
    {
        btnRock.disabled = true;
        btnPaper.disabled= true;
        btnScissor.disabled = true;

        const info = document.querySelector('.info');
        const btnRestart = document.querySelector('#btnRestart');

info.textContent = `Unfortunately you lost this game with score ${playerScore} : ${computerScore}`
btnRestart.disabled= false;
info.style.color = 'red';
    info.style.fontSize = "25px";
btnRestart.textContent = 'RESTART';
return;
}
}

