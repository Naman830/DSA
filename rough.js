function leaderInArray(arr) {
  let maxRight = -Infinity;
  let leaders = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] >= maxRight) {
      leaders.push(arr[i]);
      maxRight = arr[i];
    }
  }
  leaders.reverse();

  return leaders;
}

console.log(leaderInArray([1, 2, 3, 2, 1]));
