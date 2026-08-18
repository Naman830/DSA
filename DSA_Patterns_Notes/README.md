# 📚 DSA Patterns Notes — Big Tech Interview Prep

A complete, deduplicated preparation set: **400 interview questions across 10 big-tech companies**, plus a
tips & tricks folder covering the parts of the process that aren't algorithms.

## The one rule that makes this repo work

> **Every question appears in exactly one company folder.**

No question is repeated anywhere. Where a company genuinely asks a problem that another folder owns, its file
carries a **Cross-references** table pointing there. So you can work all ten folders end to end and never solve
the same problem twice — 400 problems, 400 distinct techniques.

## 🏢 Company question banks (40 questions each)

| Folder | Owns | What its list is built around |
|--------|------|-------------------------------|
| [Google](Google/google_dsa_questions.md) | Hard algorithmic, parsing, grid/graph with state | Text Justification, Expression Add Operators, Word Search II, binary-search-on-answer, hards with follow-ups |
| [Amazon](Amazon/amazon_oa_best_dsa_questions.md) | The repeat OA bank | Number of Islands, LRU Cache, Two Sum, Merge Intervals, plus Amazon's custom OA problem names |
| [Meta](Meta/meta_dsa_questions.md) | Speed-round mediums: trees, strings, parentheses | Valid Palindrome II, Minimum Remove to Make Valid Parentheses, LCA, Binary Tree Max Path Sum |
| [Microsoft](Microsoft/microsoft_dsa_questions.md) | Fundamentals: linked lists, matrices, classic DP | Reverse Nodes in k-Group, Rotate Image, Edit Distance, Trie design, Skyline |
| [Apple](Apple/apple_dsa_questions.md) | Clean classics: two pointers, math, core trees | 3Sum, First Missing Positive, Reorder List, Decode Ways, Design HashMap |
| [Netflix](Netflix/netflix_dsa_questions.md) | Scheduling, streams, heaps, binary search on answer | Sliding Window Median, Course Schedule III, Koko Eating Bananas, IPO |
| [Uber](Uber/uber_dsa_questions.md) | Simulation, routing, stateful design | Car Fleet, Reconstruct Itinerary, Design Underground System, 0-1 BFS |
| [Adobe](Adobe/adobe_dsa_questions.md) | OA-style strings, math, backtracking, grid DP | Longest Palindromic Substring, Next Permutation, Burst Balloons, Wildcard Matching |
| [Atlassian](Atlassian/atlassian_dsa_questions.md) | Practical multi-method design + dependency graphs | Design Text Editor, Meeting Rooms III, Sort Items by Groups, Detect Squares |
| [Salesforce](Salesforce/salesforce_dsa_questions.md) | BST manipulation + binary search on the answer | Delete Node in a BST, Kth Missing Positive, Stock with Cooldown, Integer to English Words |

## 💡 [Interview Tips & Tricks](Interview_Tips_And_Tricks/README.md)

Four non-overlapping files: [round & OA strategy](Interview_Tips_And_Tricks/01_rounds_and_oa_strategy.md),
the [pattern-recognition cheatsheet](Interview_Tips_And_Tricks/02_pattern_recognition_cheatsheet.md),
[communication & behavioural](Interview_Tips_And_Tricks/03_communication_and_behavioral.md), and the
[study plan & revision system](Interview_Tips_And_Tricks/04_study_plan_and_revision_system.md).

## 🧩 Pattern notes

[Two Pointers](Two_Pointers/two_pointer.md) — pattern deep-dives with JS code live here, alongside the
topic folders at the repo root (`Array`, `Strings`, `Hashing`, `Binary_Search`, `Sorting`, `Linked_List`,
`stack&queue`, `Recursion`, `Binary_Trees`, `Dynamic_Programming`).

## How each company file is structured

1. **What this company actually tests** — loop format and the real failure reasons
2. **Three tiers** — signature problems → high-frequency core → hards/follow-ups
3. **A ranked table** — problem, difficulty, pattern, LeetCode link, status checkbox
4. **🔑 Crack notes** — one or two lines per problem: how to recognise it and the trick that solves it
5. **🔗 Cross-references** — problems this company asks that another folder owns
6. **📅 A suggested order** — a 2–3 week schedule through that file

## How to use it

1. **Pick your target company** and work its file top-down: Tier 1 first — those have the highest hit rate.
2. **Attempt before reading the crack note.** The note is a check, not a hint.
3. **Track status in the table**: ⬜ not solved · 🔁 solved with help · ✅ solid unaided.
4. **Interleave**: start each session by re-solving one older ✅ from a blank file.
5. **Second company?** Only its Tier 1 + Tier 2 — the fundamentals transfer, the flavour doesn't.

> Roughly 8–10 weeks at 2–3 hrs/day covers one company's 40 plus the fundamentals.
> The [study plan](Interview_Tips_And_Tricks/04_study_plan_and_revision_system.md) has 30/60/90-day versions.
