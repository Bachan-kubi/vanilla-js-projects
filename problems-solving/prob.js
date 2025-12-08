function fizzBuzz(n) {
    // The parameter 'n' is the upper limit, so we loop up to 'n'.
    for(let i=1; i<=n; i++) {
        let output = "";
        //01 
        if(i%3===0){
            output += "Fizz";
        }
        // 02
        if(i%5===0){
            output += "Buzz";
        }
        //03 print output
        if(output){
            console.log(output);
        }else{
            console.log(i);
        }
    }
    }

// The original code had a redundant call to fizzBuzz(15) outside of main, which is removed.
function main() {
    // Assuming the input is a single line containing the integer n
    const n = parseInt(15);
    fizzBuzz(n);
}
main();
//2 'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 * 1. INTEGER_ARRAY a
 * 2. INTEGER_ARRAY b
 */

/**
 * Compares two challenge rating triplets (arrays) element-by-element 
 * to determine Alice's and Bob's comparison points.
 *
 * @param {number[]} a - Alice's rating triplet (e.g., [5, 6, 7])
 * @param {number[]} b - Bob's rating triplet (e.g., [3, 6, 10])
 * @returns {number[]} - An array where the first element is Alice's total score 
 * and the second element is Bob's total score (e.g., [1, 1])
 */
function compareTriplets(a, b) {
    let aliceScore = 0;
    let bobScore = 0;

    // The for loop is the core of the solution: it iterates exactly 3 times.
    for (let i = 0; i < a.length; i++) {
        // Compare elements at the current index i
        if (a[i] > b[i]) {
            aliceScore += 1;
        } else if (a[i] < b[i]) {
            bobScore += 1;
        }
        // If a[i] === b[i], scores remain unchanged (neither gets a point)
    }

    // Return the final scores as an array [Alice's Score, Bob's Score]
    return [aliceScore, bobScore];
}

// --- Implementation of the required main function for the environment ---

function main() {
    // This line gets the file descriptor for output
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    // Read the first line of input (Alice's ratings)
    const a = readLine().trimEnd().split(' ').map(aTemp => parseInt(aTemp, 10));

    // Read the second line of input (Bob's ratings)
    const b = readLine().trimEnd().split(' ').map(bTemp => parseInt(bTemp, 10));

    // Call the comparison function
    const result = compareTriplets(a, b);

    // Write the result array to the output stream, joined by a space
    ws.write(result.join(' ') + '\n');

    ws.end();
}