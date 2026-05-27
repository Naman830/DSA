// In multiple recursion, one function calls itself more than one time.
// one function is making two recursive calls.
// That is called multiple recursion.

// Fibonacci Number
// 0, 1, 1, 2, 3, 5, 8, 13, 21...

/*
Recursive Tree for fib(5)

fib(5)
├── fib(4)
│   ├── fib(3)
│   │   ├── fib(2)
│   │   │   ├── fib(1)
│   │   │   └── fib(0)
│   │   └── fib(1)
│   └── fib(2)
│       ├── fib(1)
│       └── fib(0)
└── fib(3)
    ├── fib(2)
    │   ├── fib(1)
    │   └── fib(0)
    └── fib(1)
*/

function fibonacci(n) {
  // Base case 1:
  // Fibonacci of 0 is 0
  if (n === 0) {
    return 0;
  }

  // Base case 2:
  // Fibonacci of 1 is 1
  if (n === 1) {
    return 1;
  }

  // Multiple recursion:
  // Here function calls itself two times
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5)); // Output: 5
