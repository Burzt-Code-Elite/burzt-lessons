function substrings(inputString, dictionary) {
    const result = {};

    const cleanedInput = inputString.toLowerCase();

    for (let i = 0; i < cleanedInput.length; i++) {
        for (let j = i + 1; j <= cleanedInput.length; j++) {
            const substring = cleanedInput.substring(i, j);
            if (dictionary.includes(substring)) {
                result[substring] = (result[substring] || 0) + 1;
            }
        }
    }

    return result;
}

const dictionary = ["below", "down", "go", "going", "horn", "how", "howdy", "it", "i", "low", "own", "part", "partner", "sit"];
const inputString = "Howdy partner, sit down! How's it going?";

const output = substrings(inputString, dictionary);
console.log(output);
