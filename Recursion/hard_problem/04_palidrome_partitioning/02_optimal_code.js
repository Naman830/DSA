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
}
