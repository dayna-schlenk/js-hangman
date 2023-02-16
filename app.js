// ------------------------
// "Get" Elements
// ------------------------
const abcButtons = document.querySelectorAll(".abc-btns");
const wordStage = document.querySelector(".word-stage");

// --------------------------
// Variables & On-Load Logic
// --------------------------
const randomWordsCollection = ["hello", "bear", "mountain"];
let randomIndex = Math.floor(Math.random() * randomWordsCollection.length);
let randomWord = randomWordsCollection[randomIndex];
console.log(`Random word: ${randomWord}`);

// is this needed?
let remainingLetters = randomWord.length;

let wordDisplay = [];

// put this in a function & call it?
for (let letter of randomWord) {
    wordDisplay.push("_");
}

let wordAsString = document.createTextNode(wordDisplay.join(" "));
const paragraphElement = document.createElement("p");
paragraphElement.appendChild(wordAsString);
wordStage.appendChild(paragraphElement);

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

    if (remainingLetters > 0) {
        if (!randomWord.match(buttonGuess)) {
            console.log(`${buttonGuess} is incorrect.`);
        } else {
            console.log(`${buttonGuess} is correct!`);

            for (let i = 0; i < randomWord.length; i++) {
                if (randomWord[i] === buttonGuess) {
                    wordDisplay[i] = buttonGuess;
                    remainingLetters--;
                    wordAsString.nodeValue = wordDisplay.join(" ");
                    console.log(`Word as String: ${wordAsString}`);
                }
            }
        }  
    } else {
        console.log("You have no more letters!");
    }
}