const countVowels = (str) => {
  const vowels = { a: true, e: true, i: true, o: true, u: true };
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels[str[i]]) {
      count++;
    }
  }
  return count;
};

console.log(countVowels("hello")); // 2
console.log(countVowels("world")); // 1
