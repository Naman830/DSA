// A. MEANING OF STRING
// A string is simply a sequence of characters.
// Think of it like a word or sentence where each letter has its own position (index).

let str = "hello";

// Memory looks like this:
/*
| Index     | 0 | 1 | 2 | 3 | 4 |
| --------- | - | - | - | - | - |
| Character | h | e | l | l | o |
*/
// Each character can be accessed using its index.

console.log(str[0]); // h
console.log(str[3]); // l

// =================================================================
// =================================================================

// B. FOR FINDING LENGTH OF STRING
let str2 = "coding";
console.log(str2.length); // 6

// =================================================================
// =================================================================

// C. Strings are Immutable
// You cannot change a character directly. ❌ Wrong

let str3 = "cat";
str3[0] = "b";
console.log(str3); // cat

// Nothing changes. Instead create a new string.

let str4 = "cat";
str4 = "b" + str4.slice(1);
console.log(str4); // bat

// =================================================================
// =================================================================

const str5 = "Naman";
console.log(str5.trim()); // trim remove the nearby space
console.log(str5.indexOf("m")); // index of help to find index of chracter
console.log(str5.lastIndexOf("n")); // what if there is multiple chracter we can check last index of chracter
