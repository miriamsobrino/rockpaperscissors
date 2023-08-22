let containerScorePlayer = document.getElementById("score-player");
let containerScorePc = document.getElementById("score-pc");
let moves = document.querySelectorAll(".move");
let result = document.getElementById("result");
let movePlayer = document.getElementById("move-player");
let movePc = document.getElementById("move-pc");
let message = document.getElementById("message");
let endScreen = document.getElementById("container");
let restart = document.getElementById("restart-btn");
let winText = document.getElementById("win-text");
let scorePlayer = 0;
let scorePc = 0;

endScreen.style.display = "none";

moves.forEach((button) => {
  button.addEventListener("click", initGame);
});

function initGame(e) {
  let chosePc = Math.floor(Math.random() * 3);
  let chosePlayer = e.currentTarget.id;
  let contentPlayer = e.currentTarget.innerText;

  if (chosePc === 0) {
    chosePc = "rock 🤟";
  } else if (chosePc === 1) {
    chosePc = "paper ✋";
  } else {
    chosePc = "scissors ✌️";
  }

  if (
    (chosePlayer === "rock" && chosePc === "scissors ✌️") ||
    (chosePlayer === "paper" && chosePc === "rock 🤟") ||
    (chosePlayer === "scissors" && chosePc === "paper ✋")
  ) {
    playerWins();
  } else if (
    (chosePc === "rock 🤟" && chosePlayer === "scissors") ||
    (chosePc === "paper ✋" && chosePlayer === "rock") ||
    (chosePc === "scissors ✌️" && chosePlayer === "paper")
  ) {
    pcWins();
  } else {
    draw();
  }

  message.classList.remove("hidden");
  movePlayer.innerText = chosePlayer + " " + contentPlayer;
  movePc.innerText = chosePc;

  if (scorePlayer === 5 || scorePc === 5) {
    endGame();
  }
}

function playerWins() {
  result.innerText = "You won!";
  scorePlayer++;
  containerScorePlayer.innerText = scorePlayer;
}

function pcWins() {
  result.innerText = "You lost!";
  scorePc++;
  containerScorePc.innerText = scorePc;
}

function draw() {
  result.innerText = "It's a draw!";
}

function endGame() {
  endScreen.style.display = "flex";
  if (scorePlayer === 5) {
    winText.innerText = "You won the game! 👏";
  }

  if (scorePc === 5) {
    winText.innerText = "You lost the game! 👎";
  }
}

restart.addEventListener("click", newGame);

function newGame() {
  scorePlayer = 0;
  scorePc = 0;
  containerScorePc.innerText = scorePc;
  containerScorePlayer.innerText = scorePlayer;
  endScreen.style.display = "none";
  message.classList.add("hidden");
}
