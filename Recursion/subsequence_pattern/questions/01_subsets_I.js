function printAllSubsequences(arr) {
  function solve(index, current) {
    // Base case
    if (index === arr.length) {
      console.log(current);
      return;
    }

    // TAKE
    current.push(arr[index]);
    solve(index + 1, current);

    // BACKTRACK
    current.pop();

    // DON'T TAKE
    solve(index + 1, current);
  }

  solve(0, []);
}

printAllSubsequences([3, 1]);

/*
| Complexity                 | Print All   |
| -------------------------- | ----------- |
| **Time**                   | `O(n × 2ⁿ)` |
| **Space**                  | `O(n)`      |
| **If storing all answers** | `O(n × 2ⁿ)` |
*/
