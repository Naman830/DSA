function largestNo(arr) {
  arr.sort((a, b) => a - b);

  let largest = arr[arr.length - 1];
  return largest;
}

console.log(largestNo([1, 2, 3, 6, 4, 7, 5, 8]));
