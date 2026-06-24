🎯 Number Guessing Game

A simple interactive Number Guessing Game built with HTML, CSS, and JavaScript.

The game generates a secret number between 1 and 20, and the player must guess the correct number before running out of attempts. After each guess, the game provides helpful hints such as "Too High", "Too Low", "Getting Warmer", or "Getting Colder" to guide the player toward the correct answer.

This project was created as a practice exercise to strengthen fundamental JavaScript concepts including arrays and objects, functions, loops, conditional statements, and DOM manipulation.

📌 Project Scope

The application allows users to:

Guess a randomly generated number.
Receive feedback after each guess.
See whether their guess is too high or too low.
Receive "warmer" or "colder" hints based on previous guesses.
Track remaining attempts.
Reach a clear end state (win or loss).

The project focuses on implementing core JavaScript programming concepts while creating an interactive user experience.

🚀 Features
Random secret number generation.
User input through a number field.
Submit button for guesses.
Hint system:
Too High
Too Low
Getting Warmer
Getting Colder
Attempts counter.
Win message.
Game Over message displaying the correct answer.
Disabled inputs when the game ends.
🛠 Tools and Technologies Used
Front-End
HTML5
CSS3
JavaScript (ES6)
Development Environment
Visual Studio Code
Browser Developer Tools
Version Control
Git
GitHub
📂 Project Structure
number-guessing-game/
│
├── index.html
├── style.css
├── script.js
└── README.md
🧠 JavaScript Concepts Practiced
1. Arrays and Objects

Game information and hint messages are stored using objects and arrays.

Examples:

Game object
Hints array

This approach improves organization and scalability.

2. Functions

The application logic is divided into reusable functions such as:

Updating attempts
Checking guesses
Ending the game

Using functions helps avoid repetition and improves code readability.

3. Loops

A loop is used to iterate through the hints array, demonstrating the use of iteration in JavaScript.

4. Conditional Statements

if / else statements are used to determine:

Correct guesses
Incorrect guesses
Too high or too low responses
Warmer or colder hints
Win or loss conditions
5. DOM Manipulation

JavaScript dynamically updates:

Feedback messages
Attempts remaining
Input states
Button states

without reloading the page.

💡 Skills Demonstrated

This project demonstrates the ability to:

Structure a web project using multiple files.
Build interactive applications with JavaScript.
Manipulate HTML elements using the DOM.
Organize code with functions.
Use arrays and objects effectively.
Apply loops and conditional logic.
Manage application state.
Create user feedback mechanisms.
Handle game-ending scenarios.
🎮 How to Play
Open the application in a browser.
Enter a number between 1 and 20.
Click Submit Guess.
Read the feedback provided.
Continue guessing until:
You guess correctly, or
You run out of attempts.
📸 Example Gameplay
Guess a number between 1 and 20

Guess: 8
➡ Too Low!

Guess: 15
➡ Too High! Getting Warmer!

Guess: 13
➡ Correct! You Win!
🔮 Future Improvements (Version 2)

Possible enhancements include:

🔄 Restart Button

Allow players to start a new game without refreshing the page.

⌨ Enter Key Support

Enable users to submit guesses by pressing the Enter key.

🌙 Dark Mode

Provide a light and dark theme option.

🏆 Scoreboard

Track wins and losses across multiple rounds.

💾 Local Storage

Save scores and preferences between sessions.

🎚 Difficulty Levels

Add:

Easy (10 attempts)
Medium (7 attempts)
Hard (5 attempts)
🔊 Sound Effects

Add sounds for:

Correct answers
Incorrect guesses
Winning
Losing
📈 High Score System

Keep track of the player's best performance.

📱 Improved Mobile Responsiveness

Further optimize the layout for small screens.

🎨 Enhanced UI Design

Add animations, transitions, and visual improvements.

🤖 Role of AI in Development

Artificial Intelligence (ChatGPT) was used as a development assistant to:

Brainstorm project ideas.
Assist in layout and visual design.
Explain JavaScript concepts.
Suggest UI and gameplay improvements.
Assist in debugging and refactoring code.

All implementation decisions, testing, and customization were carried out by the project author.

📚 Learning Outcome

Through this project, I strengthened my understanding of:

Variables and data types
Arrays and objects
Functions
Loops
Conditional statements
DOM manipulation
Event handling
State management
User interaction in JavaScript

Author

Yusuf Mamman

