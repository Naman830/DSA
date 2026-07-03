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

// We can also check Boolean Values
console.log(str5.startsWith("n")); // true
console.log(str5.endsWith("m")); //false

// =================================================================
// =================================================================
const str6 = "Hello my name is Naman Singla";
// Extracting substring
console.log(str6.substring(13)); // substring take start and end number [if you keep end number empty it work till end]
console.log(str6.substring(13, -1)); // if you add -1 so it work reverse

// Similar is slice we use it previously
console.log(str6.slice(13));

// Converting Number into string
const convertedNumber = 123;
console.log(String(convertedNumber));

// Converting Object by using json and stringly else it show the error of object Object
const convertedObject = { name: "Naman" };
console.log(JSON.stringify(convertedObject));

// Convert Object string into original arry
const jsonString = '{"name": "Alice", "age": 25, "isAdmin": true}';
console.log(JSON.parse(jsonString));

// Converting Uppercase and lowerCase
console.log(str6.toUpperCase());
console.log(str6.toLowerCase());

// =================================================================
// =================================================================
// Every single chracter javascript choose upper or lower is ACII value

const aciiValues = "Yoo chico Yoo Jordan";

// I can Check the specific ACII Value
console.log(aciiValues.charCodeAt(0));

// We can check the chracter code value like 'A, B, C...'
console.log(String.fromCharCode(65));

// =================================================================
// =================================================================

// STRING COMPARISION
// If they are equal it show zero if not so -1
const one = "happy";
const two = "happy";
console.log(one.localeCompare(two));

// We check Existence of chracter in line by includes() true or false
const checkExistence = "Hey jordan how are you";
console.log(checkExistence.includes("jordan"));

// Splitting && Joining String

// It split for seprate words and we can also split specific words
console.log(checkExistence.split(" "));

// For joining array and also pass values
const joinArr = ["apple", "banana", "chicu"];
console.log(joinArr.join(" and "));
