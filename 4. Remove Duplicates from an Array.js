const removeDuplicates = (arr) => {
  const seen = {};
  let unique = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (!seen[arr[i]]) {
      unique.push(arr[i]);
      seen[arr[i]] = true;
    }
  }
  return unique;
};

console.log(removeDuplicates([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

//here time complexity is O(n) and space complexity is O(n)
