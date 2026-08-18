# 🔷 Meta (Facebook) — Top 40 DSA Interview Questions

> **Folder rule:** every question in `DSA_Patterns_Notes` lives in **exactly one** company folder.
> Meta owns the *speed round* problems: tight mediums, trees, strings, and parentheses. Classics owned
> by another folder are listed under **Cross-references** at the bottom.

## What Meta actually tests

Meta's coding round is **45 minutes and almost always 2 problems**. That changes the strategy completely:

- **Speed > cleverness.** You have ~18 minutes per problem including explanation. They pick problems you should be able to code in one pass.
- **Meta reuses a *small, public* bank.** More than any other company, the exact same ~60 problems circulate. Grinding this list has an unusually high hit rate.
- **Trees and strings dominate.** Binary tree traversal variants, parentheses validation, and in-place array work show up in the majority of loops.
- **They score "no bugs on the first run".** Dry-run your code on an example before saying "done" — Meta interviewers explicitly note whether you self-caught bugs.
- **The follow-up is usually "now do it in O(1) extra space" or "now the input is huge".**

## Legend

- **Pattern** = what to recognise it as under time pressure
- ⬜ Not solved · 🔁 Solved once, needs revision · ✅ Solid

---

## Tier 1 — the Meta repeat bank (highest hit rate anywhere)

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 1 | Valid Palindrome II | Easy | Two pointers + one-skip branch | https://leetcode.com/problems/valid-palindrome-ii/ | ⬜ |
| 2 | Minimum Remove to Make Valid Parentheses | Medium | Stack of indices / two-pass marking | https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/ | ⬜ |
| 3 | Binary Tree Right Side View | Medium | BFS level order, last node per level | https://leetcode.com/problems/binary-tree-right-side-view/ | ⬜ |
| 4 | Lowest Common Ancestor of a Binary Tree | Medium | Post-order return-up recursion | https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/ | ⬜ |
| 5 | Merge Sorted Array | Easy | Two pointers filled **from the back** | https://leetcode.com/problems/merge-sorted-array/ | ⬜ |
| 6 | Add Strings | Easy | Digit-by-digit carry simulation | https://leetcode.com/problems/add-strings/ | ⬜ |
| 7 | Next Greater Element II | Medium | Monotonic stack on a circular array | https://leetcode.com/problems/next-greater-element-ii/ | ⬜ |
| 8 | Range Sum of BST | Easy | BST-pruned DFS | https://leetcode.com/problems/range-sum-of-bst/ | ⬜ |
| 9 | Simplify Path | Medium | Stack over split components | https://leetcode.com/problems/simplify-path/ | ⬜ |
| 10 | Diameter of Binary Tree | Easy | Height DFS with a global max | https://leetcode.com/problems/diameter-of-binary-tree/ | ⬜ |
| 11 | Binary Tree Maximum Path Sum | Hard | Post-order "gain" with global best | https://leetcode.com/problems/binary-tree-maximum-path-sum/ | ⬜ |
| 12 | Random Pick Index | Medium | Reservoir sampling | https://leetcode.com/problems/random-pick-index/ | ⬜ |
| 13 | Clone Graph | Medium | DFS/BFS + old→new HashMap | https://leetcode.com/problems/clone-graph/ | ⬜ |
| 14 | Continuous Subarray Sum | Medium | Prefix sum modulo + first-seen map | https://leetcode.com/problems/continuous-subarray-sum/ | ⬜ |
| 15 | Group Anagrams | Medium | HashMap keyed by sorted string / count signature | https://leetcode.com/problems/group-anagrams/ | ⬜ |

### 🔑 Crack notes — Tier 1

- **1. Valid Palindrome II** — On the first mismatch, try skipping left **or** skipping right and check if either remainder is a plain palindrome. Write the `isPal(s, i, j)` helper first; it makes the code half as long.
- **2. Minimum Remove to Make Valid Parentheses** — Push `(` indices on a stack; on `)` pop or mark it for deletion. Whatever is left on the stack at the end also gets deleted. Build the result from a Set of bad indices.
- **3. Binary Tree Right Side View** — BFS and take the last node of every level. If they say "no queue", DFS root→right→left and record the first node seen at each depth.
- **4. LCA of a Binary Tree** — `if (!root || root === p || root === q) return root;` recurse both sides; if both come back non-null, this node is the LCA. Handle the "node may not exist" follow-up.
- **5. Merge Sorted Array** — Fill from index `m+n-1` backwards so you never overwrite unread values. The trailing `while (n > 0)` for leftover `nums2` is the bug everyone ships.
- **6. Add Strings** — Walk both from the end with a `carry`, `while (i >= 0 || j >= 0 || carry)`. No `BigInt`, no `parseInt` on the whole string — that's the whole point of the question.
- **7. Next Greater Element II** — Iterate `2n` times with `i % n` to fake the circle; keep a decreasing stack of indices.
- **8. Range Sum of BST** — Prune: if `node.val < low` only go right, if `node.val > high` only go left. Say the pruning out loud — that's the signal, the naive traversal isn't.
- **9. Simplify Path** — Split on `/`, ignore `""` and `"."`, pop on `".."`, push otherwise. Join with `/` and prepend a slash.
- **10. Diameter of Binary Tree** — The DFS returns *height*; the answer is updated as `left + right` at every node. Returning the diameter from the recursion is the classic mistake.
- **11. Binary Tree Maximum Path Sum** — Same shape as #10: return `node.val + max(0, max(leftGain, rightGain))` upward, but update the global with `node.val + leftGain + rightGain`. Clamp negatives to 0.
- **12. Random Pick Index** — Reservoir sampling: on the k-th occurrence, replace the answer with probability `1/k`. The HashMap-of-lists version is accepted but uses `O(n)` memory — mention both.
- **13. Clone Graph** — The visited map *is* the algorithm: it prevents infinite recursion on cycles **and** stores the clones. Return the mapped node immediately if present.
- **14. Continuous Subarray Sum** — Same `prefix % k` seen at two indices ⇒ the middle sums to a multiple of `k`. Store the **earliest** index and require a length ≥ 2. Watch `k = 0` and negative-mod semantics.
- **15. Group Anagrams** — Sorted-string key is `O(n k log k)`; a 26-length count array joined into a string is `O(n k)`. Offer the second when they ask to optimise.

---

## Tier 2 — high-frequency Meta mediums

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 16 | Task Scheduler | Medium | Greedy counting / idle-slot formula | https://leetcode.com/problems/task-scheduler/ | ⬜ |
| 17 | Move Zeroes | Easy | In-place write pointer | https://leetcode.com/problems/move-zeroes/ | ⬜ |
| 18 | Remove Invalid Parentheses | Hard | BFS over removals / bounded DFS | https://leetcode.com/problems/remove-invalid-parentheses/ | ⬜ |
| 19 | Kth Smallest Element in a BST | Medium | In-order traversal with counter | https://leetcode.com/problems/kth-smallest-element-in-a-bst/ | ⬜ |
| 20 | Flatten Binary Tree to Linked List | Medium | Reverse pre-order / Morris-style rewiring | https://leetcode.com/problems/flatten-binary-tree-to-linked-list/ | ⬜ |
| 21 | Accounts Merge | Medium | Union-Find over emails | https://leetcode.com/problems/accounts-merge/ | ⬜ |
| 22 | Subsets | Medium | Backtracking / bitmask enumeration | https://leetcode.com/problems/subsets/ | ⬜ |
| 23 | Letter Combinations of a Phone Number | Medium | Backtracking over a digit map | https://leetcode.com/problems/letter-combinations-of-a-phone-number/ | ⬜ |
| 24 | Pow(x, n) | Medium | Fast exponentiation | https://leetcode.com/problems/powx-n/ | ⬜ |
| 25 | Exclusive Time of Functions | Medium | Stack simulation of a call log | https://leetcode.com/problems/exclusive-time-of-functions/ | ⬜ |
| 26 | Insert Delete GetRandom O(1) | Medium | Array + index map, swap-with-last | https://leetcode.com/problems/insert-delete-getrandom-o1/ | ⬜ |
| 27 | Find Peak Element | Medium | Binary search on slope | https://leetcode.com/problems/find-peak-element/ | ⬜ |
| 28 | Valid Number | Hard | Explicit state machine / flag parsing | https://leetcode.com/problems/valid-number/ | ⬜ |
| 29 | 01 Matrix | Medium | Multi-source BFS | https://leetcode.com/problems/01-matrix/ | ⬜ |
| 30 | Course Schedule | Medium | Cycle detection / Kahn's algorithm | https://leetcode.com/problems/course-schedule/ | ⬜ |

### 🔑 Crack notes — Tier 2

- **16. Task Scheduler** — Answer = `max(len(tasks), (maxFreq - 1) * (n + 1) + countOfMaxFreq)`. Derive the formula from a grid drawing; the heap simulation is the backup if they want the actual order.
- **17. Move Zeroes** — One pointer for the next write slot; copy non-zeros forward, then zero-fill the tail. Or swap as you go for a single pass.
- **18. Remove Invalid Parentheses** — First count the minimum removals needed, then DFS removing exactly that many while skipping duplicate consecutive removals. BFS level-by-level is easier to explain: the first level that yields any valid string is the answer.
- **19. Kth Smallest in a BST** — In-order gives sorted order; stop at the k-th. Follow-up "frequent modifications" ⇒ store subtree sizes in each node.
- **20. Flatten Binary Tree to Linked List** — Traverse right→left→node keeping a `prev` pointer: set `node.right = prev`, `node.left = null`. The `O(1)`-space version reattaches the left subtree between the node and its right child.
- **21. Accounts Merge** — Union all emails within one account, map `email → name`, then group by root. The classic bug is unioning names instead of emails.
- **22. Subsets** — Either backtrack (include/exclude) or loop masks `0 .. 2ⁿ-1`. Know both; the bitmask version answers "iterative please".
- **23. Letter Combinations** — Standard backtracking; state the complexity as `O(4ⁿ · n)`. Empty input returns `[]`, not `[""]`.
- **24. Pow(x, n)** — Square-and-multiply, `n` halved each step. Negative `n` ⇒ invert `x` — and handle `n = -2³¹` without overflowing (use a long / BigInt or negate as a float).
- **25. Exclusive Time of Functions** — Stack of function ids; on any log entry, credit the elapsed time to the stack top before pushing/popping. `end` timestamps are inclusive — add 1.
- **26. Insert Delete GetRandom O(1)** — Array for random access + `value → index` map. Delete = swap the target with the last element, pop, fix the moved element's index.
- **27. Find Peak Element** — If `nums[mid] < nums[mid+1]` a peak exists to the right, else at `mid` or left. Works because the boundaries act as `-∞`.
- **28. Valid Number** — Keep booleans `seenDigit`, `seenDot`, `seenExp`; a dot is illegal after a dot or an exponent, `e` needs a digit before and after, and `+/-` only at index 0 or right after `e`.
- **29. 01 Matrix** — Push **all** zeros into the queue at once, then BFS outward; the first time you touch a cell is its distance. The DP two-pass version is a good "no queue" answer.
- **30. Course Schedule** — Kahn's: repeatedly remove in-degree-0 nodes; if you can't process all `n`, there's a cycle. DFS with a 3-colour visited array is the other accepted answer.

---

## Tier 3 — Meta hards & E5+ follow-ups

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 31 | Alien Dictionary 🔒 | Hard | Topological sort on derived edges | https://leetcode.com/problems/alien-dictionary/ | ⬜ |
| 32 | Regular Expression Matching | Hard | 2D DP with `*` handling | https://leetcode.com/problems/regular-expression-matching/ | ⬜ |
| 33 | Serialize and Deserialize Binary Tree | Hard | Pre-order with null markers | https://leetcode.com/problems/serialize-and-deserialize-binary-tree/ | ⬜ |
| 34 | Longest Valid Parentheses | Hard | Stack of indices / two-direction counters | https://leetcode.com/problems/longest-valid-parentheses/ | ⬜ |
| 35 | String to Integer (atoi) | Medium | Careful edge-case parsing | https://leetcode.com/problems/string-to-integer-atoi/ | ⬜ |
| 36 | Max Consecutive Ones III | Medium | Sliding window with a flip budget | https://leetcode.com/problems/max-consecutive-ones-iii/ | ⬜ |
| 37 | Surrounded Regions | Medium | Border-seeded DFS/BFS then flip | https://leetcode.com/problems/surrounded-regions/ | ⬜ |
| 38 | Binary Search Tree Iterator | Medium | Controlled in-order with a stack | https://leetcode.com/problems/binary-search-tree-iterator/ | ⬜ |
| 39 | Vertical Order Traversal of a Binary Tree | Hard | BFS/DFS with (col, row, val) sorting | https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/ | ⬜ |
| 40 | Flatten Nested List Iterator | Medium | Stack-based lazy flattening | https://leetcode.com/problems/flatten-nested-list-iterator/ | ⬜ |

### 🔑 Crack notes — Tier 3

- **31. Alien Dictionary** 🔒 *(LeetCode Premium — still asked verbatim at Meta and worth doing on any mirror site)* — Compare adjacent words, take the **first** differing character as an edge, then topologically sort. Invalid case: a longer word appearing before its own prefix.
- **32. Regular Expression Matching** — `dp[i][j]`; when `p[j-1] === '*'` you either drop the pair (`dp[i][j-2]`) or consume a char (`dp[i-1][j]` if the char matches). Build the table, don't wing the recursion.
- **33. Serialize and Deserialize Binary Tree** — Pre-order with `#` for null and a comma delimiter. Deserialize with an index pointer consuming tokens in the same order. Say why level-order also works.
- **34. Longest Valid Parentheses** — Stack seeded with `-1`; on `)` pop then either push the index (new base) or score `i - stack.top()`. The `O(1)`-space version counts open/close left→right and right→left.
- **35. String to Integer (atoi)** — Trim spaces, one optional sign, digits until a non-digit, clamp to `[-2³¹, 2³¹-1]`. They are grading the edge cases, not the loop.
- **36. Max Consecutive Ones III** — Window that allows at most `k` zeros; shrink when the zero count exceeds `k`. The window never shrinks below the best in the "non-shrinking window" variant.
- **37. Surrounded Regions** — Mark every `O` reachable from the border as safe, then flip all remaining `O`s to `X` and restore the safe ones.
- **38. BST Iterator** — Push all left children on construction; `next()` pops, then pushes the left spine of its right child. Space is `O(h)`, which is exactly the follow-up they want.
- **39. Vertical Order Traversal** — Collect `(col, row, val)` triples, then sort by col, then row, then value. That final value tie-break is what separates this from the easier premium version.
- **40. Flatten Nested List Iterator** — Push the list reversed onto a stack; `hasNext()` unwraps nested lists until the top is an integer. Lazy beats pre-flattening when they ask about huge inputs.

---

## 🔗 Cross-references (Meta asks these too — solved in another folder)

| Problem | Owned by |
|---------|----------|
| Two Sum, Subarray Sum Equals K, Merge Intervals, Kth Largest Element in an Array, K Closest Points to Origin, Product of Array Except Self, Trapping Rain Water | [`../Amazon/`](../Amazon/amazon_oa_best_dsa_questions.md) |
| Minimum Window Substring, Longest Consecutive Sequence, Basic Calculator II, Find Median from Data Stream, Random Pick with Weight | [`../Google/`](../Google/google_dsa_questions.md) |
| Valid Parentheses, Reverse Linked List, Binary Tree Level Order Traversal variants, Search in Rotated Sorted Array, Maximum Subarray | [`../Microsoft/`](../Microsoft/microsoft_dsa_questions.md) |
| 3Sum, Palindrome Linked List, Sort List | [`../Apple/`](../Apple/apple_dsa_questions.md) |

## 📅 Suggested order (2 weeks — Meta rewards volume over depth)

1. **Days 1–4 (trees):** 3, 4, 8, 10, 11, 19, 20, 38, 39, 33
2. **Days 5–8 (strings & parens):** 1, 2, 6, 9, 15, 34, 35, 28, 18, 32
3. **Days 9–11 (arrays & windows):** 5, 7, 12, 14, 17, 26, 27, 36, 16, 24
4. **Days 12–14 (graphs & design):** 13, 21, 29, 30, 37, 22, 23, 25, 40, 31

> Meta-specific drill: set a **20-minute timer per problem** and code without running anything. If you can't finish in 20, that problem goes back in the queue. Two clean problems in 45 minutes is literally the bar.
