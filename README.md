# 🚀 Data Structures & Algorithms (DSA)

> My journey to master Data Structures & Algorithms using the **Striver A2Z DSA Sheet** with **JavaScript** —
> now paired with a **400-question big-tech interview prep set**.

## 📌 About This Repository

This repository has grown into two halves that work together:

1. **📖 Learning half** — topic-wise notes and JavaScript solutions, built from the Striver A2Z sheet.
   Brute force → better → optimal, with complexity analysis and comments.
2. **🎯 Interview half** — [`DSA_Patterns_Notes/`](DSA_Patterns_Notes/README.md): **400 curated questions
   across 10 big-tech companies** (no question repeated between folders) plus a tips & tricks section on
   passing the actual rounds.

The goal is not just to solve problems but to deeply understand the logic behind them — and then be able to
reproduce that logic under interview pressure.

---

## 🎯 Big Tech Interview Prep — [`DSA_Patterns_Notes/`](DSA_Patterns_Notes/README.md)

**400 questions · 10 companies · every question appears in exactly one folder.**

Each company file has: what that company actually tests → 3 ranked tiers (problem, difficulty, pattern,
LeetCode link, status checkbox) → **🔑 crack notes** (how to recognise and attack each problem) →
cross-references to the folder that owns the classics they also ask → a 2–3 week suggested order.

| Company | Owns | Questions |
|---------|------|-----------|
| [Google](DSA_Patterns_Notes/Google/google_dsa_questions.md) | Hard algorithmic, parsing, grid/graph with state | 40 |
| [Amazon](DSA_Patterns_Notes/Amazon/amazon_oa_best_dsa_questions.md) | The repeat OA bank + Amazon's custom OA names | 40 |
| [Meta](DSA_Patterns_Notes/Meta/meta_dsa_questions.md) | Speed-round mediums: trees, strings, parentheses | 40 |
| [Microsoft](DSA_Patterns_Notes/Microsoft/microsoft_dsa_questions.md) | Linked lists, matrices, classic DP, Trie/cache design | 40 |
| [Apple](DSA_Patterns_Notes/Apple/apple_dsa_questions.md) | Two pointers, math/bit, core trees, foundational DP | 40 |
| [Netflix](DSA_Patterns_Notes/Netflix/netflix_dsa_questions.md) | Scheduling, streams/heaps, binary search on answer | 40 |
| [Uber](DSA_Patterns_Notes/Uber/uber_dsa_questions.md) | Simulation, routing, stateful design | 40 |
| [Adobe](DSA_Patterns_Notes/Adobe/adobe_dsa_questions.md) | OA strings/math, backtracking, grid DP | 40 |
| [Atlassian](DSA_Patterns_Notes/Atlassian/atlassian_dsa_questions.md) | Multi-method class design + dependency graphs | 40 |
| [Salesforce](DSA_Patterns_Notes/Salesforce/salesforce_dsa_questions.md) | BST manipulation + binary search on answer | 40 |

### 💡 [Interview Tips & Tricks](DSA_Patterns_Notes/Interview_Tips_And_Tricks/README.md)

| File | Answers |
|------|---------|
| [Rounds & OA Strategy](DSA_Patterns_Notes/Interview_Tips_And_Tricks/01_rounds_and_oa_strategy.md) | How do I pass each stage? Pipeline map, OA time budget, minute-by-minute round plan, recovery scripts |
| [Pattern Recognition Cheatsheet](DSA_Patterns_Notes/Interview_Tips_And_Tricks/02_pattern_recognition_cheatsheet.md) | Which algorithm is this? Constraints→complexity, keyword→pattern triggers, the 14 core patterns |
| [Communication & Behavioural](DSA_Patterns_Notes/Interview_Tips_And_Tricks/03_communication_and_behavioral.md) | What do I say? Think-aloud scripts, STAR story bank, company value frameworks |
| [Study Plan & Revision System](DSA_Patterns_Notes/Interview_Tips_And_Tricks/04_study_plan_and_revision_system.md) | What do I do today? 30/60/90-day plans, spaced repetition, mock protocol |

---

## 📂 Repository Structure

| Folder | Contents | JS files |
|--------|----------|----------|
| [`Array/`](Array/) | Two sum family, subarrays, majority element, inversions, LeetCode set | 48 |
| [`Linked_List/`](Linked_List/) | Singly & doubly lists, representation + problem sets | 45 |
| [`Binary_Search/`](Binary_Search/) | 1D, 2D, binary search **on answers**, question patterns | 28 |
| [`stack&queue/`](stack&queue/) | Basics, infix/prefix/postfix, monotonic stack & queue | 27 |
| [`Strings/`](Strings/) | Basics, problems, LeetCode set | 15 |
| [`Hashing/`](Hashing/) | Hashing basics, precomputation, character hashing, collisions | 4 |
| [`Hashing/Graph/`](Hashing/Graph/) | Graph representation, BFS/DFS traversal, DFS/BFS problems | 8 |
| [`Recursion/`](Recursion/) | Recursion basics + backtracking | 7 |
| [`Sorting/`](Sorting/) | Bubble, insertion, selection, merge, quick | 6 |
| [`Binary_Trees/`](Binary_Trees/) | Representation, traversals, medium problems | 6 |
| [`Dynamic_Programming/`](Dynamic_Programming/) | Buy/sell stock — **just getting started** | 1 |
| [`DSA_Patterns_Notes/`](DSA_Patterns_Notes/README.md) | Company question banks, tips & tricks, pattern notes | notes |
| [`big-o-notation-guide.md`](big-o-notation-guide.md) | Complexity reference | — |

**~196 JavaScript solutions** so far.

---

## 📊 Current Progress

| Topic | Status |
|-------|--------|
| Arrays, Linked List, Binary Search, Stack & Queue | ✅ Strong coverage |
| Strings, Hashing, Sorting, Recursion | 🔁 Good base, still filling in |
| Binary Trees | 🔁 Traversals + medium problems done, BST pending |
| Graphs | 🔁 Traversals done; shortest paths, topo sort, MST pending *(currently nested under `Hashing/`)* |
| Dynamic Programming | ⬜ Barely started — the biggest gap |
| Heap / Priority Queue, Trie, Union-Find | ⬜ Not implemented yet |
| Greedy, Bit Manipulation | ⬜ Not started |

### 🔜 Next up

1. **Reusable JS templates** — `MinHeap`/`MaxHeap`, `Trie`, `Union-Find (DSU)`, BFS/DFS/binary-search/DP skeletons *(JavaScript has no built-in priority queue, and ~46 questions in the company banks need these)*
2. **Dynamic Programming** — the single thinnest topic vs. how often it's asked
3. **Graphs** — promote out of `Hashing/` and add Dijkstra, topological sort, MST, Union-Find problems
4. A master tracker across all 400 banked questions
5. System Design (HLD + LLD) and CS fundamentals (OS, DBMS, Networks, OOP, SQL)

---

## 📅 Daily DSA Routine

Every day I dedicate approximately **3 hours** to DSA.

| Time | Activity |
|------|----------|
| ⏰ 1 Hour | Revise previously learned topics |
| 📖 1 Hour | Learn a new DSA concept |
| 🔁 1 Hour | Revise and practice the new concept |

**Total Daily Time:** **3 Hours**

> Interview-mode variant (session structure, spaced-repetition schedule, mock cadence) is in the
> [Study Plan](DSA_Patterns_Notes/Interview_Tips_And_Tricks/04_study_plan_and_revision_system.md).

---

## 💻 Every Topic Includes

Each topic is explained in a beginner-friendly manner and contains:

- ✅ Easy explanation
- ✅ Key observations
- ✅ Brute Force approach
- ✅ Better approach (if applicable)
- ✅ Optimal approach
- ✅ JavaScript solution
- ✅ Proper comments
- ✅ Pseudocode (where useful)
- ✅ Time Complexity
- ✅ Space Complexity
- ✅ Sample test cases

---

## 🗺️ How to Use This Repo

**If you're learning DSA from scratch** — start with the topic folders in this order:
`Array` → `Strings` → `Hashing` → `Sorting` → `Recursion` → `Linked_List` → `stack&queue` →
`Binary_Search` → `Binary_Trees` → `Hashing/Graph` → `Dynamic_Programming`.

**If you're preparing for interviews** — go to [`DSA_Patterns_Notes/`](DSA_Patterns_Notes/README.md),
pick your target company, and work its file top-down (Tier 1 has the highest hit rate). Attempt each
problem *before* reading its crack note, and track your status with ⬜ → 🔁 → ✅.

---

## 🎯 Goal

- Master Data Structures & Algorithms
- Improve problem-solving skills
- Crack Software Engineering interviews at big tech
- Build strong coding fundamentals
- Become interview-ready

---

## 📌 Tech Stack

- JavaScript (ES6+)
- Visual Studio Code
- Git & GitHub

---

## ⭐ Progress & Contributions

This repository is updated regularly as I learn new topics and solve more problems.

Feel free to explore the repository, learn together, or suggest improvements!

### ⭐ If you find this repository helpful, don't forget to star it!
