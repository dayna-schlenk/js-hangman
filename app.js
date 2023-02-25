// ------------------------
// Query Selector Variables
// ------------------------
const wordStage = document.querySelector(".word-stage");
const abcSection = document.querySelector(".abc-section");
const livesLeftSection = document.querySelector(".lives-left-section");
const gameStatus = document.querySelector(".game-status");
const lifeSpan = document.querySelector(".life-span");
const resetBtn = document.querySelector(".reset");

// ------------------------
// Generate Random Word
// ------------------------
const randomWordsCollection = ["hello", "bear", "mountain", "cat", "coffee", "school", "capitalism", "heart", "dog", "mortgage", "workspace", "travel", "journal", "lake", "dragon", "purple", "expensive", "snow", "dumpster", "fragile", "plant", "swimming", "turquoise", "crayon", "turkey", "pencil", "speaker", "favorite", "soup", "glasses", "tea"];
let randomIndex = Math.floor(Math.random() * randomWordsCollection.length);
let randomWord = randomWordsCollection[randomIndex];

// ----------------------------------
// Set Up Word Stage & String for UI
// ----------------------------------
let wordDisplay = [];
createWordStage();

let wordAsString = document.createTextNode(wordDisplay.join(" "));
const paragraphElement = document.createElement("p");

paragraphElement.appendChild(wordAsString);
paragraphElement.classList.add("paragraph-element", "mb-0");
wordStage.appendChild(paragraphElement);

// ------------------------
// Create ABC Buttons
// ------------------------
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

createAbcButtons();
const abcButtons = document.querySelectorAll(".abc-btns");

// ------------------------
// Event Listeners
// ------------------------
for (let btn of abcButtons) {
    btn.addEventListener("click", findLetterMatch);
}

resetBtn.addEventListener("click", resetGame);

// -------------------------------
// Variables to Track Game Result
// -------------------------------
let livesLeft = 10;
let correctGuesses = 0;

// ------------------------
// Functions
// ------------------------
function createWordStage() {
    for (let letter of randomWord) {
        wordDisplay.push("_");
    }
}

function createAbcButtons() {
    for (let letter of alphabet) {
        let newButton = document.createElement("button");
        newButton.innerText = letter;
        newButton.classList.add("abc-btns");
        abcSection.appendChild(newButton);
    }
}

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

function disableAllButtons() {
    for (let button of abcButtons) {
        button.setAttribute("disabled", true);
    }
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

function resetGame() {
    window.location.reload();
}