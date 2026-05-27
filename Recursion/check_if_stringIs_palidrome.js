/*
"madam" → palindrome
"racecar" → palindrome
"hello" → not palindrome
*/

function isPalindrome(str, left = 0, right = str.length - 1) {
    // Base case:
    // If left crosses right, whole string is checked
    if (left >= right) {
        return true;
    }

    // If characters are not same, it is not palindrome
    if (str[left] !== str[right]) {
        return false;
    }

    // Move both pointers inside
    return isPalindrome(str, left + 1, right - 1);
}

console.log(isPalindrome("madam"));   // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false