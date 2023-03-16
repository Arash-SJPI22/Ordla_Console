/* 
    **Definition:**

    Algoritm A
    Mata in två textsträngar, gissning och svaret
    Kontrollera vilka bokstäver från gissningen som finns med i ordet och vart.
    Svara med ett objekt , ett objekt för varjee bokstav i den ordning de skrev för gissningen:
        letter (bokstaven)
        result: (ett av dessa)
                incorrect (Finns inte med i svaret)
                misplaced (Finns med i svaret men på annan plats)
                correct (Finns med i svaret och är på rätt plats)

    Att tänka på om det finns ex ett L i svaret och två L i gissningen så ska bara ett L (det som är mest korrekt) få misplaced/correct det andra ska bli incorrect

    Algoritm B
    Spelets sätt att välja ut svarsordet med.
    Input
        En lista med ord
        En siffra som anger önskad längd
        En indikaton på om samma bokstav får förekomma mer än en gång i ordet eller om alla bokstäver måste vara unika.
    
    Funktionalitet
        Välj slumpmässigt ut ett ord ur listan som upfyller de valda kriterina
        Hantera vad som händer när inget ord passar kriterna
    
    Outputa det valda ordet ()

    
    **Separation:**

    Algoritm A
    Fråga efter 2 inputs (regex för att ta bort alla ickebokstäver (inkl ' ')? och sätta en max längd? kontrollera så att gissningen har samma längd som svaret?)
        Lösning 1 (fel)
        Gå igenom varje bokstav från gissningen och jämför med alla bokstäver i svaret
            Om bokstaven inte finns med alls 
                skapa objektet baserat på I
            annars
                kontrollera svaret om hur många gånger samma bokstav finns med
                    om bokstaven i svaret endast finns med en gång
                        kontrollera gissningen och se hur många gånger bokstaven finns med
                            om en gång
                                Sätt objektet till M om det inte är på samma plats som i svaret
                                sätt objektet till C om det är på samma plats som i svaret
                            annars
                                loppa igenom så många gånger som bostaven finns i gissningen
                                    Om någon av gissningarna är på samma plats som svaret
                                        om denna gisnings samma som svaret
                                            sätt objektet till C
                                        annars
                                            bryt
                                    annars
                                        sätt objektet till M
                                        och sätt den andra bokstaven i gissningen till I
    
        Lösning 2 (förhoppningsvis rätt)
        Göra om bägge strängar till lower/uppercase
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
        (dra av poäng för felaktiva svar -2 I / -1 M / 0 C Man börjar på 50 p?)

    Algorimt B
    Fråga efter 3 inputs (regex för att ta bort alla ickebokstäver (och ' ')? och sätta en max längd? kontrollera så att gissningen har samma längd som svaret?)
        om man matar in en lista med ord, hur vet man när man matat färdigt med ord och vill gå vidare till nästa input ?
        Göra om bägge alla ord till lower/uppercase
    lopp så länge lista med redan kontrollerade ord < ord listan
        Random på längden ord
        kontrollera om slumpmässigt valt ord matchar kritererna och inte finns med i redan kontrollerade ord
            om ja returnea
            annars lägg till ordet i en ny lista
    Alternativt
        kontrollera alla ord 
            välj ut de som matchar kriterna 
                random på de ord som matchar kriterna 
            om inte finns något ord som matchar 
                returnera ett felmeddlane? eller välj ett ord ur en fördefinierad lista
    Output

*/

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

// Input for Algorithm A
const rl = readline.createInterface({ input, output });

let answer = await rl.question('Enter the answer: ');

while (!answer.match(/^[a-öA-Ö]+$/g) || answer.length > 30) {
    answer = await rl.question('The answer can only contains letters and must be shorter then 30 letters, please try again: ');
}

let guess = await rl.question('Enter the guess: ');

while (!guess.match(/^[a-öA-Ö]+$/g) || guess.length != answer.length) {
    guess = await rl.question(`Your guess has to be ${answer.length} letters long and only contain letters, please try again: `);
}

rl.close();

console.log(`Your guess was ${guess} and the answer was ${answer}`)