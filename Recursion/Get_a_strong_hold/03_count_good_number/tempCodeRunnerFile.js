
function countGoodNumbersBrute(n) {
  let count = 0;

  // Recursively generate every possible good number
  function generate(index) {
    // create all n position
    if (index === n) {
      count++;
      return;
    }

    // check if the number is positive
    if (n % 2 === 0) {
      const evenDigits = [0, 2, 4, 6, 8];

      for (let digit of evenDigits) {
        generate(index + 1);
      }
    } else {
      let oddDigtis = [2, 3, 5, 7];

      for (let digit of oddDigtis) {
        generate(index + 1);
      }
    }
  }
  generate(0);
  return count;
}
console.log(countGoodNumbersBrute(1)); // 5
console.log(countGoodNumbersBrute(2)); // 20
console.log(countGoodNumbersBrute(4)); // 40
