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
