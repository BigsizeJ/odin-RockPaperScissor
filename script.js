const btns = document.querySelectorAll('.btn')
const playerPick = document.querySelector('.pick')

function computerPlay(){
    let arr = ['Rock', 'Paper', 'Scissor']
    let n = Math.floor(Math.random() * arr.length);
    return arr[n].toLowerCase();
}


function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase()
    computerSelection = computerSelection.toUpperCase()
    if(playerSelection == 'ROCK' && computerSelection == 'SCISSOR'){
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
        
    }
    else if(playerSelection == 'PAPER' && computerSelection == 'ROCK'){
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
        
    }
    else if(playerSelection == 'SCISSOR' && computerSelection == 'PAPER'){
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
  
    }
    else if(playerSelection == computerSelection){
        console.log(`Draw!`)
    }
    else if(playerSelection != computerSelection){
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
        playerWinRound = false;
        return false
    }
    return true
    
}

function clearImg(element){
    element.setAttribute("class", "")
    element.classList.add("pick")
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    btns.forEach(btn => btn.addEventListener('click', (e) => {
        
        let player = btn.value.toUpperCase()
        
        switch(player){
            case "ROCK":
                clearImg(playerPick)
                playerPick.classList.add("fa-regular", "fa-hand-back-fist")
                break
            case "PAPER":
                clearImg(playerPick)
                playerPick.classList.add("fa-regular", "fa-hand")
                break
            case "SCISSOR":
                clearImg(playerPick)
                playerPick.classList.add("fa-regular", "fa-hand-scissors", "fa-rotate-90")
                break
            default:
                clearImg(playerPick)
                break
        }
      
        console.log(playRound(player, computerPlay()))
    }))
    
    
}



game()

