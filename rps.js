//let computer generate a random sign

function generateChoice (arrayOfOptions=['rock','paper','scissors']){
    return arrayOfOptions[Math.floor(Math.random()*arrayOfOptions.length)]
 }
 
 const computerChoice = generateChoice()
 
 
 //check user input
 
 const play = () => {
 
     const text = document.querySelector('h2')
 
     const rock = document.getElementById('rock')
     rock.addEventListener('click',()=>{
         if(computerChoice === 'rock') text.textContent = `This is a draw, opponent chose ${computerChoice}`
         
         if(computerChoice === 'paper') text.textContent =`oops you lost, opponent chose ${computerChoice}`
         if(computerChoice === 'scissors') text.textContent = `Where you going with scissors my friend, opponent chose ${computerChoice}`
     })
 
     const scissors = document.getElementById('scissors')
     scissors.addEventListener('click',()=>{
         if(computerChoice === 'rock') text.textContent = `Oh my word, you have just been hammered opponent chose ${computerChoice}`
 
         if(computerChoice === 'paper') text.textContent = `What a slice? opponent chose ${computerChoice}`
 
         if(computerChoice === 'scissors') text.textContent = `whats the fun opponent chose ${computerChoice}`
     })  
 
     const paper = document.getElementById('paper')
     paper.addEventListener('click',()=>{
         if(computerChoice === 'rock') text.textContent = `Why did you blind the computer, opponent chose ${computerChoice}`
         if(computerChoice === 'paper') text.textContent = `Seems we are even, opponent chose ${computerChoice}`
         if(computerChoice === 'scissors') text.textContent = `Hope that didn't get you down, opponent chose ${computerChoice}`
     })
 }
 
 
  
 play()