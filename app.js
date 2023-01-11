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
// Next Steps
// ------------------------

// Capture random word from an array
const randomWords = ["hello", "bear", "mountain"];
let randomIndex = Math.floor(Math.random() * 3);
let randomWord = randomWords[randomIndex];


// User clicks on a letter-button, console indicates which letter was clicked
const buttons = document.querySelectorAll("button");

for (let btn of buttons) {
    btn.addEventListener("click", clickMessage);
}

function clickMessage(evt) {
    // evt.target returns the element that triggered the event
    console.log(evt.target.innerHTML + " button was clicked!");
}


// Display number of lives user has on the UI
let userLives = 10;
const livesLeftPTag = document.querySelector(".lives-left");
const span = document.createElement("span");
const spanContent = document.createTextNode(userLives);

span.append(spanContent);
livesLeftPTag.append(span);


// Populate empty spaces with letters from random word
const letterSpacesDiv = document.querySelector(".letter-spaces");
const emptySpacesDiv = document.querySelector(".empty-spaces");

console.log("Random word: " + randomWord);

for (let letter of randomWord) {
    let letterSpaceP = document.createElement("p");

    let emptySpaceP = document.createElement("p");
    let emptySpaceContent = document.createTextNode("___");

    letterSpaceP.append(letter);
    emptySpaceP.append(emptySpaceContent);

    letterSpacesDiv.appendChild(letterSpaceP);
    // emptySpacesDiv.appendChild(emptySpaceP);
    letterSpacesDiv.appendChild(emptySpaceP);
}