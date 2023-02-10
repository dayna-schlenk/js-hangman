// ------------------------
// MVP Requirements
// ------------------------
// Pick a random word
// Take the player's guess
// Check if the player's guess is a valid letter
// Keep track of the letters the player has guessed
// Show the player their progress
// Finish when the player has guessed the word

// ------------------------
// Post-MVP Requirements
// ------------------------
// Quit the game if the player wants to
// Player loses a life when their guess is incorrect
// If player runs out of lives, the game ends
// Play again if the player wants to (reset the game)

// ------------------------
// Variables
// ------------------------
const generateWordBtn = document.querySelector(".generate-word-btn");

// Generate random word on page load (remove generateWordBtn above)
const randomWordsCollection = ["hello", "bear", "mountain"];
let randomIndex = Math.floor(Math.random() * randomWordsCollection.length);
let randomWord = randomWordsCollection[randomIndex];

let remainingLetters = randomWord.length;
console.log(`Remaining letters: ${remainingLetters}`);

const abcButtons = document.querySelectorAll(".abc-btns");
const wordStageDiv = document.querySelector(".word-stage-div");

let wordStage = [];

for (let letter of randomWord) {
    wordStage.push("_");
}

let uiWord = wordStage.join(" ");
wordStageDiv.append(uiWord);

// ------------------------
// Event Listeners
// ------------------------
generateWordBtn.addEventListener("click", generateLetterLines);

for (let btn of abcButtons) {
    btn.addEventListener("click", findLetterMatch);
}


// ------------------------
// Functions
// ------------------------
function generateLetterLines() {
    console.log(`Random word = ${randomWord}`);

    for (let letter of randomWord) {
        let underline = document.createElement("p");
        underline.innerText = "_____";
        wordStage.appendChild(underline);
    }
}

function findLetterMatch(evt) {
    let buttonLetter = evt.target.innerHTML;

    for (let letter of randomWord) {
        if (buttonLetter === letter) {
            console.log("Letter match " + buttonLetter + " was found!");
        }
    }
}