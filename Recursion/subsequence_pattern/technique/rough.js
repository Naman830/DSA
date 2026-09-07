function printAllSubsequences(index, arr, current) {
  // Base case:
  // We have processed all elements.
  if (index === arr.length) {
    console.log(current);
    return;
  }

  // --------------------------------
  // 1. TAKE the current element
  // --------------------------------
  current.push(arr[index]);

  // 2. RECURSE
  // Move to the next element
  printAllSubsequences(index + 1, arr, current);

  // --------------------------------
  // 3. BACKTRACK / UNDO
  // --------------------------------
  // Remove the element so that we
  // can explore the "don't take" branch.
  current.pop();

  // --------------------------------
  // 4. DON'T TAKE the current element
  // --------------------------------
  printAllSubsequences(index + 1, arr, current);
}

// Test
printAllSubsequences(0, [3, 1], []);
