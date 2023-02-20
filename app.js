// ------------------------
// Variables
// ------------------------
const wordStage = document.querySelector(".word-stage");
const abcSection = document.querySelector(".abc-section");
// const livesLeftH2 = document.querySelector(".lives-left-h2");
const livesLeftSection = document.querySelector(".lives-left-section");

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const randomWordsCollection = ["hello", "bear", "mountain", "cat", "coffee", "school", "capitalism", "heart", "dog", "mortgage", "workspace", "travel", "journal", "lake", "dragon", "purple", "expensive", "snow"];
let randomIndex = Math.floor(Math.random() * randomWordsCollection.length);
let randomWord = randomWordsCollection[randomIndex];
// remove eventually
console.log(`Random word: ${randomWord}`);

// let remainingLetters = randomWord.length;
let livesLeft = 10;
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
// Display Lives Left
// ------------------------
const livesLeftPTag = document.createElement("p");
livesLeftPTag.append(livesLeft);
livesLeftPTag.classList.add("lives-left-p");
livesLeftSection.appendChild(livesLeftPTag);

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
            console.log(`${buttonGuess} is incorrect.`);
            livesLeft--;
            console.log(`You have ${livesLeft} lives left.`);
        } else {
            for (let i = 0; i < randomWord.length; i++) {
                if (randomWord[i] === buttonGuess) {
                    wordDisplay[i] = buttonGuess;
                    wordAsString.nodeValue = wordDisplay.join(" ");
                }
            }
        }
    } else {
        console.log("You have no more lives!");
    }

    evt.target.setAttribute("disabled", true);
}