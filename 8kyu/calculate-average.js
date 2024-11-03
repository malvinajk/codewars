// Write a function which calculates the average of the numbers in a given array.

//     Note: Empty arrays should return 0.

function findAverage(array) {
    let sum = array.reduce((acc, cv) => acc + cv, 0);
    return sum / array.length || 0;
}