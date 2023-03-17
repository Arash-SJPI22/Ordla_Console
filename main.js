import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import checkGuess from "./js/checkGuess.js";
import wordList from './js/wordList.js';

const BACKUPLIST = [
	"KOKOSNÖT",
	"RABBIT",
	"MONKEY",
	"BANAN",
	"RUMBA",
	"CALZONE",
	"REVOLUTION",
    "Ö",
    "JAK",
];

const rl = readline.createInterface({ input, output });

// Get one Answer
const answer = [];

let str = await rl.question('Enter the answer: ');

while(!str.match(/^[a-öA-Ö]+$/g) || str.length > 30) {
    str = await rl.question('The answer can only contains letters and must be shorter then 30 letters, please try again: ');
}

answer.push(str);


// Enter more answers ?
let proceed = "N";

do {
    proceed = await rl.question('Would you like to enter another answer (Y/N): ');

    while(!proceed.match(/^[YN]+$/g) || proceed.length > 1) {
        proceed = await rl.question('The answer can only contains letters Y/N and be no longer then 1 letter, please try again: ');
    }
    
    if (proceed == "Y") {
        str = await rl.question('Enter the answer: ');

        while(!str.match(/^[a-öA-Ö]+$/g) || str.length > 30) {
            str = await rl.question('The answer can only contains letters and must be shorter then 30 letters, please try again: ');
        }

        answer.push(str);
    }

} while (proceed == "Y");


// Unique letters in the answer?
let unique = await rl.question('Would you like the answer to only containe unique letters (Y/N): ');

while(!unique.match(/^[YN]+$/g) || unique.length > 1) {
    unique = await rl.question('The answer can only contains letters Y/N and be no longer then 1 letter, please try again: ');
}

unique == "Y" ? unique = true : unique = false;


// Restrict how many letters
let length = await rl.question('How many letters should the answer contain (0 for random or up to 30) : ');

while(!length.match(/^[0-9]+$/g) || length > 30){
    length = await rl.question('The length must be a number between 0-30, please try again: ');
}

// Pick a random lenght of the word based on the length of the words already enterd
if (length == 0) {
    let max = 0;
    let min;

    for (let i=0; i<answer.length; i++) {
        if (i == 0) {
            min = answer[i].length;
        }

        if (answer[i].length > max) {
            max = answer[i].length;
        }

        if (answer[i].length < min){
            min = answer[i].length
        }
    }

    length = Math.floor((Math.random() * ((max + 1) - min)) + min);
} 


// Pick out the answer based on list and criteria
let picedAnswer = wordList(answer, length, unique);

if (picedAnswer == false) {
    picedAnswer = BACKUPLIST[Math.floor(Math.random() * BACKUPLIST.length)];
    console.log('Based on the words you picked and the criteria, no words were found. So I picked a word for you!')
}

// Enter the guess
let guess = await rl.question('Enter your guess: ');

while (!guess.match(/^[a-öA-Ö]+$/g) || guess.length != picedAnswer.length) {
    guess = await rl.question(`Your guess has to be ${picedAnswer.length} letters long and only contain letters, please try again: `);
}

rl.close();


// Show result
const result = checkGuess(guess, picedAnswer);
console.log(`The right answer was: ${picedAnswer}`)
console.log(result);