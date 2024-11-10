const isPalindrome = (str) => {
  //time complexity is O(n) and space complexity is O(n)
  str = str.toLowerCase();
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse === str;
};

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
