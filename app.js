// ------------------------
// MVP Requirements
// ------------------------
// User starts with 10 lives
// Generate random word (start with an array of basic words)
// Empty spaces to populate letters in random mystery word
// ABC letter buttons for user to select (which will then either populate the correct letter in the proper place, or take away 1 life from the user if incorrect)
// Game ends when either the user runs out of lives or the word is guessed correctly
// Button shows up to either play again or quit


// ------------------------
// Variables
// ------------------------
const generateWordBtn = document.querySelector(".generate-word-btn");

const randomWords = ["hello", "bear", "mountain"];
let randomIndex = Math.floor(Math.random() * 3);
let randomWord = randomWords[randomIndex];

const abcButtons = document.querySelectorAll(".abc-btns");

const wordStage = document.querySelector(".word-stage");

let userLives = 10;
const livesLeftPTag = document.querySelector(".lives-left");
const span = document.createElement("span");
const spanContent = document.createTextNode(userLives);

// ------------------------
// Show lives left on UI
// ------------------------
span.append(spanContent);
livesLeftPTag.append(span);


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

// If letter matches in randomWord -> make letter visible in empty space
// function findLetterMatch(evt) {
//     let buttonLetter = evt.target.innerHTML;
//     console.log(buttonLetter + " button was clicked!");

//     for (let letter of randomWord) {
//         if (buttonLetter === letter) {
//             console.log("Letter match " + letter + " was found!");
//             letterSpaceP.classList.remove("hide");
//         }
//     }
// }