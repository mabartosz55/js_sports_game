let teamoneShootButton = document.querySelector("#teamone-shoot-button");
let teamtTWOShootButton = document.querySelector("#teamtwo-shoot-button");
let teamOneShots = document.querySelector("#teamone-numshots")
let teamTWOShots = document.querySelector("#teamtwo-numshots")
let teamOneGoals = document.querySelector("#teamone-numgoals")
let teamTWOGoals = document.querySelector("#teamtwo-numgoals")
let resetGame = document.querySelector("#reset-button")
let resetNumber = document.querySelector("#num-resets")

teamoneShootButton.addEventListener("click", function () {
    teamOneShots.innerHTML = Number(teamOneShots.innerHTML) + 1;
    let randomNumberVar = Math.random()
    console.log(randomNumberVar)
    if (randomNumberVar > 0.5) {
        teamOneGoals.innerHTML = Number(teamOneGoals.innerHTML) + 1;
    } else {
    }

})

teamtTWOShootButton.addEventListener("click", function () {
    teamTWOShots.innerHTML = Number(teamTWOShots.innerHTML) + 1;
    let randomNumberVar = Math.random()
    console.log(randomNumberVar)
    if (randomNumberVar > 0.5) {
        teamTWOGoals.innerHTML = Number(teamTWOGoals.innerHTML) + 1;
    } else {
    }

})

resetGame.addEventListener("click", function () {
    resetNumber.innerHTML = Number(resetNumber.innerHTML) + 1;
    teamOneShots.innerHTML = Number(0);
    teamTWOShots.innerHTML = Number(0);
    teamOneGoals.innerHTML = Number(0);
    teamTWOGoals.innerHTML = Number(0);

})