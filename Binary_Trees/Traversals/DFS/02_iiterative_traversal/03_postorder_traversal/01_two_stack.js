/*
Key Observation 🧠

stack1 → process nodes.
stack2 → store nodes in reverse-postorder.
Pop from stack2 → get Left → Right → Root.

For every node:
Pop from stack1
Push into stack2
Push its left, then right child into stack1

Pattern:
stack1 → stack2 → answer

Approach:-
Start with the root in stack1.

Take a node from stack1, put it into stack2, then push its left and right children into stack1. Finally, pop everything from stack2 to get postorder
*/
