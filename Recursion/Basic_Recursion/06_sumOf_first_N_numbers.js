// 1. Parameterized Way
// In parameterized recursion, we carry the answer with us using an extra parameter.

function sumParameterized(n, total) {
    // Base case:
    // When n becomes 0, we have added all numbers
    if (n === 0) {
        console.log(total);
        return;
    }

    // Add current n into total
    // Then reduce n by 1
    sumParameterized(n - 1, total + n);
}

sumParameterized(5, 0);

/*
Dry Run
sumParameterized(5, 0)
sumParameterized(4, 5)
sumParameterized(3, 9)
sumParameterized(2, 12)
sumParameterized(1, 14)
sumParameterized(0, 15)
*/

// ===================================================================================
// ===================================================================================
// ===================================================================================
// ===================================================================================

// 2. Functional Way
// In functional recursion, the function itself returns the answer.
// We do not carry total.

function sumFunctional(n) {
    // Base case:
    // Sum of first 1 number is 1
    if (n === 1) {
        return 1;
    }

    // Current number + sum of previous numbers
    return n + sumFunctional(n - 1);
}

console.log(sumFunctional(5));


/*
Dry Run

sumFunctional(5)
= 5 + sumFunctional(4)
= 5 + 4 + sumFunctional(3)
= 5 + 4 + 3 + sumFunctional(2)
= 5 + 4 + 3 + 2 + sumFunctional(1)
= 5 + 4 + 3 + 2 + 1
= 15
*/