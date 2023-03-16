/* let numberOfRightLetters = 0;
let answer = ["A", "P", "A", "K", "A"];
let guess = ["A", "A", "K", "A", "A"];
let i = 0;

for(let j=0; j<answer.length; j++) {
    if (answer[j] == guess[i] && answer[j] == guess[j])
        numberOfRightLetters++;
}

console.log(numberOfRightLetters); */
/* 
function numbersOfX(letter, comparison, object = false) {
	let recurrence = 0;

	if (object)
        console.log("TRUE")
    else   
        console.log("FALSE")

	return recurrence;
}

numbersOfX("a", "b", false) */

function numbersOfX(letter, comparison, isObject = false) {
	let recurrence = 0;

	comparison.forEach(l => {
        if (isObject) {
            if (l.letter == letter && l.result == "misplaced")
                recurrence++;
        } else {
            if (l == letter) 
                recurrence++;
        }
	});

    console.log(`RAD 117 recurrences: ${recurrence}`);

	return recurrence;
}

console.log(numbersOfX("x", [{letter: "x", result: "misplaced"}, {letter: "s", result: "misplaced"},{letter: "x", result: "correct"}], true));