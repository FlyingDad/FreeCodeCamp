function sumPrimes(num) {
  var sum = 0;
  for(var i = 2; i <= num; i++) {
    if(isPrime(i)) {
      sum += i;
    }
  }

function isPrime(value) {
  for(var i = 2; i < value; i++) {
      if(value % i === 0) {
          return false;
      }
  }
  return value > 1;
}

  return sum;
}

console.log(sumPrimes(10));// should return a number.
console.log(sumPrimes(100));// should return 17.
console.log(sumPrimes(977));// should return 73156.


// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

// The provided number may not be a prime.