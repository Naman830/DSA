# 🍎 Apple — Top 40 DSA Interview Questions

> **Folder rule:** every question in `DSA_Patterns_Notes` lives in **exactly one** company folder.
> Apple owns the *clean classics* — two pointers, math/bit tricks, core trees, foundational DP, and
> practical design. Problems another folder owns are listed under **Cross-references**.

## What Apple actually tests

Apple's loop is unusually **team-dependent**: 4–6 rounds, and the bar shifts with the org (Core OS asks
harder pointer/memory questions, App teams ask more practical/product problems).

- **Breadth over depth.** Apple rarely goes full LeetCode-Hard. It goes *wide*: array, string, math, tree, DP, and design in the same day.
- **They ask you to code the "easy" one perfectly.** Reverse Integer / Palindrome Number style questions appear because overflow and edge cases are the real test.
- **Practical > theoretical.** Expect "implement this data structure" and "how would you use this in an app" more often than Codeforces-flavoured puzzles.
- **You will be asked about your resume for real.** Apple interviewers dig into your projects between coding questions; be ready to defend design choices.
- **Bar-raiser equivalent:** at least one round explicitly probes debugging — "here's a wrong output, find the bug".

## Legend

- **Pattern** = what to recognise it as under time pressure
- ⬜ Not solved · 🔁 Solved once, needs revision · ✅ Solid

---

## Tier 1 — Apple signature: two pointers, math, core structures

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 1 | 3Sum | Medium | Sort + two pointers with dedup | https://leetcode.com/problems/3sum/ | ⬜ |
| 2 | 3Sum Closest | Medium | Sort + two pointers tracking best diff | https://leetcode.com/problems/3sum-closest/ | ⬜ |
| 3 | Container With Most Water | Medium | Two pointers moving the shorter wall | https://leetcode.com/problems/container-with-most-water/ | ⬜ |
| 4 | Valid Sudoku | Medium | Three sets of seen-keys in one pass | https://leetcode.com/problems/valid-sudoku/ | ⬜ |
| 5 | Isomorphic Strings | Easy | Two-way character mapping | https://leetcode.com/problems/isomorphic-strings/ | ⬜ |
| 6 | Longest Common Prefix | Easy | Vertical scan / prefix shrink | https://leetcode.com/problems/longest-common-prefix/ | ⬜ |
| 7 | Find the Index of the First Occurrence in a String | Easy | Sliding compare / KMP | https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/ | ⬜ |
| 8 | Palindrome Number | Easy | Reverse half the number, no string | https://leetcode.com/problems/palindrome-number/ | ⬜ |
| 9 | Reverse Integer | Medium | Digit pop/push with overflow guard | https://leetcode.com/problems/reverse-integer/ | ⬜ |
| 10 | Missing Number | Easy | XOR / Gauss sum | https://leetcode.com/problems/missing-number/ | ⬜ |
| 11 | Majority Element | Easy | Boyer-Moore voting | https://leetcode.com/problems/majority-element/ | ⬜ |
| 12 | Intersection of Two Arrays II | Easy | HashMap counts / two pointers on sorted | https://leetcode.com/problems/intersection-of-two-arrays-ii/ | ⬜ |
| 13 | Implement Queue using Stacks | Easy | Amortised two-stack transfer | https://leetcode.com/problems/implement-queue-using-stacks/ | ⬜ |
| 14 | Design HashMap | Easy | Buckets + chaining | https://leetcode.com/problems/design-hashmap/ | ⬜ |
| 15 | Summary Ranges | Easy | Run detection over a sorted array | https://leetcode.com/problems/summary-ranges/ | ⬜ |

### 🔑 Crack notes — Tier 1

- **1. 3Sum** — Sort, fix `i`, two-pointer the rest. Skip duplicates **at `i`** and **after each hit** on both pointers — that dedup is 90% of the grade. `O(n²)`.
- **2. 3Sum Closest** — Same skeleton, but track the smallest `|sum - target|`; move `lo` up when the sum is too small, `hi` down when too big. Early-exit on an exact match.
- **3. Container With Most Water** — Area = `min(h[l], h[r]) * (r - l)`. Always move the **shorter** wall; moving the taller one can never help. Be able to justify that in one sentence.
- **4. Valid Sudoku** — One pass, three Sets keyed as `"r3-5"`, `"c7-5"`, `"b1-2-5"` where the box id is `(r/3, c/3)`. Only validates, doesn't solve (that's the Microsoft folder).
- **5. Isomorphic Strings** — Two maps, s→t and t→s. One map alone accepts `"ab" → "aa"`, which is wrong.
- **6. Longest Common Prefix** — Compare column by column across all strings and stop at the first mismatch or shortest string. Divide-and-conquer is the follow-up.
- **7. First Occurrence in a String** — The naive `O(n·m)` scan is accepted; mention **KMP** with the LPS array for the `O(n+m)` answer. Empty needle → 0.
- **8. Palindrome Number** — Negative and any number ending in 0 (except 0) is false. Reverse only half: stop when `reverted >= x`, then compare `x === reverted || x === reverted/10`.
- **9. Reverse Integer** — Before `res = res*10 + digit`, check `res > (2³¹-1 - digit)/10`. In JS, also guard the 32-bit range explicitly — they will test `1534236469`.
- **10. Missing Number** — XOR all indices and values (self-cancelling), or `n(n+1)/2 - sum`. XOR is the overflow-proof answer.
- **11. Majority Element** — Boyer-Moore: keep a candidate and a count; the majority survives. `O(1)` space. Say why it works: the majority outnumbers everything else combined.
- **12. Intersection of Two Arrays II** — Count-map the smaller array, then decrement while scanning the larger. Follow-up "arrays are sorted on disk" ⇒ two pointers, streaming.
- **13. Implement Queue using Stacks** — `in` stack for pushes, `out` stack for pops; only transfer when `out` is empty. Amortised `O(1)` — say the word *amortised*.
- **14. Design HashMap** — Fixed bucket count + linked-list chaining, key hashed by modulo. Discuss load factor and resizing even if you don't implement it.
- **15. Summary Ranges** — Walk the array; start a run, extend while `nums[i+1] === nums[i]+1`, emit `"a->b"` or `"a"`. Watch for integer-overflow-free comparison.

---

## Tier 2 — trees & foundational DP

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 16 | Binary Tree Level Order Traversal | Medium | BFS by level | https://leetcode.com/problems/binary-tree-level-order-traversal/ | ⬜ |
| 17 | Symmetric Tree | Easy | Mirror recursion on two nodes | https://leetcode.com/problems/symmetric-tree/ | ⬜ |
| 18 | Balanced Binary Tree | Easy | Height DFS with early exit | https://leetcode.com/problems/balanced-binary-tree/ | ⬜ |
| 19 | Path Sum II | Medium | DFS backtracking collecting paths | https://leetcode.com/problems/path-sum-ii/ | ⬜ |
| 20 | Invert Binary Tree | Easy | Swap children recursively | https://leetcode.com/problems/invert-binary-tree/ | ⬜ |
| 21 | Convert Sorted Array to Binary Search Tree | Easy | Mid-element recursion | https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/ | ⬜ |
| 22 | Climbing Stairs | Easy | Fibonacci DP | https://leetcode.com/problems/climbing-stairs/ | ⬜ |
| 23 | House Robber | Medium | Take/skip DP, two rolling variables | https://leetcode.com/problems/house-robber/ | ⬜ |
| 24 | Unique Paths | Medium | Grid DP / combinatorics | https://leetcode.com/problems/unique-paths/ | ⬜ |
| 25 | Decode Ways | Medium | DP with 1-digit / 2-digit branches | https://leetcode.com/problems/decode-ways/ | ⬜ |
| 26 | Happy Number | Easy | Cycle detection on digit-square sums | https://leetcode.com/problems/happy-number/ | ⬜ |
| 27 | First Missing Positive | Hard | Index-as-hash in-place placement | https://leetcode.com/problems/first-missing-positive/ | ⬜ |
| 28 | Rotate Array | Medium | Triple reversal | https://leetcode.com/problems/rotate-array/ | ⬜ |
| 29 | Plus One | Easy | Carry propagation from the end | https://leetcode.com/problems/plus-one/ | ⬜ |
| 30 | Add Binary | Easy | Bit-by-bit carry | https://leetcode.com/problems/add-binary/ | ⬜ |

### 🔑 Crack notes — Tier 2

- **16. Level Order Traversal** — Snapshot `queue.length` at the top of each loop so one iteration = one level. This template powers zigzag, right-side view, and level averages.
- **17. Symmetric Tree** — Recurse on `(left.left, right.right)` and `(left.right, right.left)`. Iterative version pushes pairs onto a queue.
- **18. Balanced Binary Tree** — Return `-1` from the height helper as a "already unbalanced" sentinel so you bail early instead of recomputing heights (`O(n)` not `O(n²)`).
- **19. Path Sum II** — Push the node, recurse, **pop on the way out**. Copy the path array when you record a hit, or you'll store references that mutate.
- **20. Invert Binary Tree** — Three lines recursively. Also do it with a queue — the "no recursion" follow-up is standard.
- **21. Sorted Array → BST** — Mid element becomes the root; recurse on halves. Height-balanced by construction; state that.
- **22. Climbing Stairs** — `f(n) = f(n-1) + f(n-2)` with two variables. Frame it as "this is Fibonacci" immediately, then generalise to k-steps.
- **23. House Robber** — `rob = max(skip + nums[i], rob)` with two rolling values. Circular variant (House Robber II) is in the Salesforce folder.
- **24. Unique Paths** — `dp[j] += dp[j-1]` on a 1D array, or the closed form `C(m+n-2, m-1)`. Offer the combinatorial answer as the optimisation.
- **25. Decode Ways** — `dp[i] = (s[i] !== '0' ? dp[i-1] : 0) + (10 <= two <= 26 ? dp[i-2] : 0)`. Zeros are the entire difficulty — enumerate `"0"`, `"06"`, `"100"` out loud.
- **26. Happy Number** — Use a Set of seen sums, or Floyd's cycle detection for `O(1)` space. The only non-trivial loop is `4 → 16 → 37 → ... → 4`.
- **27. First Missing Positive** — Swap each value `v` in `[1..n]` into index `v-1` until it's home, then scan for the first index where `a[i] !== i+1`. `O(n)` time, `O(1)` space — this is the Apple hard that shows up most.
- **28. Rotate Array** — Reverse all, reverse the first `k`, reverse the rest. `k %= n` first. The cyclic-replacement version is the other accepted `O(1)`-space answer.
- **29. Plus One** — Walk backwards; any digit `< 9` increments and returns. If you fall out of the loop, the answer is `[1, 0, 0, ...]`.
- **30. Add Binary** — Two-pointer carry loop building the string in reverse, then reverse it. Do not convert to a number — the inputs are long by design.

---

## Tier 3 — Apple design, lists & windows

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 31 | Longest Repeating Character Replacement | Medium | Sliding window + max-frequency | https://leetcode.com/problems/longest-repeating-character-replacement/ | ⬜ |
| 32 | Subarray Product Less Than K | Medium | Sliding window with a product | https://leetcode.com/problems/subarray-product-less-than-k/ | ⬜ |
| 33 | Design Twitter | Medium | HashMaps + merge k feeds by heap | https://leetcode.com/problems/design-twitter/ | ⬜ |
| 34 | Word Pattern | Easy | Bijective word↔char mapping | https://leetcode.com/problems/word-pattern/ | ⬜ |
| 35 | Longest Word in Dictionary | Medium | Trie / sorted + buildable set | https://leetcode.com/problems/longest-word-in-dictionary/ | ⬜ |
| 36 | Binary Tree Inorder Traversal | Easy | Iterative stack traversal | https://leetcode.com/problems/binary-tree-inorder-traversal/ | ⬜ |
| 37 | Flatten a Multilevel Doubly Linked List | Medium | DFS splice with a stack | https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/ | ⬜ |
| 38 | Sort List | Medium | Merge sort on a linked list | https://leetcode.com/problems/sort-list/ | ⬜ |
| 39 | Reorder List | Medium | Find middle + reverse + interleave | https://leetcode.com/problems/reorder-list/ | ⬜ |
| 40 | Palindrome Linked List | Easy | Middle + reverse half + compare | https://leetcode.com/problems/palindrome-linked-list/ | ⬜ |

### 🔑 Crack notes — Tier 3

- **31. Longest Repeating Character Replacement** — Window is valid while `windowLen - maxFreq <= k`. You don't need to recompute `maxFreq` when shrinking — the window never shrinks below the best found, and that's the trick worth explaining.
- **32. Subarray Product Less Than K** — Expand right, divide out from the left while `product >= k`; each step adds `right - left + 1` subarrays. Guard `k <= 1` → 0.
- **33. Design Twitter** — `userId → tweets (with a global timestamp)` and `userId → followees Set`. `getNewsFeed` merges the followees' last 10 tweets with a heap. Self-follow edge case.
- **34. Word Pattern** — Split the string, then the same two-map bijection as Isomorphic Strings — plus a length check, which is the case most people miss.
- **35. Longest Word in Dictionary** — Sort by length then lexicographically, keep a Set of buildable words, and a word qualifies only if `word.slice(0, -1)` is already in it. Trie + BFS is the alternative.
- **36. Binary Tree Inorder Traversal** — Push the left spine, pop-visit-then-go-right. Morris traversal (`O(1)` space, threading) is the follow-up they love at Apple.
- **37. Flatten a Multilevel DLL** — On a node with a child: push `next` onto a stack, splice the child in, null the `child` pointer, fix `prev` links. Pop the stack when you hit the end.
- **38. Sort List** — Split with slow/fast, sort both halves, merge. `O(n log n)` time, `O(log n)` stack — bottom-up merge gives true `O(1)` space if they push.
- **39. Reorder List** — Three known sub-routines glued together: find the middle, reverse the second half, then zip the two lists. Practise it as three helpers, not one blob.
- **40. Palindrome Linked List** — Same middle+reverse; compare halves, and (bonus points) restore the list before returning.

---

## 🔗 Cross-references (Apple asks these too — solved in another folder)

| Problem | Owned by |
|---------|----------|
| Two Sum, LRU Cache, Merge Intervals, Number of Islands, Coin Change, Product of Array Except Self | [`../Amazon/`](../Amazon/amazon_oa_best_dsa_questions.md) |
| Median of Two Sorted Arrays, Longest Consecutive Sequence, Minimum Window Substring | [`../Google/`](../Google/google_dsa_questions.md) |
| Valid Palindrome II, Merge Sorted Array, Group Anagrams, Pow(x, n), LCA of a Binary Tree | [`../Meta/`](../Meta/meta_dsa_questions.md) |
| Reverse Linked List, Valid Parentheses, Maximum Subarray, Best Time to Buy and Sell Stock, Rotate Image, Spiral Matrix | [`../Microsoft/`](../Microsoft/microsoft_dsa_questions.md) |
| Valid Palindrome, Two Sum II, Squares of a Sorted Array | [`../Salesforce/`](../Salesforce/salesforce_dsa_questions.md) |

## 📅 Suggested order (2.5 weeks)

1. **Week 1 — two pointers, math, strings:** 1, 2, 3, 8, 9, 10, 11, 27, 28, 29, 30
2. **Week 2 — trees & DP:** 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 36
3. **Days 15–18 — lists, windows, design:** 37, 38, 39, 40, 31, 32, 13, 14, 33, 35

> Apple-specific drill: for every problem here, **write the edge-case list before the code** (empty input, single element, negative numbers, overflow). Apple rounds are won on edge cases far more than on asymptotics.
