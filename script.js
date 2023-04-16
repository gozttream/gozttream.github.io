let score = 0;
let gameInterval;

document.getElementById("start-button").addEventListener("click", startGame);

function startGame() {
    document.getElementById("start-button").disabled = true;
    document.getElementById("start-button").textContent = "Game in progress";
    gameInterval = setInterval(showCircle, 1000);
    document.getElementById("circle").addEventListener("click", increaseScore);
}

function showCircle() {
    let circle = document.getElementById("circle");
    let gameContainer = document.getElementById("game-container");
    let maxTop = gameContainer.clientHeight - circle.clientHeight;
    let maxLeft = gameContainer.clientWidth - circle.clientWidth;
    let top = Math.floor(Math.random() * maxTop);
    let left = Math.floor(Math.random() * maxLeft);
    circle.style.top = top + "px";
    circle.style.left = left + "px";
    circle.style.display = "block";
    setTimeout(hideCircle, 1000);
}

function hideCircle() {
    document.getElementById("circle").style.display = "none";
}

function increaseScore() {
    score++;
    document.getElementById("score").textContent = "Score: " + score;
}
