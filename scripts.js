/*1. create variable for each score
2. increment score by correct amount for each button
3. make whoever's score is higher green and the other score red
4. Add new game button to reset scores
*/
let scoreP1Text = document.querySelector("#scoreP1");
let scoreP2Text = document.querySelector("#scoreP2");
let scoreP1 = 0;
let scoreP2 = 0;
document.querySelector("#plus2P1").addEventListener("click", function () {
    scoreP1Text.innerText = scoreP1 += 2;
    whosWinning();
})
document.querySelector("#plus3P1").addEventListener("click", function () {
    scoreP1Text.innerText = scoreP1 += 3;
    whosWinning();
})
document.querySelector("#plus5P1").addEventListener("click", function () {
    scoreP1Text.innerText = scoreP1 += 5;
    whosWinning();
})
document.querySelector("#plus2P2").addEventListener("click", function () {
    scoreP2Text.innerText = scoreP2 += 2;
    whosWinning();
})
document.querySelector("#plus3P2").addEventListener("click", function () {
    scoreP2Text.innerText = scoreP2 += 3;
    whosWinning();
})
document.querySelector("#plus5P2").addEventListener("click", function () {
    scoreP2Text.innerText = scoreP2 += 5;
    whosWinning();
})
function whosWinning() {
    if (scoreP1 > scoreP2) {
        scoreP1Text.classList.add("winning-score");
        scoreP1Text.classList.remove("losing-score","draw");
        scoreP2Text.classList.add("losing-score");
        scoreP2Text.classList.remove("winning-score","draw");
    } else if (scoreP1 < scoreP2) {
        scoreP1Text.classList.add("losing-score");
        scoreP1Text.classList.remove("winning-score","draw");
        scoreP2Text.classList.add("winning-score");
        scoreP2Text.classList.remove("losing-score","draw");
    } else if (scoreP1 === scoreP2) {
        scoreP1Text.classList.remove("losing-score","winning-score");
        scoreP1Text.classList.add("draw");
        scoreP2Text.classList.remove("losing-score","winning-score");
        scoreP2Text.classList.add("draw");
    }
}
document.querySelector("#reset").addEventListener("click", function() {
    scoreP1Text.innerText = 0;
    scoreP2Text.innerText = 0;
    scoreP1Text.classList.remove("winning-score","losing-score","draw");
    scoreP2Text.classList.remove("winning-score","losing-score","draw");
    scoreP1 = 0;
    scoreP2 = 0;
})