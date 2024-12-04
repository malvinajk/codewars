// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".



function rot13(message) {
    let coded = message.split("").map((char) => char.charCodeAt(0));
    let asciiToChar = coded.map(function (x) {
        if ((x >= 97 && x <= 109) || (x >= 65 && x <= 77)) {
            return x + 13;
        } else if ((x >= 110 && x <= 122) || (x >= 78 && x <= 90)) {
            return x - 13;
        } else {
            return x;
        }
    })

    return String.fromCharCode(...asciiToChar);

}