const isPalindrome = (str) => {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse === str;
};

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
