function multisum(n) {
  var i;
  var sum = 0;

  for (i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));   // 234168