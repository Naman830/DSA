/*
1 → 2 → 2 → 1 ✅ Palindrome
1 → 2 → 3 → 4 ❌ Not a palindrome
*/

// 1. Brute Force Approach (Using Extra Space)
/*
Traverse list
↓

Store every value in array
↓

Two pointers

left = 0
right = n-1
↓

Compare

If mismatch
return false

Else
left++
right--
↓

Finished
return true
*/

/*
Time : O(n)
Space : O(n)
*/

// 2. Optimal Approach (O(1) Space)
// Reverse only the second half of the linked list.
/*
Step 1: Find the Middle [Use Slow and Fast Pointer.]
    For Even: fast.next.next
    For Odd: fast.next
Step 2: Reverse the Second Half
Step 3: Compare Both Halves
Step 4: Restore the list by reversing the second half again. [Some interviewers appreciate this because the original linked list remains unchanged.]

*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Solution {
  isPalindrome(head) {
    // Empty list or single node is always a palindrome
    if (head === null || head.next === null) return true;

    // Step 1: Find the middle
    let slow = head;
    let fast = head;

    while (fast.next !== null && fast.next.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    // Step 2: Reverse the second half
    let secondHalf = this.reverse(slow.next);

    // Step 3: Compare both halves
    let firstHalf = head;
    let temp = secondHalf;

    while (temp !== null) {
      if (firstHalf.value !== temp.value) {
        return false;
      }

      firstHalf = firstHalf.next;
      temp = temp.next;
    }

    return true;
  }

  // Helper function to reverse a linked list
  reverse(head) {
    let prev = null;
    let curr = head;

    while (curr !== null) {
      let nextNode = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nextNode;
    }

    return prev;
  }
  print(head) {
    let current = head;
    let result = [];
    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }
    return console.log(result);
  }
}

const obj = new Solution();

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(2);
head.next.next.next.next = new Node(1);

const ans = obj.isPalindrome(head);

console.log(ans);
obj.print(head);

/*
| Approach            | Time     | Space    |
| ------------------- | -------- | -------- |
| Using Array         | **O(n)** | **O(n)** |
| Reverse Second Half | **O(n)** | **O(1)** |

*/
