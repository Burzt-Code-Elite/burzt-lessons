const encodeChar = (char, shift) => {
    const code = char.charCodeAt(0);

    if (code >= 65 && code <= 90) { // Uppercase letters
        return String.fromCharCode(((code - 65 + shift) % 26) + 65);
    } else if (code >= 97 && code <= 122) { // Lowercase letters
        return String.fromCharCode(((code - 97 + shift) % 26) + 97);
    }

    return char;
};


const decodeChar = (char, shift) => {
    const code = char.charCodeAt(0);

    if (code >= 65 && code <= 90) { // Uppercase letters
        return String.fromCharCode(((code - 65 - shift + 26) % 26) + 65);
    } else if (code >= 97 && code <= 122) { // Lowercase letters
        return String.fromCharCode(((code - 97 - shift + 26) % 26) + 97);
    }

    return char;
};


const caeserCipherEncode = (s, shift) => {
    return s
        .split('')
        .map(char => encodeChar(char, shift))
        .join('');
};

const caeserCipherDecode = (s, shift) =>{
    return s
        .split('')
        .map(char => decodeChar(char, shift))
        .join('');
}