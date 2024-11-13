// The main idea is to count all the occurring characters in a string.If you have a string like aba, then the result should be { 'a': 2, 'b': 1 }.

// What if the string is empty ? Then the result should be empty object literal, {}.

function count(string) {
    let arr = string.split("");
    let count = {};
    arr.forEach(num => {
        if (count[num]) {
            count[num] += 1;
        } else {
            count[num] = 1;
        }
    })
    return count;
}