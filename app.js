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
const randomWords = ["hello", "bear", "mountain"];
let randomIndex = Math.floor(Math.random() * 3);
let randomWord = randomWords[randomIndex];

const abcButtons = document.querySelectorAll(".abc-btns");

let userLives = 10;
const livesLeftPTag = document.querySelector(".lives-left");
const span = document.createElement("span");
const spanContent = document.createTextNode(userLives);

const letterSpacesDiv = document.querySelector(".letter-spaces");
const emptySpacesDiv = document.querySelector(".empty-spaces");


console.log("Random word: " + randomWord);


// ------------------------
// Show lives left on UI
// ------------------------
span.append(spanContent);
livesLeftPTag.append(span);


// ------------------------
// Event Listeners
// ------------------------
for (let btn of abcButtons) {
    btn.addEventListener("click", clickMessage);
}


// ------------------------
// Functions
// ------------------------
function clickMessage(evt) {
    let buttonLetter = evt.target.innerHTML; // evt.target returns the element that triggered the event
    console.log(buttonLetter + " button was clicked!");

    for (let letter of randomWord) {
        // if (buttonLetter === letter) {
        //     console.log("Letter match " + letter + " was found!");
        // }
        
        let letterSpaceP = document.createElement("p");

        let emptySpaceP = document.createElement("p");
        let emptySpaceContent = document.createTextNode("___");

        letterSpaceP.append(letter);
        emptySpaceP.append(emptySpaceContent);

        letterSpacesDiv.appendChild(letterSpaceP);
        // emptySpacesDiv.appendChild(emptySpaceP);
        letterSpacesDiv.appendChild(emptySpaceP);
    }
}