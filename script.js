const text = document.querySelector(['h1'])
const btn_rock = document.querySelector(".rock")
const btn_paper = document.querySelector(".paper")
const btn_scissor = document.querySelector(".scissor")


class game{
    
    set(string){
        this.string = string;          
    }

    get(){
        console.log(this.string)
    }

    compare(){

        let cpu = ['ROCK', 'PAPER', 'SCISSOR']
        let length = cpu.length;
        let n = Math.floor(Math.random() * length);
        let cpu_random = cpu[n]        

        if(this.string == 'ROCK' && cpu_random == 'SCISSOR'){
            console.log(`You choose ${this.string} and CPU choose ${cpu_random}`)
            console.log("You Win!")
            score++;
        }
        else if(this.string == 'PAPER' && cpu_random == 'ROCK'){
            console.log(`You choose ${this.string} and CPU choose ${cpu_random}`)
            console.log("You Win!")
            score++;
        }
        else if(this.string == 'SCISSOR' && cpu_random == 'PAPER'){
            console.log(`You choose ${this.string} and CPU choose ${cpu_random}`)
            console.log("You Win!")
            score++;
        }
        else if(this.string == cpu_random){
            console.log(`You choose ${this.string} and CPU choose ${cpu_random}`)
            console.log("Draw!")
        }
        else{
            console.log(`You choose ${this.string} and CPU choose ${cpu_random}`)
            console.log("You Lose!")
            cpu_score++;
        }
        console.log(`Score Table
            User: ${score}
            CPU:  ${cpu_score}`)

    }
}





let userChoice = "";

let cpuChoice = 0;

play = new game()


btn_rock.addEventListener('click', () => {

    userChoice = "ROCK";
    play.set(userChoice)
    play.compare()
})

btn_paper.addEventListener('click', () =>{
    userChoice = "PAPER"
    play.set(userChoice)
    play.compare()
})

btn_scissor.addEventListener('click', () => {
    userChoice = "SCISSOR"
    play.set(userChoice)
    play.compare()
})


