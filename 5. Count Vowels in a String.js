const countVowels = (str) => {
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
    A: true,
    E: true,
    I: true,
    O: true,
    U: true,
  };
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels[str[i]]) {
      count++;
    }
  }
  return count;
};

//here time complexity is O(n) and space complexity is O(1)
console.log(countVowels("hello")); // 2
console.log(countVowels("world")); // 1
