/* 
    Teststrategi:
    Väljer att inte testa inputen för felaktigheter så som fel längd på gissning, uppercase vs lowercase och annat än bokstäver p.g.a. av att det är redan kontrollerat vid inputen
    Med denna mockdata testar alla möjligt fall(förutom de fallen som beskrivs på rad 3) som krävs för att kontrollera om algoritmen B fungerar som den ska.
    
    Jag testar att skicka in hela listan och ska få ett random ord tillbaka baserat på längd. Gör det 8 gånger för att testa ord med olika längd.

    Jag testar att skicka in hela listan 7 gånger (för jag har ord upp till 8 bokstäver och för varje längd så har jag minst en sträng/ord med dubbletter av en bokstav i) och testar att jag får tillbaka ett ord som är unikt för varje längd. (behövs ju inte för ord med en bokstav, för det kan ju inte vara ounikt)

    Jag testar att skicka in ordlistan med kriterier som inte matchar några ord
	
*/

import { describe, expect, it } from "@jest/globals";
import wordList from "../js/wordList.js";

const WORDLISTS = [
	"ö",
	"ff",
	"al",
	"ge",
	"ko",
	"yr",
	"ll",
	"sko",
	"apa",
	"hav",
	"tal",
	"xxl",
	"taxi",
	"hund",
	"kaka",
	"anna",
	"banan",
	"bambu",
	"hosta",
	"llool",
	"kapten",
	"lllooo",
	"aaaaaa",
	"munksal",
	"fiskfis",
	"havsregn",
	"hundvakt",
	"kabanoss",
	"aakkeeoo",
	"gurkmeja",
];

describe("wordList()", () => {
	it("Should return word with a specifik length", () => {
		for (let i = 1; i < 9; i++) {
			
            let result = wordList(WORDLISTS, i, false);
            
			expect(result.length).toBe(i);
		}
	});

	it("Should return a word with unique letters", () => {
		for (let i = 2; i < 9; i++) {

			const result = wordList(WORDLISTS, i, true);

			let slicedWord = "";

			for (let j = 0; j < result.length; j++) {

				if (j < result.length - 1) {
					slicedWord = result.slice(j + 1);

					if (slicedWord.includes(result.charAt(j))) {
						result = false;
					}
				}
			}

			expect(result).toBe(result);
		}
	});

    it("Should return false because no words matched the criteria", () => {

        for (let i=0; i<7; i++) {

            const result = wordList(WORDLISTS, (i+10), true);

            expect(result).toBe(false);
        }
    })
});
