const gcd = (a, b) => {
	if ( ! b) {
			return a;
	}
	return gcd(b, a % b);
};

function countBlackCells(n, m) {
	return n + m + gcd(n, m) - 2
}

// https://www.cut-the-knot.org/Curriculum/Geometry/LineThroughGrid.shtml
// S = M + N - gcd(M, N)
// gcd = greatest common divosor


// Imagine a white rectangular grid of n rows and m columns divided into two parts by a diagonal line running from the upper left to the lower right corner. Now let's paint the grid in two colors according to the following rules:

// A cell is painted black if it has at least one point in common with the diagonal;
// Otherwise, a cell is painted white.
// Count the number of cells painted black.

// Example

let n = 3, m = 4;//, the output should be
console.log(countBlackCells(n, m));// = 6.

// There are 6 cells that have at least one common point with the diagonal and therefore are painted black.

n = 3, m = 3;//, the output should be
console.log(countBlackCells(n, m));// = 7.

// 7 cells have at least one common point with the diagonal and are painted black.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// The number of rows.

// Guaranteed constraints:
// 1 ≤ n ≤ 105.

// [input] integer m

// The number of columns.

// Guaranteed constraints:
// 1 ≤ m ≤ 105.