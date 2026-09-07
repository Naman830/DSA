function printONE(index, path) {
  // add a base condtition that if it meet so our recursion call is completed
  if (isValid(path)) {
    console.log(path);
    return true;
  }

  // try all possible chosises
  for (const choice of choices) {
    // add a one current element
    path.push(choice);

    // find the path is available oir not
    if (printONE(index + 1, path)) {
      return true;
    }

    // undo if choice is not correct
    path.pop();
  }

  return false;
}

// Start recursion
const found = printONE(0, []);
// Print something after recursion finishes
console.log("Answer found:", found);
