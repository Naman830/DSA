# DSA Intuition → Implementation Gap: Diagnosis & Fix Plan

## 1. The Core Problem

You understand JavaScript deeply and can build correct intuition/approach — but freeze when converting that intuition into code.

**Root cause:** Your habit of *reading the full editorial, then re-implementing it* trains **recognition memory** (recognizing code you've seen) instead of **generation memory** (producing code from a blank page). After 180 problems solved this way, you've built strong pattern recognition but weak "cold start" retrieval — hence the freeze at "where do I even begin."

```
Recognition Memory          Generation Memory
(what you have)             (what you need)
─────────────────           ──────────────────
See solution → understand   Blank page → produce
Fast, feels productive      Slower, feels uncomfortable
Doesn't fix freezing        Directly fixes freezing
```

All patterns feeling "equally shaky" confirms this is a **systemic translation gap**, not a knowledge gap in any one topic.

---

## 2. The Fix: Generation Over Recognition

| Old Habit | New Habit |
|---|---|
| Read full solution → re-implement | Struggle blind first → check only if truly stuck |
| Learn once, move on | Learn → generate blind → check → **regenerate blind** |
| Practice only new problems | Blind **re-solve** old problems you "solved via editorial" |
| Untimed, unstructured attempts | Timed struggle caps before allowing any hint |

### Escalation ladder when stuck (use in order, never skip ahead)
1. **0–15 min:** Struggle alone, write pseudocode, attempt real code.
2. **15–20 min:** Peek only at the *pattern name/hint*, not code.
3. **20–25 min:** Peek at just first 2–3 lines of structure, close it, finish yourself.
4. **Only after finishing/failing:** Read full editorial → immediately re-solve blind next day.

### Build a Skeleton Library
Hand-write (from memory, not copied) the canonical starting structure for each pattern until you can produce it in under 60 seconds:

- Two pointers / Sliding window
- Binary search (both templates)
- Fast/slow pointers
- BFS / DFS
- Backtracking
- DP (1D / 2D)
- Monotonic stack
- Tree traversal (recursive + iterative)

This directly fixes the "freeze" — freezing is a **retrieval failure**, not a reasoning failure.

---

## 3. Daily Routine (Fits Your Real Schedule)

**Morning: 5:30–7:30/8:00 AM | Afternoon: 1:00–2:00 PM**

### 🌅 Morning (2–2.5 hrs) — Learning + Deep Generation

| Time | Block | What to do |
|---|---|---|
| 20 min | Skeleton Drills | Blind-write 2–3 pattern skeletons (old topics) |
| 90 min | New Topic (Trees) | Learn → close notes → code blind → check → **regenerate blind** |
| 10 min | Log | Note *where your hand froze* (not what you got wrong conceptually) |
| +30 min (if available) | Extra rep | One more problem, double blind-regeneration |

### 🌤️ Afternoon (1 hr) — Drilling Old Gaps

| Time | Block | What to do |
|---|---|---|
| 30 min | Blind Re-solve | Re-solve 1–2 old problems (originally solved via editorial), fully blind, timed |
| 20 min | Spaced Revision | Rotate: Arrays → Binary Search → LinkedList → Recursion → Stack/Queue → repeat |
| 10 min | Close the loop | Review morning's freeze log → feeds tomorrow's skeleton drill |

**Why this split:** New/hard learning (Trees) needs the long, fresh morning block. Blind re-solves are short, mechanical reps — perfect for the shorter afternoon window.

---

## 4. Tree Learning Path (New Topic — Learn + Generate Simultaneously)

Since Trees are brand new, use the **Learn → Generate Blind → Check → Regenerate** loop for every sub-topic. Don't advance until you can blind-code the current category's core problem in under 15 min.

```
Order of attack:
1. Traversals (in/pre/post) — recursive
2. Traversals — iterative (stack-based)   ← common freeze point
3. Level order (BFS, queue-based)
4. Views (top/bottom/left/right)
5. Height / Diameter / Balanced-check      ← leverages your strong recursion
6. LCA & path problems
7. Serialize/Deserialize, build-from-traversal ← hardest, do last
```

---

## 5. 30-Day Progression Plan

| Days | Focus |
|---|---|
| **1–7** | Trees: traversals → BFS/views. Blind re-solves + skeleton drills daily. |
| **8–14** | Trees: height/diameter/LCA/path → finish section. Start BST (reuses tree skeletons). Shift blind re-solve focus to Stack/Queue. |
| **15–21** | Finish BST. Start Sliding Window & Two Pointer (new) using learn→generate loop. Keep rotating spaced revision. |
| **22–30** | Start Heaps with same protocol. Every 3rd day: **mock interview** — random old problem, explain approach out loud, code in 25 min, zero hints. |

---

## 6. What to Track Daily

| Metric | Why it matters |
|---|---|
| **Time-to-first-line** | Direct measure of the "freeze" — should shrink over 30 days |
| **Time-to-working-solution** | Overall implementation speed |
| **Peek rate on old topics** | Should trend toward **zero** by Day 30 for Arrays → Stacks |
| **Freeze log entries** | Tells you exactly which skeleton needs more drilling tomorrow |

---

## Key Takeaway

> The freeze isn't a knowledge problem — it's a **generation practice deficit**. Every session should prioritize *producing code from nothing* over *reading and reproducing*. Volume of new problems matters less than reps of blind generation, both on new topics (Trees) and old ones (via re-solves).
