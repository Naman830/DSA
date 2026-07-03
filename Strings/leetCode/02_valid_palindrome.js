function palidrome(s) {
  let word = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let left = 0;
  let right = word.length - 1;

  for (let i = 0; i < word.length; i++) {
    if (word[left] !== word[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
let s = "race a car";

console.log(palidrome(s));

/*
TC: O(n)
SC: O(1)
*/
