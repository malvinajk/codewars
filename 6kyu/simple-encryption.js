// Implement a pseudo - encryption algorithm which given a string S and an integer N concatenates all the odd - indexed characters of S with all the even - indexed characters of S, this process should be repeated N times.

//     Examples:

// encrypt("012345", 1)  => "135024"
// encrypt("012345", 2)  => "135024" -> "304152"
// encrypt("012345", 3)  => "135024" -> "304152" -> "012345"

// encrypt("01234", 1)  => "13024"
// encrypt("01234", 2)  => "13024" -> "32104"
// encrypt("01234", 3)  => "13024" -> "32104" -> "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

function encrypt(text, n) {

    if (!text || n <= 0) {
        return text;
    }


    for (let i = 1; i <= n; i++) {
        let arr = text.split("");
        let odd = [];
        let even = [];
        even = arr.filter((item, index) => (index % 2 === 0));
        odd = arr.filter((item, index) => (index % 2 !== 0));
        let result = odd.concat(even)
        text = result.join("")
    }

    return text;

}

function decrypt(encryptedText, n) {

    if (!encryptedText || n <= 0) {
        return encryptedText;
    }

    for (let i = 1; i <= n; i++) {
        let half = encryptedText.length / 2;
        let odd = encryptedText.slice(0, half);
        let even = encryptedText.slice(half);

        let original = [];
        for (let i = 0; i < encryptedText.length; i++) {
            if (i % 2 === 0) {
                original.push(even[i / 2]);
            } else {
                original.push(odd[Math.floor(i / 2)]);
            }
        }
        encryptedText = original.join("");

    }

    return encryptedText;

}