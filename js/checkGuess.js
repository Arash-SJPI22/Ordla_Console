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
                        sätt objektet till I
                    annars (fler instanser av gissningsbokstaven i gissningen än i svaret)
                        kontrollera hur många av samma gissiningsbokstav är på samma plats som i svaret
                            om bokstaven är samma som vi letar efter
                                är den samma som bokstaven i svaret med samma index
                                    ++
                                
                        om antalet instanser av gissningsbokstaven som finns på rätt plats för den bokstaven är samma som antalet gånger bokstaven finns i gissningen
                            sätt objektet till I
                        om det redans finns ett objekt med samma bokstav vars objekt är satt till M 
                            sätt objektet till I
                        annars
                            sätt objeketet till M
                annars
                    sätt objetet till I
        Outputa svaret ()
 */

export default function checkGuess (guess, answer) {
    const result = [];

    console.log(`guess: ${guess} - answer: ${answer}`);

    for (let i=0; i<guess.length; i++) {
        if(guess[i] === answer[i]){

            result.push(addObject(guess[i], "correct"));

        } else {

            if (answer.includes(guess[i])) {

                let numbersOfXinAnswer = 0;
                answer.forEach(l => { 
                    if (l === guess[i])
                        numbersOfXinAnswer++;
                });

                // console.log(`numbersOfXinAnswer = ${numbersOfXinAnswer}`);
            } else {

                result.push(addObject(guess[i], "incorrect"));
            }
        }
    }
    console.log(result);
    return result;
}

function addObject (lett, res) {
    return {letter: lett, result: res};
}
