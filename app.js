// ------------------------
// Variables
// ------------------------
const wordStage = document.querySelector(".word-stage");
const abcSection = document.querySelector(".abc-section");

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const randomWordsCollection = ["hello", "bear", "mountain"];
let randomIndex = Math.floor(Math.random() * randomWordsCollection.length);
let randomWord = randomWordsCollection[randomIndex];
// remove eventually
console.log(`Random word: ${randomWord}`);

let remainingLetters = randomWord.length;
let wordDisplay = [];

// ------------------------
// Set Up Word Stage
// ------------------------
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

    if (remainingLetters > 0) {
        if (!randomWord.match(buttonGuess)) {
            console.log(`${buttonGuess} is incorrect.`);
        } else {
            for (let i = 0; i < randomWord.length; i++) {
                if (randomWord[i] === buttonGuess) {
                    wordDisplay[i] = buttonGuess;
                    remainingLetters--;
                    wordAsString.nodeValue = wordDisplay.join(" ");
                }
            }
        }  
    } else {
        console.log("You have no more letters!");
    }
}