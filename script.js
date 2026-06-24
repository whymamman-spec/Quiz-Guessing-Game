// ===== ARRAYS / OBJECTS =====

// Object storing game data
const game = {
    secretNumber: Math.floor(Math.random() * 20) + 1,
    attemptsLeft: 5,
    previousDifference: null
};

// Array of hint messages
const hints = [
    "Too low!",
    "Too high!",
    "Getting warmer!",
    "Getting colder!"
];


// Select HTML elements
const guessInput = document.getElementById("guessInput");
const feedback = document.getElementById("feedback");
const attempts = document.getElementById("attempts");
const submitBtn = document.getElementById("submitBtn");


// ===== FUNCTIONS =====

// Update attempts display
function updateAttempts() {
    attempts.textContent = `Attempts Left: ${game.attemptsLeft}`;
}


// End the game
function endGame(message) {
    feedback.textContent = message;
    submitBtn.disabled = true;
    guessInput.disabled = true;
}


// Check player's guess
function checkGuess() {

    let playerGuess = Number(guessInput.value);

    if (playerGuess === game.secretNumber) {
        feedback.textContent = "🎉 Correct! You win!";
        feedback.className = "correct";
        endGame("🎉 Correct! You win!");
        return;
    }

    game.attemptsLeft--;

    // CONDITIONS
    if (playerGuess < game.secretNumber) {
        feedback.textContent = hints[0];
        feedback.className = "wrong";
    } else {
        feedback.textContent = hints[1];
        feedback.className = "wrong";
    }

    // Distance from secret number
    let currentDifference = Math.abs(game.secretNumber - playerGuess);

    // Getting warmer / colder
    if (game.previousDifference !== null) {

        if (currentDifference < game.previousDifference) {
            feedback.textContent += " " + hints[2];
        } else if (currentDifference > game.previousDifference) {
            feedback.textContent += " " + hints[3];
        }
    }

    game.previousDifference = currentDifference;

    updateAttempts();

    // Game over condition
    if (game.attemptsLeft === 0) {
        endGame(`😢 Game Over! The number was ${game.secretNumber}`);
    }

    guessInput.value = "";
}


// ===== LOOP =====

// Loop through the hints array and display them in console
for (let i = 0; i < hints.length; i++) {
    console.log(hints[i]);
}


// Button click event
submitBtn.addEventListener("click", checkGuess);