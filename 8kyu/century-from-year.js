// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

//     Task
// Given a year, return the century it is in.

//     Examples
// 1705 -- > 18
// 1900 -- > 19
// 1601 -- > 17
// 2000 -- > 20
// 2742 -- > 28
// Note: this kata uses strict construction as shown in the description and the examples

function century(year) {
    let arr = year.toString().split("");
    if (arr.length <= 2) {
        return 1;
    } else if (arr.length === 3 && Number(arr[2]) >= 1) {
        return Number(arr[0]) + 1
    } else if (arr.length === 3 && Number(arr[2]) === 0) {
        return Number(arr[0])
    } else if (arr.length === 4 && Number(arr[3]) >= 1 || Number(arr[2]) >= 1) {
        return Number(arr[0] + arr[1]) + 1
    } else {
        return Number(arr[0] + arr[1])
    }
}