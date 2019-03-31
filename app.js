let userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
var compChoiceDisplay = document.getElementById("compChoiceDisplay");

function getCompChoice() {
  const choice = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  if (choice[randomNumber] === "r") {
    document.getElementById("displayCompChoice").src = "images/rock.png";
  }
  if (choice[randomNumber] === "p") {
    document.getElementById("displayCompChoice").src = "images/paper.png";
  }
  if (choice[randomNumber] === "s") {
    document.getElementById("displayCompChoice").src = "images/scissors.png";
  }
  return choice[randomNumber];
}

function convertToWord(letter) {
  if (letter === "p") {
    compChoiceDisplay.innerHTML = "Computer chose Paper";
    return "Paper";
  }
  if (letter === "r") {
    compChoiceDisplay.innerHTML = "Computer chose Rock";
    return "Rock";
  }
  if (letter === "s") {
    compChoiceDisplay.innerHTML = "Computer chose Scissor";
    return "Scissors";
  }
}

function win(userChoice, compChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  result_div.innerHTML = ` ${convertToWord(userChoice)} beats ${convertToWord(
    compChoice
  )}, You Win!`;
  document.getElementById(userChoice).classList.add("green-glow");
  setTimeout(function() {
    document.getElementById(userChoice).classList.remove("green-glow");
  }, 300);
}
function lose(userChoice, compChoice) {
  compScore++;
  compScore_span.innerHTML = compScore;
  result_div.innerHTML = ` ${convertToWord(compChoice)} beats ${convertToWord(
    userChoice
  )}, You Loose!`;
  document.getElementById(userChoice).classList.add("red-glow");
  setTimeout(function() {
    document.getElementById(userChoice).classList.remove("red-glow");
  }, 300);
}
function draw(userChoice, compChoice) {
  result_div.innerHTML = ` Its a draw! `;
  document.getElementById(userChoice).classList.add("gray-glow");
  setTimeout(function() {
    document.getElementById(userChoice).classList.remove("gray-glow");
  }, 300);
}

function game(userChoice) {
  const compChoice = getCompChoice();
  switch (userChoice + compChoice) {
    case "pr":
    case "rs":
    case "sp":
      win(userChoice, compChoice);
      break;
    case "rp":
    case "sr":
    case "ps":
      lose(userChoice, compChoice);
      break;
    case "rr":
    case "ss":
    case "pp":
      draw(userChoice, compChoice);
      break;
  }
}

game();

function main() {
  rock_div.addEventListener("click", function() {
    game("r");
    document.getElementById("userChoiceDisplay").innerHTML =
      "You selected Rock";
  });

  paper_div.addEventListener("click", function() {
    game("p");
    document.getElementById("userChoiceDisplay").innerHTML =
      "You selected Paper";
  });

  scissor_div.addEventListener("click", function() {
    game("s");
    document.getElementById("userChoiceDisplay").innerHTML =
      "You selected Scissor";
  });
}

main();
