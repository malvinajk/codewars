// You get an array of numbers, return the sum of all of the positives ones.

//     Example[1, -4, 7, 12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

//My solution

function positiveSum(arr) {
    let positives = arr.filter(item => item >= 0);
    let sum = positives.reduce((x, y) => {
        return x + y;
    }, 0)
    return sum;
}