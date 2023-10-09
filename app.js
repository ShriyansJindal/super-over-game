let strike = document.getElementById("strike")
let reset = document.getElementById("reset")

let scoreInd = document.getElementById("score-ind")
let scorePak = document.getElementById("score-pak")

let wicketsInd = document.getElementById("wickets-ind");
let wicketsPak = document.getElementById("wickets-pak");

let team1Score = 0;
let team2Score = 0;
let team1Wicket = 0;
let team2Wicket = 0;

let team =1;
let Team1BallsFaced = 0;
let Team2BallsFaced = 0;

let possibleOutcomes = [0,1,2,3,4,6,'W'];

let gameOverAudio = new Audio("http://bit.ly/so-crowd-cheer")
let strikeAudio = new Audio("http://bit.ly/so-ball-hit")

function gameOver (){
    gameOverAudio.play();
    switch (true) {
        case team1Score > team2Score:
            alert("Team INDIA Wins");
            break;
        case team1Score < team2Score:
            alert("Team Pak Wins");
            break;
        default:
            alert("It is another SuperOver");
    }
                
    // if(team1Score> team2Score){
    //     alert("Team INDIA Wins")
    // }
    // else if(team1Score< team2Score){
    //     alert("Team Pak Wins");
    // }
    // else{
    //     alert("It is another SuperOver");
    // }
}
function updateScores (){
    scoreInd.textContent = team1Score
    scorePak.textContent = team2Score

    wicketsInd.textContent = team1Wicket
    wicketsPak.textContent = team2Wicket

}
reset.onclick = ()=>{
    window.location.reload();

}

strike.addEventListener("click",()=>{
    strikeAudio.pause()
    strikeAudio.currentTime = 0
    strikeAudio.play()

    let randomnum = possibleOutcomes[Math.floor(Math.random()*possibleOutcomes.length)]
    console.log(randomnum)

    if (team == 2){
        //inc count
        //update the score in circle
        Team2BallsFaced++
        document.querySelector(`#pak :nth-child(${Team2BallsFaced})`).textContent = randomnum
        
        if (randomnum == "W"){
            team2Wicket++
            updateScores()

        }else{
            team2Score+=randomnum
            updateScores()
        }
        if ((team2Wicket == 2) || (Team2BallsFaced == 6) || (team2Score > team1Score)){
            team = 3
            gameOver()
        }
    }
    else if(team == 1){
        Team1BallsFaced++; 
        document.querySelector(`#ind :nth-child(${Team1BallsFaced})`).textContent = randomnum

        if (randomnum == "W"){
            team1Wicket++
            
            
        }else{
            team1Score+=randomnum
            console.log(team1Score)
            
        }
        updateScores()
        if ((team1Wicket == 2) || (Team1BallsFaced == 6)){
            team = 2
        }
        

    }



})
