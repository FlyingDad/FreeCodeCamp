function longestDigitsPrefix(inputString) {
    let re = /^(\d+).*/;
    let result = inputString.match(re);
    console.log(result[1])
    // return result[0];
}

let inputString="123aa1"//, the output should be
console.log(longestDigitsPrefix(inputString))// = "123".