function containDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
      i++;
    }
    return false;
  }
}

console.log(containDuplicates([2, 14, 18, 22, 22]));
