/* 
    Teststrategi:
    Väljer att inte testa inputen för felaktigheter så som fel längd på gissning, uppercase vs lowercase och annat än bokstäver p.g.a. av att det är redan kontrollerat vid inputen

	Har skapat en array med mockdata där jag även inkluderat rätt svar som krävs.
	Denna mockdata testar alla möjligt fall(förutom de fallen som beskrivs på rad 3) som krävs för att kontrollera om algoritmen A fungerar som den ska.
	Jag har delat upp det i 4 tester för att enklare hitta felen.
		
		Ett test för att kolla att resultatet från checkGuess() ger tillbaka samma bokstäver och rätt ordningen som gissningen
		Ett test för att kolla att resultatet för alla bokstäver är correkt när gissning och svaret är samma
		Ett test för att kolla att resultatet för alla bokstäver är incorrekt när alla bokstäver i gissning och svaret är olika
		Ett test för att kolla att resultatet blir samma som min mockdata efter att den gått igenom checkGuess()


*/

import { describe, expect, it } from "@jest/globals";
import checkGuess from "../js/checkGuess.js";

const TESTWORDS = [
	{
		guess: "HALLÅ",
		answer: "CYKLA",
		result: [
			{ letter: "H", result: "incorrect" },
			{ letter: "A", result: "misplaced" },
			{ letter: "L", result: "incorrect" },
			{ letter: "L", result: "correct" },
			{ letter: "Å", result: "incorrect" },
		],
	},
	{
		guess: "HALAL",
		answer: "CYKLA",
		result: [
			{ letter: "H", result: "incorrect" },
			{ letter: "A", result: "misplaced" },
			{ letter: "L", result: "misplaced" },
			{ letter: "A", result: "incorrect" },
			{ letter: "L", result: "incorrect" },
		],
	},
	{
		guess: "sssssssssss",
		answer: "MISsISsIpPI",
		result: [
			{ letter: "S", result: "incorrect" },
			{ letter: "S", result: "incorrect" },
			{ letter: "S", result: "correct" },
			{ letter: "S", result: "correct" },
			{ letter: "S", result: "incorrect" },
			{ letter: "S", result: "correct" },
			{ letter: "S", result: "correct" },
			{ letter: "S", result: "incorrect" },
			{ letter: "S", result: "incorrect" },
			{ letter: "S", result: "incorrect" },
			{ letter: "S", result: "incorrect" },
		],
	},
	{
		guess: "ismisppsiis",
		answer: "MISsISsIpPI",
		result: [
			{ letter: "I", result: "misplaced" },
			{ letter: "S", result: "misplaced" },
			{ letter: "M", result: "misplaced" },
			{ letter: "I", result: "misplaced" },
			{ letter: "S", result: "misplaced" },
			{ letter: "P", result: "misplaced" },
			{ letter: "P", result: "misplaced" },
			{ letter: "S", result: "misplaced" },
			{ letter: "I", result: "misplaced" },
			{ letter: "I", result: "misplaced" },
			{ letter: "S", result: "misplaced" },
		],
	},
	{
		guess: "anal",
		answer: "fann",
		result: [
			{ letter: "A", result: "misplaced" },
			{ letter: "N", result: "misplaced" },
			{ letter: "A", result: "incorrect" },
			{ letter: "L", result: "incorrect" },
		],
	},
	{
		guess: "kamel",
		answer: "KAMEL",
		result: [
			{ letter: "K", result: "correct" },
			{ letter: "A", result: "correct" },
			{ letter: "M", result: "correct" },
			{ letter: "E", result: "correct" },
			{ letter: "L", result: "correct" },
		],
	},
	{
		guess: "analallaa",
		answer: "analkanal",
		result: [
			{ letter: "A", result: "correct" },
			{ letter: "N", result: "correct" },
			{ letter: "A", result: "correct" },
			{ letter: "L", result: "correct" },
			{ letter: "A", result: "misplaced" },
			{ letter: "L", result: "misplaced" },
			{ letter: "L", result: "incorrect" },
			{ letter: "A", result: "correct" },
			{ letter: "A", result: "incorrect" },
		],
	},
];

// Testobjects som bara ska resultera i incorrect
const TESTWORDSINCORRECT = [
	{ guess: "gate", answer: "oooo" },
	{ guess: "llll", answer: "aaaa" },
	{ guess: "linux", answer: "eokfv" },
];

// Testobjects som bara ska resultera i correct
const TESTWORDSCORRECT = ["HAND", "SKOKLÄMMA", "JAGÄRENBÄVER"];

describe("checkGuess()", () => {
	it("Should return an array of objects that has the same letters as the input", () => {
		for (let i = 0; i < TESTWORDS.length; i++) {
			let result = checkGuess(TESTWORDS[i].guess, TESTWORDS[i].answer);

			for (let j = 0; j < TESTWORDS[i].guess.length; j++) {
				expect(result[j].letter).toBe(TESTWORDS[i].guess[j].toUpperCase());
			}
		}
	});

	it('Should return an array of objects that has "correct" as result for each letter', () => {
		for (let i = 0; i < TESTWORDSCORRECT.length; i++) {
			let result = checkGuess(TESTWORDSCORRECT[i], TESTWORDSCORRECT[i]);

			for (let j = 0; j < TESTWORDSCORRECT[i]; j++) {
				expect(result[j].result).toBe("correct");
			}
		}
	});

	it('Should return an array of objects that has "incorrect" as result for each letter', () => {
		for (let i = 0; i < TESTWORDSINCORRECT.length; i++) {
			let result = checkGuess(TESTWORDSINCORRECT[i].guess, TESTWORDSINCORRECT[i].answer);

			for (let j = 0; j < TESTWORDSINCORRECT[i].guess.length; j++) {
				expect(result[j].result).toBe("incorrect");
			}
		}
	});

	it("Should return an object that has the same result for each letter as the result for the same letters in the mockdata", () => {
		for (let i = 0; i < TESTWORDS.length; i++) {
			let result = checkGuess(TESTWORDS[i].guess, TESTWORDS[i].answer);

			for (let j = 0; j < TESTWORDS[i].guess.length; j++) {
				expect(result[j].result).toBe(TESTWORDS[i].result[j].result);
			}
		}
	});
});
