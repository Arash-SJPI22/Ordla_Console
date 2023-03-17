export default function wordList(list, length, unique) {
	list = list.map((word) => word.toUpperCase());
	
    // Removes all the unique words from the list
	if (unique) removeNonUnique(list);
	
	// Removes all words that dosen't match the length
	removeNonMatchingLength(list, length);

    // If there are any words left - picks a random word of the words left (they should all match the critera by now)
	if (list.length > 0) {

		return list[randomize(list)];

	} else {

		return false;
	}
}

function removeNonUnique(list) {

	for (let i = 0; i < list.length; i++) {
		let slicedWord = "";

		for (let j = 0; j < list[i].length; j++) {
	
            if (j < list[i].length - 1) {
	
                slicedWord = list[i].slice(j + 1);

				if (slicedWord.includes(list[i].charAt(j))) {
	
                    list.splice(i, 1);

					i--;
					break;
				}
			}
		}
	}

	return list;
}

function removeNonMatchingLength(list, length) {
	
    for (let i = 0; i < list.length; i++) {
	
        if (list[i].length != length) {

			list.splice(i, 1);
			i--;
		}
	}

	return list;
}

function randomize(list) {

	return Math.floor(Math.random() * list.length);
}
