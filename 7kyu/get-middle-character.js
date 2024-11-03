// You are going to be given a non - empty string.Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" -- > "es"
// "testing" -- > "t"
// "middle" -- > "dd"
// "A" -- > "A"

function getMiddle(s) {
    let arr = s.split('');
    let num = arr.length;
    if (num % 2 === 0) {
        let num2 = (num - 2) / 2;
        return arr.splice(num2, 2).join('');
    } else {
        let num2 = num / 2 - .5;
        return arr.splice(num2, 1).join('');
    }
}