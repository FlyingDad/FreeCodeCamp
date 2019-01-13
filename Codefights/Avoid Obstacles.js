function avoidObstacles(inputArray) {
	inputArray.sort((a, b) => a - b);

    let jumpLength = 1;
    
    for(let i = 0; i < inputArray.length;  i++) {
        for(let j = 0; j < inputArray.length; j++) {
            // check for bounce on element
            while(inputArray[j] % jumpLength === 0) {
                jumpLength++;
            }
        }
    }
    return jumpLength;

}


let inputArray= [5, 3, 6, 7, 9] //4
// console.log(avoidObstacles(inputArray))
inputArray= [2, 3] // 4
// console.log(avoidObstacles(inputArray))
inputArray= [1, 4, 10, 6, 2] //7
console.log(avoidObstacles(inputArray))
inputArray= [1000, 999] //6
console.log(avoidObstacles(inputArray))