let playerResult=document.querySelector(".playerResult");
let computerScore= document.querySelector(".ComputerResult");
let newGameB= document.querySelector('.buttons');
const winTitle = document.querySelector('.winner');
const pcHand= document.getElementById('pic');

const score={
    pcScore:0,
    playerScore:0
}
function resetScoreAndUI(){
    
    score.pcScore=0;
    score.playerScore=0;
    playerResult.innerHTML=score.playerScore
    computerScore.innerHTML=score.pcScore
    
    winTitle.style.display="none"
  
   
}

function renderScore(){
    playerResult.innerHTML=score.playerScore
    computerScore.innerHTML=score.pcScore
 }

function newGame(){
    
    newGameB.style.opacity= 1;
    newGameB.style.pointerEvents = "auto";
   //reset score
   resetScoreAndUI()

}
function pcChoise(){
    const options=['paper' , 'rock' , 'scissor']
    let rndchoise = Math.floor(Math.random()*3)
    let computerChoise=options[rndchoise]
  return computerChoise
}

function selectSign(e){
  //pc choise
  
  pcHand.style.opacity= 1
  let computerChoise = pcChoise()
//my choise
   let myChoise =e.toElement.alt;
   let result;
   switch(true){
        case computerChoise=== myChoise:
           result = 'draw'
           break; 
        case myChoise === 'paper' && computerChoise==='rock':
        case myChoise === 'rock' && computerChoise==='scissor':
        case myChoise === 'scissor' && computerChoise==='paper':  
            score.playerScore+=1  
            result = 'I win';
            break;  
        case myChoise === 'paper' && computerChoise==='scissor':
        case myChoise === 'rock' && computerChoise==='paper':
        case myChoise === 'scissor' && computerChoise==='rock':
            score.pcScore+=1
            result= "PC win"  
            break; 
            }
        
        //animations
       pcAnime(computerChoise)
       //render score
       renderScore()
       //chek for the winner
       console.log(score)
       if(score.pcScore >= 3 || score.playerScore >=3){
           winner()
          
       }
 }

 //create animations

 function pcAnime(computerChoise){
    let selector = document.querySelector('.fadeIn')
    selector.setAttribute('src',`${computerChoise}.png`)    

 
   selector.classList.add("fadeInResult")
    
 }

 
 function winner(){
   
   newGameB.style.pointerEvents = "none";
   pcHand.style.opacity= 0
   winTitle.style.display="block"

   if(score.pcScore === 3 ){
    winTitle.innerHTML='Computer Win'
    winTitle.style.color="red"
   } else if(score.playerScore=== 3){
    winTitle.innerHTML='You win'
    winTitle.style.color="red"
    
   }
 }
// select all signs 
 const selector = document.querySelectorAll('.btn');
 selector.forEach(el=> el.addEventListener("click", selectSign))

const newGameBtn=document.querySelector('.newGameBtn').addEventListener('click', newGame)
