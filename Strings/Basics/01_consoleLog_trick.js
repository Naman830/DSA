// So, you know that we use console.log() with parentheses. We can also use template literals (backticks ` `), which allow us to embed variables or expressions inside a string using ${}.

// 1st example
const name = "Naman";
console.log`Hey my name is ${name}`; // In this example, you can see that Naman appears outside the string because it is not part of the template literal. Instead, it is inserted from outside using ${Naman}.

// 2nd example
// We use function
function study(text, collegeName, collegeRollNo) {
  // Look at this text. Everything written inside the backticks (` `) is part of the string[ARRAY].
  // `collegeName` and `collegeRollNo` are inserted into the string from outside using `${}`
  // If you remove `${collegeRollNo}`, its value will no longer appear in the output.
  console.log(text, collegeName, collegeRollNo);
  return;
}

const college = "Indra gandhi college";
const rollNo = 125420;

study`I study from ${college} and my roll number is ${rollNo}`;
