// Complete the solution so that the function will break up camel casing, using a space between words.

//     Example
// "camelCasing"  => "camel Casing"
// "identifier"   => "identifier"
// ""             => ""

function solution(string) {
    let arr = string.split("")
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i].toUpperCase()) {
            arr.splice(i, 0, " ");
            i++;
        }
    }
    return arr.join("")
}