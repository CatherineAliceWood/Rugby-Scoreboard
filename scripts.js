/*1. create variable for each score
2. increment score by correct amount for each button
3. make whoever's score is higher green and the other score red
4. Add new game button to reset scores
*/
let scoreTeam1Text = document.querySelector("#scoreTeam1");
let scoreTeam2Text = document.querySelector("#scoreTeam2");
let scoreTeam1 = 0;
let scoreTeam2 = 0;
document.querySelector("#plus2Team1").addEventListener("click", function () {
    scoreTeam1Text.innerText = scoreTeam1 += 2;
    whosWinning();
})
document.querySelector("#plus3Team1").addEventListener("click", function () {
    scoreTeam1Text.innerText = scoreTeam1 += 3;
    whosWinning();
})
document.querySelector("#plus5Team1").addEventListener("click", function () {
    scoreTeam1Text.innerText = scoreTeam1 += 5;
    whosWinning();
})
document.querySelector("#plus2Team2").addEventListener("click", function () {
    scoreTeam2Text.innerText = scoreTeam2 += 2;
    whosWinning();
})
document.querySelector("#plus3Team2").addEventListener("click", function () {
    scoreTeam2Text.innerText = scoreTeam2 += 3;
    whosWinning();
})
document.querySelector("#plus5Team2").addEventListener("click", function () {
    scoreTeam2Text.innerText = scoreTeam2 += 5;
    whosWinning();
})
function whosWinning() {
    if (scoreTeam1 > scoreTeam2) {
        scoreTeam1Text.classList.add("winning-score");
        scoreTeam1Text.classList.remove("losing-score","draw");
        scoreTeam2Text.classList.add("losing-score");
        scoreTeam2Text.classList.remove("winning-score","draw");
    } else if (scoreTeam1 < scoreTeam2) {
        scoreTeam1Text.classList.add("losing-score");
        scoreTeam1Text.classList.remove("winning-score","draw");
        scoreTeam2Text.classList.add("winning-score");
        scoreTeam2Text.classList.remove("losing-score","draw");
    } else if (scoreTeam1 === scoreTeam2) {
        scoreTeam1Text.classList.remove("losing-score","winning-score");
        scoreTeam1Text.classList.add("draw");
        scoreTeam2Text.classList.remove("losing-score","winning-score");
        scoreTeam2Text.classList.add("draw");
    }
}
document.querySelector("#reset").addEventListener("click", function() {
    scoreTeam1Text.innerText = 0;
    scoreTeam2Text.innerText = 0;
    scoreTeam1Text.classList.remove("winning-score","losing-score","draw");
    scoreTeam2Text.classList.remove("winning-score","losing-score","draw");
    scoreTeam1 = 0;
    scoreTeam2 = 0;
})