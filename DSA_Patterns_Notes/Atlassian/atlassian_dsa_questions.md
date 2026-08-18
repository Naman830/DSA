# 🔵 Atlassian — Top 40 DSA Interview Questions

> **Folder rule:** every question in `DSA_Patterns_Notes` lives in **exactly one** company folder.
> Atlassian owns *practical design, scheduling/rate-limiting, and dependency-graph* problems — Jira and
> Confluence in disguise. Problems another folder owns are listed under **Cross-references**.

## What Atlassian actually tests

Atlassian's loop is distinctive: **coding round(s) + a "system design / architecture" round + a values round**,
and the coding round is *implementation-heavy* rather than trick-heavy.

- **They give you a mini-product, not a puzzle.** "Design a rate limiter", "design a task scheduler with dependencies", "design a file-path resolver" — you build a small class with several methods.
- **Multiple methods, correct interactions.** Expect 3–5 API methods; the grade is whether your data structures make *all* of them efficient, not just one.
- **Dependency graphs everywhere.** Jira issues blocking issues ⇒ topological sort, cycle detection, and reachability come up constantly.
- **You will run and debug your code.** Atlassian coding rounds are usually in a real IDE with tests. Practise compiling and running, not whiteboarding.
- **Values round is a real gate.** "Open company, no bullshit", "Play as a team", "Build with heart and balance" — bring stories mapped to these.

## Legend

- **Pattern** = what to recognise it as under time pressure
- ⬜ Not solved · 🔁 Solved once, needs revision · ✅ Solid

---

## Tier 1 — design-a-small-system (Atlassian's actual coding round)

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 1 | Design Authentication Manager | Medium | Token TTL map (rate/expiry design) | https://leetcode.com/problems/design-authentication-manager/ | ⬜ |
| 2 | Design a Stack With Increment Operation | Medium | Array + lazy increment array | https://leetcode.com/problems/design-a-stack-with-increment-operation/ | ⬜ |
| 3 | Design Parking System | Easy | Counter-per-type class design | https://leetcode.com/problems/design-parking-system/ | ⬜ |
| 4 | Design an Ordered Stream | Easy | Insert + pointer-advance chunking | https://leetcode.com/problems/design-an-ordered-stream/ | ⬜ |
| 5 | Design Front Middle Back Queue | Medium | Two deques kept balanced | https://leetcode.com/problems/design-front-middle-back-queue/ | ⬜ |
| 6 | Range Sum Query - Mutable | Medium | Fenwick tree / segment tree | https://leetcode.com/problems/range-sum-query-mutable/ | ⬜ |
| 7 | Design a Food Rating System | Medium | Two maps + sorted set per cuisine | https://leetcode.com/problems/design-a-food-rating-system/ | ⬜ |
| 8 | Design Text Editor | Hard | Two stacks around a cursor | https://leetcode.com/problems/design-text-editor/ | ⬜ |
| 9 | Detect Squares | Medium | Point count map + diagonal enumeration | https://leetcode.com/problems/detect-squares/ | ⬜ |
| 10 | Stock Price Fluctuation | Medium | Map + two heaps with lazy deletion | https://leetcode.com/problems/stock-price-fluctuation/ | ⬜ |
| 11 | Design a Number Container System | Medium | Map + sorted set of indices | https://leetcode.com/problems/design-a-number-container-system/ | ⬜ |
| 12 | Longest Absolute File Path | Medium | Stack of depth→path length | https://leetcode.com/problems/longest-absolute-file-path/ | ⬜ |
| 13 | Parsing A Boolean Expression | Hard | Recursive descent / stack parsing | https://leetcode.com/problems/parsing-a-boolean-expression/ | ⬜ |
| 14 | Number of Atoms | Hard | Recursive parsing with multiplier stack | https://leetcode.com/problems/number-of-atoms/ | ⬜ |
| 15 | Insert Delete GetRandom O(1) - Duplicates allowed | Hard | Array + map of index sets | https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/ | ⬜ |

### 🔑 Crack notes — Tier 1

- **1. Design Authentication Manager** — `tokenId → expiryTime`; every operation first checks `expiry > currentTime`. Renew resets expiry only if still alive. Lazy expiry beats a background sweep — say why (no timers, `O(1)` ops).
- **2. Design a Stack With Increment** — Keep an `inc[]` array; `increment(k, val)` writes once at index `k-1`, and `pop` pushes the pending increment down to the element below. `O(1)` per op instead of `O(k)`.
- **3. Design Parking System** — Deliberately easy; the grade is your class structure. Use an array indexed by car type instead of three fields, and validate input.
- **4. Design an Ordered Stream** — Store values by id, keep a pointer, and on insert return the contiguous run starting at the pointer. This is chunked stream reassembly — mention out-of-order network delivery.
- **5. Design Front Middle Back Queue** — Two deques, front half and back half, rebalanced after every mutation so sizes differ by ≤1. Define "middle" precisely before coding — that's where people lose it.
- **6. Range Sum Query - Mutable** — Binary Indexed Tree: `update` and `prefixSum` both `O(log n)`. Write the `lowbit` (`i & -i`) helper first. Segment tree if they ask for range min/max later.
- **7. Design a Food Rating System** — `food → (rating, cuisine)` plus `cuisine → sorted structure keyed by (-rating, name)`. Without a sorted set, `highestRated` degrades to `O(n)` — call out the trade-off.
- **8. Design Text Editor** — Left stack holds text before the cursor, right stack after. Every operation is a bounded number of pops/pushes ⇒ `O(k)`. This is the "editor" question Atlassian is famous for.
- **9. Detect Squares** — Store `"x,y" → count`. For a query point, iterate all stored points that form a diagonal (`|dx| === |dy|`, `dx !== 0`) and multiply the counts of the two missing corners.
- **10. Stock Price Fluctuation** — `timestamp → price` map, a max-heap and a min-heap with **lazy deletion**: pop the top while it disagrees with the map. Track `latestTimestamp` separately.
- **11. Design a Number Container System** — `index → number` and `number → sorted set of indices`. On change, remove the index from its old number's set. Report the smallest index in `O(log n)`.
- **12. Longest Absolute File Path** — Depth = count of `\t`; keep a stack (or array) of path lengths per depth. On a file (contains a `.`), candidate = `lengthAtDepth + nameLength`.
- **13. Parsing A Boolean Expression** — Recursive descent with an index pointer, or a stack: on `)` pop operands until `(`, then apply the operator below it. Both are accepted — pick one and be tidy.
- **14. Number of Atoms** — Parse element names, counts, and parentheses with a stack of multipliers; multiply the inner counts on `)`. Output sorted by element name with counts > 1 only.
- **15. Insert Delete GetRandom - Duplicates** — Array of values + `value → Set of indices`. Delete swaps with the last element and fixes **both** index sets. Watch the case where the swapped element is the deleted one.

---

## Tier 2 — dependency graphs, scheduling & counting

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 16 | Course Schedule IV | Medium | Transitive closure / Floyd-Warshall on bools | https://leetcode.com/problems/course-schedule-iv/ | ⬜ |
| 17 | Minimum Number of Vertices to Reach All Nodes | Medium | In-degree zero collection | https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/ | ⬜ |
| 18 | Keys and Rooms | Medium | DFS reachability | https://leetcode.com/problems/keys-and-rooms/ | ⬜ |
| 19 | Path With Minimum Effort | Medium | Dijkstra on max-edge / binary search + BFS | https://leetcode.com/problems/path-with-minimum-effort/ | ⬜ |
| 20 | Find if Path Exists in Graph | Easy | Union-Find / BFS | https://leetcode.com/problems/find-if-path-exists-in-graph/ | ⬜ |
| 21 | Divide Intervals Into Minimum Number of Groups | Medium | Min-heap of end times (meeting rooms) | https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups/ | ⬜ |
| 22 | Task Scheduler II | Medium | Last-executed map + cooldown | https://leetcode.com/problems/task-scheduler-ii/ | ⬜ |
| 23 | Maximum Number of Events That Can Be Attended | Medium | Greedy day sweep + min-heap | https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/ | ⬜ |
| 24 | Meeting Rooms III | Hard | Two heaps (free rooms + busy rooms) | https://leetcode.com/problems/meeting-rooms-iii/ | ⬜ |
| 25 | Process Tasks Using Servers | Medium | Two heaps + time simulation | https://leetcode.com/problems/process-tasks-using-servers/ | ⬜ |
| 26 | Single-Threaded CPU | Medium | Sort by arrival + min-heap by duration | https://leetcode.com/problems/single-threaded-cpu/ | ⬜ |
| 27 | Sort Array by Increasing Frequency | Easy | Count map + custom comparator | https://leetcode.com/problems/sort-array-by-increasing-frequency/ | ⬜ |
| 28 | Maximum Number of Vowels in a Substring of Given Length | Medium | Fixed-size sliding window | https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/ | ⬜ |
| 29 | Longest Word in Dictionary through Deleting | Medium | Subsequence check + tie-breaking | https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/ | ⬜ |
| 30 | Find All People With Secret | Hard | Time-grouped union-find with rollback | https://leetcode.com/problems/find-all-people-with-secret/ | ⬜ |

### 🔑 Crack notes — Tier 2

- **16. Course Schedule IV** — With `n ≤ 100`, Floyd-Warshall over a boolean reachability matrix is the clean answer: `reach[i][j] |= reach[i][k] && reach[k][j]`. BFS per query node is the alternative.
- **17. Minimum Vertices to Reach All Nodes** — In a DAG, exactly the nodes with in-degree 0 are required. One pass over the edges; explain *why* no other node can be omitted.
- **18. Keys and Rooms** — Plain DFS from room 0; answer is "did we visit all rooms". This is the warm-up they use before the harder graph question.
- **19. Path With Minimum Effort** — Dijkstra where a path's cost is the **max** edge on it, or binary search the threshold and BFS through allowed edges. Recognise the "minimise the maximum" family.
- **20. Find if Path Exists in Graph** — Union-Find is the two-line answer and sets you up for follow-ups about incremental edges.
- **21. Divide Intervals Into Minimum Groups** — This *is* Meeting Rooms II with a free link: sort by start, min-heap of end times, reuse a group whenever its end < current start. Answer = heap size.
- **22. Task Scheduler II** — Map `task → earliest allowed day`; each step jumps `day = max(day + 1, allowed[task])`. Different from Meta's Task Scheduler — order is fixed here.
- **23. Maximum Number of Events** — Sweep days ascending; push all events starting today into a min-heap by end day, drop expired ones, attend the earliest-ending. Classic greedy.
- **24. Meeting Rooms III** — Min-heap of free room numbers + min-heap of `(endTime, room)`. If no room is free, fast-forward to the earliest end. Tie-break by lowest room number — that's the bug factory.
- **25. Process Tasks Using Servers** — Free-server heap keyed by `(weight, index)`, busy heap keyed by `(freeTime, index)`. Advance the clock when nothing is free.
- **26. Single-Threaded CPU** — Sort tasks by enqueue time; heap the available ones by `(duration, index)`; jump the clock forward when the CPU idles.
- **27. Sort Array by Increasing Frequency** — Count, then sort by `(freq asc, value desc)`. Trivial, but Atlassian uses it to see whether you write a clean comparator.
- **28. Max Vowels in a Substring** — Fixed window; add the entering char, remove the leaving char. Don't recount the window each step.
- **29. Longest Word in Dictionary through Deleting** — Two-pointer subsequence check per candidate; keep the longest, breaking ties lexicographically. Sorting the dictionary first makes the tie-break free.
- **30. Find All People With Secret** — Process meetings grouped by identical time, union everyone in that group, then **undo** unions for people not connected to person 0. The rollback step is what makes it a hard.

---

## Tier 3 — hards & scale follow-ups

| # | Problem | Difficulty | Pattern | LeetCode Link | Status |
|---|---------|------------|---------|---------------|--------|
| 31 | Design Movie Rental System | Hard | Multiple sorted sets kept in sync | https://leetcode.com/problems/design-movie-rental-system/ | ⬜ |
| 32 | All Nodes Distance K in Binary Tree | Medium | Parent pointers + BFS | https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/ | ⬜ |
| 33 | Bricks Falling When Hit | Hard | Reverse time + union-find | https://leetcode.com/problems/bricks-falling-when-hit/ | ⬜ |
| 34 | Number of Good Paths | Hard | Sort by value + union-find merge counting | https://leetcode.com/problems/number-of-good-paths/ | ⬜ |
| 35 | Minimum Number of Days to Disconnect Island | Hard | Articulation insight (answer ≤ 2) | https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/ | ⬜ |
| 36 | Sort Items by Groups Respecting Dependencies | Hard | Two-level topological sort | https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/ | ⬜ |
| 37 | Maximum Employees to Be Invited to a Meeting | Hard | Functional graph: cycles + longest chains | https://leetcode.com/problems/maximum-employees-to-be-invited-to-a-meeting/ | ⬜ |
| 38 | As Far from Land as Possible | Medium | Multi-source BFS from land | https://leetcode.com/problems/as-far-from-land-as-possible/ | ⬜ |
| 39 | Number of Closed Islands | Medium | Border-seeded flood fill then count | https://leetcode.com/problems/number-of-closed-islands/ | ⬜ |
| 40 | Minimum Add to Make Parentheses Valid | Medium | Running balance counting | https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/ | ⬜ |

### 🔑 Crack notes — Tier 3

- **31. Design Movie Rental System** — Three sorted structures: available copies per movie, and a global rented set, each ordered by `(price, shop, movie)`. Every mutation touches exactly two of them — write a helper so you can't desync.
- **32. All Nodes Distance K** — Build a `child → parent` map with one DFS, then BFS outward from the target treating the tree as an undirected graph with a visited set.
- **33. Bricks Falling When Hit** — Remove all hits first, union what remains (with a virtual "roof" node), then **add the bricks back in reverse**, and the size increase of the roof component is the fall count.
- **34. Number of Good Paths** — Process nodes in increasing value; union edges whose endpoints are both ≤ current value, and count pairs of max-value nodes inside each merged component.
- **35. Minimum Days to Disconnect Island** — The answer is always 0, 1, or 2. Check "already disconnected" (0), then try removing each single land cell (1), otherwise 2. Say the bound up front — that's the insight being tested.
- **36. Sort Items by Groups** — Give every ungrouped item its own group, topologically sort the groups, then topologically sort items **within** each group, and concatenate. Two Kahn's runs.
- **37. Maximum Employees to Be Invited** — Functional graph (one out-edge each). The answer is `max(largest cycle, sum over all 2-cycles of both incoming chain lengths)`. Compute chain depths with a Kahn peel first.
- **38. As Far from Land as Possible** — Multi-source BFS seeded with **every** land cell; the last water cell dequeued has the max distance. Return -1 if the grid is all land or all water.
- **39. Number of Closed Islands** — Flood-fill from the borders to disqualify open islands, then count the remaining islands. Same trick family as Surrounded Regions (Meta folder).
- **40. Minimum Add to Make Parentheses Valid** — One pass: `open` counter, and increment `needed` whenever a `)` appears with `open === 0`. Answer = `open + needed`.

---

## 🔗 Cross-references (Atlassian asks these too — solved in another folder)

| Problem | Owned by |
|---------|----------|
| LRU Cache, Merge Intervals, Number of Islands, Top K Frequent Elements, Course Schedule II | [`../Amazon/`](../Amazon/amazon_oa_best_dsa_questions.md) |
| My Calendar I, Snapshot Array, Time Based Key-Value Store, Evaluate Division, Redundant Connection | [`../Google/`](../Google/google_dsa_questions.md) |
| Accounts Merge, Course Schedule, 01 Matrix, Insert Delete GetRandom O(1), Exclusive Time of Functions, Simplify Path | [`../Meta/`](../Meta/meta_dsa_questions.md) |
| Implement Trie, Design Browser History, LFU Cache, Min Stack | [`../Microsoft/`](../Microsoft/microsoft_dsa_questions.md) |
| Number of Recent Calls, Design Circular Queue, Non-overlapping Intervals, Course Schedule III | [`../Netflix/`](../Netflix/netflix_dsa_questions.md) |

## 📅 Suggested order (2.5 weeks — design-first)

1. **Week 1 — design classes:** 3, 4, 2, 1, 5, 11, 7, 10, 9, 15, 8
2. **Week 2 — graphs & scheduling:** 20, 18, 17, 16, 21, 22, 23, 24, 25, 26, 19
3. **Days 15–18 — parsing & hards:** 12, 13, 14, 40, 32, 38, 39, 30, 33, 34, 36, 37

> Atlassian-specific drill: for every design problem here, **write the class in a real editor and run it against your own test main()**. Their round is IDE-based with tests — candidates who only ever whiteboarded lose time to syntax, not to algorithms.
