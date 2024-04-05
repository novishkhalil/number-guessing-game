#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate random number
// 2) User input fr guessing number
// 3) Compare with user input with computer generated number and then show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([{
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6:",
    }
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulation! You guessed right number");
}
else {
    console.log("You guessed wrong number");
}
