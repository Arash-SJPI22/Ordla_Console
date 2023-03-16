/* 
    Teststrategi:
    Väljer att inte testa inputen för felaktigheter så som fellängd på gissning och annat än bokstäver p.g.a. av att jag kör Regex och för att jag good faith i den här uppgiften
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
];

const TESTWORDS2 = [
	{ guess: "gate", answer: "oooo" },
	{ guess: "llll", answer: "aaaa" },
	{ guess: "linux", answer: "eokfv" },
];

describe("checkGuess()", () => {
	it("Should return an array of objects that has the same letters as the input", () => {
		for (let i = 0; i < TESTWORDS.length; i++) {
			let result = checkGuess(TESTWORDS[i].guess, TESTWORDS[i].answer);

			for (let j = 0; j < TESTWORDS[i].guess.length; j++) {
				expect(result[j].letter).toBe(TESTWORDS[i].result[j].letter);
			}
		}
	});

	it('Should return an array of objects that has "correct" as result for each letter', () => {
		for (let i = 0; i < TESTWORDS.length; i++) {
			let result = checkGuess(TESTWORDS[i].guess, TESTWORDS[i].answer);

			for (let j = 0; j < TESTWORDS[i].guess.length; j++) {
				expect(result[j].result).toBe(TESTWORDS[i].result[j].result);
			}
		}
	});

	it('Should return an array of objects that has "incorrect" as result for each letter', () => {
		for (let i = 0; i < TESTWORDS2.length; i++) {
			let result = checkGuess(TESTWORDS2[i].guess, TESTWORDS2[i].answer);

			for (let j= 0; j < TESTWORDS2.guess.length; j++) {
				expect(result[j].result).toBe("incorrect");
			}
		}

	});

	it("Should return an array of objects that has the right result for each word", () => {
		for (let i = 0; i < TESTWORDS.length; i++) {
			let result = checkGuess(TESTWORDS[i].guess, TESTWORDS[i].answer);

			for (let j = 0; j < TESTWORDS[i].guess.length; j++) {
				expect(result[j].result).toBe(TESTWORDS[i].result[j].result);
			}
		}

	});
});
