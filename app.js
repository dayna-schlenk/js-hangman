// Query Selector Variables
const wordStage = document.querySelector(".word-stage");
const abcSection = document.querySelector(".abc-section");
const livesLeftSection = document.querySelector(".lives-left-section");
const gameStatus = document.querySelector(".game-status");
const lifeSpan = document.querySelector(".life-span");
const resetBtn = document.querySelector(".reset");

// Initial Variables
let randomWordsCollection = [];
let randomWord = "";
let wordDisplay = [];
let wordAsString = "";
let abcButtons;
let livesLeft = 15;
let correctGuesses = 0;
const paragraphElement = document.createElement("p");

// Event Listeners
resetBtn.addEventListener("click", resetGame);

// On-Load Function Calls
generateRandomWord();
showLives();
setUpWordStage();
createAbcButtons();
// playGame();

// Updated Functions
function generateRandomWord() {
    randomWordsCollection = ["hello", "bear", "mountain", "cat", "coffee", "school", "capitalism", "heart", "dog", "mortgage", "workspace", "travel", "journal", "lake", "dragon", "purple", "expensive", "snow", "dumpster", "fragile", "plant", "swimming", "turquoise", "crayon", "turkey", "pencil", "speaker", "favorite", "soup", "glasses", "tea"];

    let randomIndex = Math.floor(Math.random() * randomWordsCollection.length);
    randomWord = randomWordsCollection[randomIndex];

    console.log(`Random word: ${randomWord}`);
}

function setUpWordStage() {
    for (let letter of randomWord) {
        wordDisplay.push("_");
    }

    wordAsString = document.createTextNode(wordDisplay.join(" "));

    paragraphElement.appendChild(wordAsString);
    paragraphElement.classList.add("paragraph-element", "mb-0");
    wordStage.appendChild(paragraphElement);
}

function createAbcButtons() {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    for (let letter of alphabet) {
        let newButton = document.createElement("button");
        newButton.innerText = letter;
        newButton.classList.add("btn", "m-2", "buttons", "abc-btns");
        abcSection.appendChild(newButton);
    }

    abcButtons = document.querySelectorAll(".abc-btns");
}

for (let btn of abcButtons) {
    btn.addEventListener("click", findLetterMatch);
}

// function playGame() {
//     // for (let btn of abcButtons) {
//     //     btn.addEventListener("click", findLetterMatch);
//     // }

//     findLetterMatch();
// }

// Included in playGame function...
function findLetterMatch(evt) {
    let buttonGuess = evt.target.innerHTML;

    if (!randomWord.match(buttonGuess)) {
        livesLeft--;
    } else {
        for (let i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === buttonGuess) {
                correctGuesses++;
                wordDisplay[i] = buttonGuess;
                wordAsString.nodeValue = wordDisplay.join(" ");
            }
        }
    }

    showLives();
    evt.target.setAttribute("disabled", true);
    determineResult();
}

function showLives() {
    lifeSpan.innerHTML = livesLeft;
}

function determineResult() {
    if (correctGuesses === randomWord.length && livesLeft > 0) {
        disableAllButtons();
        gameStatus.innerHTML = "You won!" + String.fromCodePoint(128512);
    } else if (livesLeft < 1) {
        disableAllButtons();
        gameStatus.innerHTML = "You lost " + String.fromCodePoint(128531);
    }
}

function disableAllButtons() {
    for (let button of abcButtons) {
        button.setAttribute("disabled", true);
    }
}

function resetGame() {
    generateRandomWord();
    updateWordStage();

    livesLeft = 15;
    gameStatus.innerHTML = "You have " + livesLeft + " lives left";
    showLives();

    for (let button of abcButtons) {
        button.removeAttribute("disabled");
    }

    // playGame();
    for (let btn of abcButtons) {
        btn.addEventListener("click", findLetterMatch);
    }
    // findLetterMatch(evt);
}

function updateWordStage() {
    wordDisplay = [];
    setUpWordStage(wordDisplay);
    wordAsString = wordDisplay.join(" ");

    console.log(`New wordAsString: ${wordAsString}`);

    paragraphElement.innerHTML = wordAsString;
}