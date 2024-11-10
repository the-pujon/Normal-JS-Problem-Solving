const countOccurrences = (str, char) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) count++;
  }
  return count;
};

console.log(countOccurrences("hello world", "o")); // 2

//here time complexity is O(n) and space complexity is O(1)
