// ------------------------
// Variables
// ------------------------
const abcButtons = document.querySelectorAll(".abc-btns");
const wordStage = document.querySelector(".word-stage");

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
// create alphabet array
// loop through array
    // create button element with that letter as the button text
    // append button to html div (as a child)

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