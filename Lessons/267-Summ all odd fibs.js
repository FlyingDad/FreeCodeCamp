function sumFibs(num) {
  var fib1 = 1;
  var fib2 = 1;
  var sum = 2;
  if (num <= 2){ return num;}
  for(var i = 0; i < num - 2; i++){
    var temp = fib1 + fib2;
    fib1 = fib2;
    fib2 = temp;
    if(temp % 2 != 0 && temp <= num){
      //console.log(sum, temp);
      sum+= temp;
    }
  }
  return sum;
}


console.log(sumFibs(1));// should return a number.
console.log(sumFibs(1000));// should return 1785.
console.log(sumFibs(4000000));// should return 4613732.
console.log(sumFibs(4));// should return 5.
console.log(sumFibs(75024));// should return 60696.
console.log(sumFibs(75025));// should return 135721.


// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.