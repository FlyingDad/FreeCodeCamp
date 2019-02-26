const pagesNumberingWithInk = (current, numberOfDigits) => {

}

// You work in a company that prints and publishes books. You are responsible for designing the page numbering mechanism in the printer. You know how many digits a printer can print with the leftover ink. Now you want to write a function to determine what the last page of the book is that you can number given the current page and numberOfDigits left. A page is considered numbered if it has the full number printed on it (e.g. if we are working with page 102 but have ink only for two digits then this page will not be considered numbered).

// It's guaranteed that you can number the current page, and that you can't number the last one in the book.

// Example

let current = 1, numberOfDigits = 5;//, the output should be
console.log(pagesNumberingWithInk(current, numberOfDigits));// = 5.

// The following numbers will be printed: 1, 2, 3, 4, 5.);//

current = 21, numberOfDigits = 5;//, the output should be
console.log(pagesNumberingWithInk(current, numberOfDigits));// = 22.

// The following numbers will be printed: 21, 22.

current = 8, numberOfDigits = 4;//, the output should be
console.log(pagesNumberingWithInk(current, numberOfDigits));// = 10.

// The following numbers will be printed: 8, 9, 10.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer current

// A positive integer, the number on the current page which is not yet printed.

// Guaranteed constraints:
// 1 ≤ current ≤ 1000.