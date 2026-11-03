function suggestedProducts(products, searchWord) {
  const result = [];

  // Sort the products once.
  products.sort();

  let prefix = "";

  // Process each character of the search word.
  for (const char of searchWord) {
    prefix += char;

    const suggestions = [];

    // Search through the sorted products.
    for (const product of products) {
      // Check whether the product starts with the prefix.
      if (product.startsWith(prefix)) {
        suggestions.push(product);
      }

      // We only need three suggestions.
      if (suggestions.length === 3) {
        break;
      }
    }

    result.push(suggestions);
  }

  return result;
}

const products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];

const searchWord = "mouse";

console.log(suggestedProducts(products, searchWord));

/*
Time :- O(N log N + M × N × L) 
Auxiliary space :- O(1) for the search itself, excluding the output and sorting implementation 
*/
