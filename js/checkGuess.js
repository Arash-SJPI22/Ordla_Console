/* 
    ** Experimentera: **
    Lösning 2 (förhoppningsvis rätt)
        Göra om bägge strängar till lower/uppercase * klart
        Gå inom varje bokstav från gissningen och jämför en och en med alla bokstäver i svaret
            om det är samma bokstav på samma plats i svaret
                sätt objektet till C
            annars
                om bokstaven finns med
                    kontrollera hur många gånger bokstaven finns i gissningen och i svaret
                    om det finns flera gånger i svaret eller lika många gånger som i svaret
                        sätt objektet till M
                    annars (fler instanser av gissningsbokstaven i gissningen än i svaret)
                        kontrollera hur många av samma gissiningsbokstav är på samma plats som i svaret
                            om bokstaven är samma som vi letar efter är den samma som bokstaven i svaret med samma index
                            ++
                                
                        om antalet instanser av gissningsbokstaven som finns på rätt plats för den bokstaven är samma som antalet gånger bokstaven finns i (gissningen) svaret
                            sätt objektet till I
                        //om det redans finns ett objekt med samma bokstav vars objekt är satt till M och an
                        om det finns färre objekt i resultats arrayen med samma bokstav vars resultat är satt till M än 
                            sätt objektet till M
                        annars
                            sätt objeketet till I
                annars
                    sätt objetet till I
        Outputa svaret ()
 */

import { application } from "express";

export default function checkGuess(guess, answer) {
	const result = [];
    guess = guess.toUpperCase().split('');
    answer = answer.toUpperCase().split('');

	for (let i = 0; i < guess.length; i++) {

		if (guess[i] === answer[i]) {

			result.push(addObject(guess[i], "correct"));
            console.log(`RAD 42 correct för bokstav ${guess[i]}`);

		} else {

			if (answer.includes(guess[i])) {
                
                // If numbers the letters has more instances in the answer then the guess, its missplaced
				if (numbersOfX(guess[i], answer) >= numbersOfX(guess[i], guess)) {

                    result.push(addObject(guess[i], "misplaced"))
                    console.log(`RAD 51 missplaced för bokstav ${guess[i]}`);
                
                // There are more instances of the letter in guess then in the answer. Must be determened if they are misplaced or incorrect.
                // It is misplaced if the instance is one the instances that is fewer or equal to the number of instance of the letter in the guess then the answer
				} else {

                    let numberOfRightLetters = 0;

                    for(let j=0; j<answer.length; j++) {
                        if (answer[j] == guess[i] && answer[j] == guess[j])
                            numberOfRightLetters++;
                    }
                    console.log(`RAD 64 numberOfRIghtLetter=${numberOfRightLetters}`);
                    
                    // If there are equal numbers of the letter in the right place in the asnwer and guess then all other instances of the letter in the guess are incorrect
                    if (numberOfRightLetters == numbersOfX(guess[i], answer)){
                        result.push(addObject(guess[i], "incorrect"))
                        console.log(`RAD 68 incorrect för bokstav ${guess[i]}`);
                    
                    // If the numbers of letters in the right place are fewer then then are number of instances of the letter in the answer & 
                    // numbersofXinResult is less then the number of instances of this letter are allready in the result marked as misplaced + numberofrightletters
                    //else if ((numberOfRightLetters < numbersOfX(guess[i], answer)) && (numbersOfX(guess[i], answer) < (numbersOfX(guess[i], result, true) + numberOfRightLetters))){
                    // Om antalet instanser av bokstaven i svaret är större än antalet bokstäver på rätt plats och antalet bokstäver som redan är missplacerade så är även denna missplacerad
                    // If the number of instances of the letter in the answer is greater then the number of letters in the rightplace plus the number of already missplaced letters then this is also misplaced 
                    } else if ((numberOfRightLetters + numbersOfX(guess[i], result, true)) < numbersOfX(guess[i], answer)) {
                        result.push(addObject(guess[i], "misplaced"))
                        console.log(`RAD 76 misplaced för bokstav ${guess[i]}`);

                    //} else if (numbersOfX(guess[i], result, true) >= numbersOfX(guess[i], answer)) {
                    } else {
                        result.push(addObject(guess[i], "incorrect"))
                        console.log(`RAD 81 incorrect för bokstav ${guess[i]}`);
                    }
                    
                }

			} else {

				result.push(addObject(guess[i], "incorrect"));
                console.log(`RAD 89 incorrect för bokstav ${guess[i]}`);
			}
		}
	}

    //console.log(result);
	return result;
}

function addObject(lett, res) {
	return { letter: lett, result: res };
}

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