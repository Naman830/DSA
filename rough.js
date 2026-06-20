function binarySearch(arr, target) {
  let n = arr.length;
  let low = 0;
  let high = n - 1;
  let ans = arr.length;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    if (arr[mid] >= target) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}

console.log(binarySearch([1, 2, 4, 4, 5, 7], 9));
