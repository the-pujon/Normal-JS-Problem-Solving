const sumOfDigits = (num) => {
  num = num.toString();
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += parseInt(num[i]);
  }
  return sum;
};

console.log(sumOfDigits(12345)); // 15
console.log(sumOfDigits(9876)); // 30

//here time complexity is O(n) and space complexity is O(1)
