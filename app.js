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

// --------------------------
// Variables & On-Load Logic
// --------------------------
const randomWordsCollection = ["hello", "bear", "mountain"];
let randomIndex = Math.floor(Math.random() * randomWordsCollection.length);
let randomWord = randomWordsCollection[randomIndex];
console.log(`Random word: ${randomWord}`);

let remainingLetters = randomWord.length;
console.log(`Remaining letters: ${remainingLetters}`);

const abcButtons = document.querySelectorAll(".abc-btns");
const wordStageP = document.querySelector(".word-stage-p");

let wordStage = [];

for (let letter of randomWord) {
    wordStage.push("_");
}

let uiWord = wordStage.join(" ");
wordStageP.append(uiWord);

// ------------------------
// Event Listeners
// ------------------------
for (let btn of abcButtons) {
    btn.addEventListener("click", findLetterMatch);
}

// ------------------------
// Functions
// ------------------------
function findLetterMatch(evt) {
    let buttonGuess = evt.target.innerHTML;

    for (let letter of randomWord) {
        if (buttonGuess === letter) {
            console.log("Letter match " + buttonGuess + " was found!");
        }
    }
}