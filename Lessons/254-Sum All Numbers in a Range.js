function sumAll(arr) {
  arr.sort(function (a, b) {  return a - b;  });
  var sum = 0;
  var max = arr.reduce(function(a, b) {
    return Math.max(a, b);
  });
  var min = arr.reduce(function(a, b) {
    return Math.min(a, b);
  });
  for(var i = min; i <= max; i++){
    console.log(sum);
    sum += i
  }
  return sum;
}

console.log('result: ' + sumAll([10, 5]));
