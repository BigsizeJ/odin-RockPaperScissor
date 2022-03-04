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
        return 1
    }
    else if(playerSelection == 'PAPER' && computerSelection == 'ROCK'){
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
        return 1
    }
    else if(playerSelection == 'SCISSOR' && computerSelection == 'PAPER'){
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
        return 1
    }
    else if(playerSelection == computerSelection){
        console.log(`Draw!`)
    }
    else{
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
        return 0
    }
}


function game(){
    let round = 5;
    let playerScore = 0
    let computerScore = 0
    let play
    while(round != 0){
        let player = prompt("Rock Paper or Scissor?").toLowerCase()
        play = playRound(player, computerPlay())
        if(play == 1){
            playerScore++;
        }
        else if(play == 0){
            computerScore++;
        }
        round--;
    }
    console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`)
    if(playerScore > computerScore){
        console.log(`Round Done! Player Win!`)
    }
    else if(playerScore < computerScore){
        console.log(`Round Done! Computer Win!`)
    }
    else{
        console.log(`Round Done! It's a Draw!`)
    }
}

game()

