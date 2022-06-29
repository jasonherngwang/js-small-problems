function multisum(num) {
  let sum = 0;
  for (let n = 1; n <= num; n += 1) {
    if (n % 3 === 0 || n % 5 === 0) sum += n;
  }
  return sum;
}
console.log(multisum(3)); // 3
console.log(multisum(5)); // 8
console.log(multisum(10)); // 33
console.log(multisum(1000)); // 234168
