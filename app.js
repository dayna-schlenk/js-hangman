// --------------------------
// Variables & On-Load Logic
// --------------------------
const randomWordsCollection = ["hello", "bear", "mountain"];
let randomIndex = Math.floor(Math.random() * randomWordsCollection.length);
let randomWord = randomWordsCollection[randomIndex];
console.log(`Random word: ${randomWord}`);

let remainingLetters = randomWord.length;

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

    if (remainingLetters > 0) {
        if (!randomWord.match(buttonGuess)) {
            console.log(`${buttonGuess} is incorrect.`);
        } else {
            console.log(`${buttonGuess} is correct!`);

            for (let i = 0; i < randomWord.length; i++) {
                if (randomWord[i] === buttonGuess) {
                    wordStage[i] = buttonGuess;
                    remainingLetters--;
                    // update element
                    uiWord = wordStage.join(" ");
                    console.log(`UI word: ${uiWord}`);
                    // remove old element
                    // add updated element back to UI
                }
            }
        }  
    } else {
        console.log("You have no more letters!");
    }
}