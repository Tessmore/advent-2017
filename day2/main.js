"use strict";

/* --- Day 2: Corruption Checksum ---

    For example, given the following spreadsheet:

    5 1 9 5
    7 5 3
    2 4 6 8

    The first row's largest and smallest values are 9 and 1, and their difference is 8.
    The second row's largest and smallest values are 7 and 3, and their difference is 4.
    The third row's difference is 6.
    In this example, the spreadsheet's checksum would be 8 + 4 + 6 = 18.

    What is the checksum for the spreadsheet in your puzzle input?
*/

const input = require('fs').readFileSync('input.txt', 'utf8');
const lines = input.split("\n");


function getRowSum(row) {
    var min = 1000000;
    var max = -1;

    for (var i=0; i < row.length; i++) {
        var column = Number(row[i]);

        if (column < min) {
            min = column;
        }

        if (column > max) {
            max = column;
        }
    }

    return max - min;
}


var checksum = 0;

for (var i=0; i < lines.length; i++) {
    var row = lines[i].split(/\s+/);

    checksum += getRowSum(row);
}

console.log(checksum);
