function suggestedProducts(products, searchWord) {
  const result = [];

  // Step 1: Sort the products lexicographically.
  products.sort();

  // Step 2: Build each prefix of the search word.
  let prefix = "";

  for (const char of searchWord) {
    prefix += char;

    // Step 3: Binary search for the first product
    // that is lexicographically >= the prefix.
    let left = 0;
    let right = products.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);

      if (products[mid] < prefix) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    // Step 4: Collect at most three matching products
    // starting from the binary search position.
    const suggestions = [];

    for (let i = left; i < products.length && suggestions.length < 3; i++) {
      // Stop when the product no longer starts with
      // the current prefix.
      if (!products[i].startsWith(prefix)) {
        break;
      }

      suggestions.push(products[i]);
    }

    // Step 5: Store suggestions for this prefix.
    result.push(suggestions);
  }

  return result;
}

// Example
const products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];

const searchWord = "mouse";

console.log(suggestedProducts(products, searchWord));
