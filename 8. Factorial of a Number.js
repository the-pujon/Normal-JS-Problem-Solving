const factorial = (num) => {
  if (num === 0 || num === 1) return 1;
  return num * factorial(num - 1);
};

const factorial2 = (num) => {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
};

console.log(factorial(5)); // 120
console.log(factorial2(5)); // 120

//here time complexity is O(n) and space complexity is O(1)
