# 📅 Study Plan & Revision System — Turning 400 Questions Into Offers

> **Scope of this file:** the schedule and the retention system — what to study when, how to revise so it
> sticks, and how to run mocks. The round mechanics are in [`01_rounds_and_oa_strategy.md`](01_rounds_and_oa_strategy.md),
> the algorithm-selection layer in [`02_pattern_recognition_cheatsheet.md`](02_pattern_recognition_cheatsheet.md),
> and the talking in [`03_communication_and_behavioral.md`](03_communication_and_behavioral.md).

---

## 1. Pick your track honestly

| Your situation | Track | Daily commitment |
|----------------|-------|------------------|
| Interviews in ~4 weeks, decent fundamentals | **30-day sprint** | 3–4 hrs |
| 2–3 months out, some gaps | **60-day standard** | 2–3 hrs |
| Starting from weak fundamentals / first job hunt | **90-day build** | 2 hrs |
| Employed, interviewing opportunistically | **Maintenance** | 45 min |

Do **not** run the 30-day sprint from a weak base. Volume without fundamentals produces recognition without recall — you'll feel prepared and freeze in the round.

---

## 2. The 90-day build (the default if you have the time)

**Phase 1 — Days 1–30: patterns, not companies.**
Work the pattern folders at the repo root (`Array`, `Strings`, `Hashing`, `Binary_Search`, `Sorting`,
`Linked_List`, `stack&queue`, `Recursion`, `Binary_Trees`, `Dynamic_Programming`, `DSA_Patterns_Notes/Two_Pointers`).
Target: **4–6 problems/day, all Easy→Medium**, one pattern at a time. Never mix patterns in a session during this phase — the goal is to build a reflex, and interleaving too early prevents it.

**Phase 2 — Days 31–65: company banks.**
Now switch to the company folders. Pick your **top 3 target companies** and work their 40-question files
top-down (Tier 1 → Tier 2 → Tier 3). Target: **3–4 problems/day**, timed. Start every session with 1
random problem from a *previous* pattern — that interleaving is what converts recognition into recall.

**Phase 3 — Days 66–85: mocks and hards.**
**2 mock interviews per week** (see §5), plus the Tier-3 hards from your target folders. Target: 2–3
problems/day but every one under interview conditions — timer on, narrating out loud, no running the code
until you believe it's correct.

**Phase 4 — Days 86–90: taper.**
No new problems. Re-solve your ❌ list (§4), re-read your crack notes and the cheatsheet, run 2 final mocks,
sleep properly. Cramming in the last week measurably lowers performance.

**Compressions:** the **60-day** plan = Phase 1 (20d) + Phase 2 (25d) + Phase 3 (12d) + taper (3d). The
**30-day sprint** = skip Phase 1, do one target company's full 40 (12d), the second company's Tier 1+2 (8d),
mocks + hards (7d), taper (3d).

---

## 3. What one good study session looks like (90 minutes)

| Minutes | Activity |
|---------|----------|
| 0–10 | **Revision first.** Re-solve 1 problem you previously marked ❌ or 🔁 — from memory, no notes. |
| 10–35 | **New problem #1.** 25-minute timer. Attempt fully before looking at anything. |
| 35–45 | Read the crack note / editorial. Write **your own** one-line summary of the trick in the folder file. |
| 45–70 | **New problem #2**, same protocol. |
| 70–80 | Re-implement problem #1 **from a blank file**, no reference. This is the step that creates retention. |
| 80–90 | Update your tracker (§4) and write tomorrow's first revision item. |

**The 25-minute rule:** stuck at 25 minutes → read *only the first hint*, not the solution. Stuck at 35 →
read the full solution, then close it and re-derive it from scratch. Never copy-paste; never move on
without re-implementing.

**Two problems deeply beats six problems skimmed.** The failure mode of every prep plan is the solved-count
dopamine loop.

---

## 4. The revision system (spaced repetition for code)

Mark every problem with the status column that's already in each company file:

- ⬜ **Not attempted**
- 🔁 **Solved with help, or slower than the target** → needs revision
- ✅ **Solved clean, unaided, within the time budget**

**Review schedule for anything not ✅:**

| Review | When |
|--------|------|
| 1st | +1 day |
| 2nd | +3 days |
| 3rd | +7 days |
| 4th | +21 days |

A problem graduates to ✅ only when you solve it **from a blank file, unaided, twice, on different days**.
If a review fails, the clock resets to +1 day.

**Keep a "trick log"** — one line per problem in your own words, in the file next to the crack note:
> *Trapping Rain Water — move the pointer on the shorter side; water at i is capped by the smaller max.*

Before any interview, you re-read the trick log — **not** the solutions. If a one-liner instantly brings back
the whole approach, it's retained. If it doesn't, that problem goes back to the review queue.

**Time targets to grade yourself against:**

| Difficulty | Think | Code | Total |
|------------|-------|------|-------|
| Easy | 3 min | 7 min | **10 min** |
| Medium | 8 min | 12 min | **20 min** |
| Hard | 15 min | 20 min | **35 min** |

---

## 5. Mock interviews (the highest-leverage hour you have)

Do **at least 8 before your first onsite**. Nothing else exposes the gap between "I can solve it" and "I can solve it while a stranger watches".

- **With a person** (peer, Pramp/Exponent-style pairing, a friend at a target company) — best signal, especially on communication.
- **Solo mock** if you can't find a partner: pick a random unseen problem from a company folder, set a 35-minute timer, **record yourself talking out loud**, and code in a plain editor with no autocomplete and no running until you're done. Then watch the recording — painful, and the fastest fix for filler words and silent gaps.

**Score every mock on 4 axes** (the same ones real interviewers use): problem solving, coding, verification, communication. Write one concrete action per weak axis. "Be better at communication" is not an action; "state the complexity before coding, every time" is.

**Ramp:** weeks 1–2 one mock/week, weeks 3+ two/week, final week two mocks then stop 2 days before the loop.

---

## 6. Applications, resume, and referrals (run this in parallel — not after)

Start applying at **Day 45 of a 90-day plan**, not at day 90. Pipelines take 4–8 weeks; you want your first
interviews to land as your prep peaks. Interview your *lowest*-priority companies first — the real rounds are
the best mocks you'll ever get.

**Resume rules that matter:**
- One page, plain formatting, no columns/graphics (ATS parsers mangle them).
- Bullets as **action + what + measurable result**: "Cut API p95 from 800ms to 210ms by adding a Redis read-through cache serving 40k req/day."
- Mirror the JD's exact keywords for the stack you actually know.
- Projects section with live links and repos if your experience is light — a working deployed thing beats a course certificate.

**Referrals** roughly triple your callback rate versus a cold apply. Ask people who have actually seen your
work; when messaging a stranger, keep it to three lines: who you are, the specific role ID, and one line on
why you fit. Attach the resume so they can forward it in one click.

**Track the pipeline** (a simple sheet): company, role, applied date, referrer, stage, next action, notes from each round. Post-rejection, log the exact questions asked — that's your gap list for the 6–12-month reapplication window.

---

## 7. Sustainability — the part that decides whether you finish

- **6 days on, 1 fully off.** No problems on the off day. Burnout is the most common cause of an abandoned plan.
- **Consistency beats intensity:** 2 hrs × 6 days beats 12 hrs on Sunday, every time.
- **Sleep is prep.** Retention and problem solving both degrade sharply under sleep debt; an 8-hour night is a better use of the last hour than one more medium.
- **Track streak days and problems retained, not problems solved.** The number that matters is how many you can still re-derive next week.
- **Plateau at ~60% of mediums?** That's normal at week 4–6. Fix it by re-doing solved problems from scratch, not by grinding new ones.

---

## 8. Are you ready? (honest checklist)

- [ ] I can solve a random unseen Medium in under 25 minutes, talking out loud, ~70% of the time
- [ ] I can name the pattern for a problem within 60 seconds of reading it
- [ ] I've done 8+ mocks and my last 3 had no silent gaps over a minute
- [ ] I can write BFS, DFS, binary search (both variants), a heap usage, Union-Find, and a DP table from memory, with no reference
- [ ] I state time **and** space complexity without being asked
- [ ] My ✅ list covers all of Tier 1 and Tier 2 for my top target company
- [ ] I have 6 STAR stories with numbers, and 2 stories per Amazon LP if Amazon is a target
- [ ] I have a resume that a referrer can forward without edits

Fewer than 6 checked → you're 3–4 weeks out, not ready. That's useful information, not a failure.
