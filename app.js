// ------------------------
// Query Selector Variables
// ------------------------
const wordStage = document.querySelector(".word-stage");
const abcSection = document.querySelector(".abc-section");
const livesLeftSection = document.querySelector(".lives-left-section");
const lifeSpan = document.querySelector(".life-span");

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const randomWordsCollection = ["hello", "bear", "mountain", "cat", "coffee", "school", "capitalism", "heart", "dog", "mortgage", "workspace", "travel", "journal", "lake", "dragon", "purple", "expensive", "snow"];
let randomIndex = Math.floor(Math.random() * randomWordsCollection.length);
let randomWord = randomWordsCollection[randomIndex];
// remove eventually
console.log(`Random word: ${randomWord}`);

// ------------------------
// Set Up Word Stage
// ------------------------
let wordDisplay = [];
createWordStage();

// ------------------------
// Set Up String for UI
// ------------------------
let wordAsString = document.createTextNode(wordDisplay.join(" "));
const paragraphElement = document.createElement("p");

paragraphElement.appendChild(wordAsString);
paragraphElement.classList.add("paragraph-element");
wordStage.appendChild(paragraphElement);

// ------------------------
// Create ABC Buttons
// ------------------------
createAbcButtons();
const abcButtons = document.querySelectorAll(".abc-btns");

// ------------------------
// Event Listeners
// ------------------------
for (let btn of abcButtons) {
    btn.addEventListener("click", findLetterMatch);
}

// ------------------------
// Display Lives Left
// ------------------------
let livesLeft = 10;

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

    if (livesLeft > 0) {
        if (!randomWord.match(buttonGuess)) {
            livesLeft--;
        } else {
            for (let i = 0; i < randomWord.length; i++) {
                if (randomWord[i] === buttonGuess) {
                    wordDisplay[i] = buttonGuess;
                    wordAsString.nodeValue = wordDisplay.join(" ");
                }
            }
        }
    } else {
        console.log("You're done!");
    }

    showLives();
    evt.target.setAttribute("disabled", true);
}

function showLives() {
    lifeSpan.innerHTML = livesLeft;
}

// function determineResult() {
    
// }

// Winner (or Loser) Logic

// if (livesLeft < 1 && wordAstString.match("_"))
    // alert("You lost")
    // disable all buttons
// else if (!wordAsString.match("_"))
    // alert("You won!")
    // disable all buttons