/*
These are three different ways to write mathematical expressions.


What is an Operand?
An operand is the value or variable on which an operation is performed.

Example	   Operands
5 + 3	    5, 3
10 - 4	    10, 4
A * B	    A, B
x / y	    x, y

Numbers or variables = Operands

==============================================================================================

What is an Operator?
An operator is the symbol that tells us what operation to perform.

Operator    Meaning
+	        Addition
-	        Subtraction
*	        Multiplication
/	        Division
%	        Modulus (Remainder)

Rule:
Symbols like +, -, *, / = Operators
*/

// ==============================================================================================
// ==============================================================================================
// ==============================================================================================
// ==============================================================================================

/*
Let's take one expression: A + B
| Type        | Formula                  | Example |
| ----------- | ------------------------ | ------- |
| Infix       | Operand Operator Operand | A + B   |
| Prefix      | Operator Operand Operand | + A B   |
| Postfix     | Operand Operand Operator | A B +   |


1. Infix
Operator is IN the middle. 
Used by humans because it's easy to read and write.

2. Prefix
Operator comes before both operands.
Used by compilers/parsers because it doesn't need parentheses and is easy to evaluate.

3. Postfix
Operator comes after both operands.
Used by stacks, calculators (RPN), and compilers because it is very easy to evaluate using a stack.
*/

// ==============================================================================================
// ==============================================================================================
// ==============================================================================================
// ==============================================================================================

/*
the operator precedence (priority)

| **Priority**       | **Operator** | **What it does** |
| ------------------ | ------------ | ---------------- |
|    🥇 3 — Highest  | `^`          | Power            |
|    🥈 2 — Medium   | `*`          | Multiply         |
|    🥈 2 — Medium   | `/`          | Divide           |
|    🥈 2 — Medium   | `%`          | Remainder        |
|    🥉 1 — Lowest   | `+`          | Add              |
|    🥉 1 — Lowest   | `-`          | Subtract         |
*/
