const secondLargest = (arr) => {
  let largest = arr[0];
  let secondLargest = arr[1];
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
};

console.log(secondLargest([1, 2, 3, 4, 5])); // 4
console.log(secondLargest([5, 3, 8, 1, 4])); // 4

//here time complexity is O(n) and space complexity is O(1)
