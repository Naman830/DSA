function sort012Dutch(arr) {
  let low = 0;
  let high = arr.length - 1;
  let mid = 0;

  while (low <= high) {
    if (arr[mid] === 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];

      // Move both low and mid forward
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }
  return arr;
}
console.log(sort012Dutch([2, 0, 2, 1, 1, 0]));
