function partition(s) {
  const result = [];
  const current = [];

  // Checks whether s[left...right] is a palindrome
  function isPalindrome(left, rigth) {
    while (left < rigth) {
      // If characters don't match, it is not a palindrome
      if (s[left] !== s[rigth]) {
        return false;
      }

      left++;
      rigth--;
    }
    // All characters matched
    return true;
  }

  function backtrack(start) {
    // If we reached the end of the string,
    // we have created one complete valid partition.
    if (start === s.length) {
      result.push([...current]);
      return;
    }

    // Try every possible substring starting from `start`
    for (let end = start; end < s.length; end++) {
      if (!isPalindrome(start, end)) {
        continue;
      }

      // Choose:
      // Add the palindrome substring to our current partition
      current.push(s.slice(start, end + 1));

      backtrack(end + 1);

      current.pop();
    }
  }
  // Start partitioning from index 0
  backtrack(0);

  return result;
}

// Test cases

console.log(partition("aab"));
// [
//   [ 'a', 'a', 'b' ],
//   [ 'aa', 'b' ]
// ]

console.log(partition("a"));
// [ [ 'a' ] ]

console.log(partition("aba"));
// [
//   [ 'a', 'b', 'a' ],
//   [ 'aba' ]
// ]
