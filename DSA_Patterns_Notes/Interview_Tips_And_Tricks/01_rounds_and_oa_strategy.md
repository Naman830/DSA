# 🎯 Rounds & OA Strategy — How to Actually Pass Each Stage

> **Scope of this file:** the *process* — what each round is, how it's scored, and how to manage the clock.
> Pattern recognition lives in [`02_pattern_recognition_cheatsheet.md`](02_pattern_recognition_cheatsheet.md),
> what to *say* lives in [`03_communication_and_behavioral.md`](03_communication_and_behavioral.md),
> and *when to study what* lives in [`04_study_plan_and_revision_system.md`](04_study_plan_and_revision_system.md).
> No advice is repeated across these four files.

---

## 1. The pipeline, and what actually kills candidates at each stage

| Stage | Typical format | Real failure reason |
|-------|----------------|---------------------|
| **Resume / referral screen** | ATS + recruiter, ~30s per resume | No measurable impact bullets; no keyword match with the JD |
| **OA (online assessment)** | 1–3 problems, 60–120 min, hidden tests | Passing samples but failing hidden edge/scale tests; running out of time on Q1 |
| **Phone screen** | 1–2 problems, 45 min, shared editor | Silence while thinking; no working solution by minute 35 |
| **Onsite coding ×2–3** | 45–60 min each | Solving it but not being able to state complexity or handle the follow-up |
| **System / practical design** | 45–60 min | Jumping to a database choice before clarifying requirements |
| **Behavioural / values / bar-raiser** | 45–60 min | Vague stories with no conflict, no metric, no personal ownership |
| **Hiring committee / debrief** | You aren't there | One "no hire" with a concrete anecdote outweighs three lukewarm "leans hire" |

**The load-bearing insight:** past the OA, you are not being scored on *solved / not solved*. You are being
scored on a rubric — usually four axes: **problem solving, coding, verification, communication**. A perfect
solution with zero narration frequently loses to a slightly-suboptimal solution with clean reasoning, because
three of the four axes were blank.

---

## 2. OA strategy (the stage most people lose)

The OA is the only round with **no partial credit from a human**. Play it differently from an interview.

**The first 3 minutes — before you write any code:**
1. Read *all* problems first. Order them by (your confidence × marks). Never solve top-to-bottom by default.
2. Read the **constraints** before the story. `n ≤ 10⁵` and `n ≤ 20` are different problems with the same statement.
3. Check the output format precisely — 0-indexed vs 1-indexed, sorted or not, ties broken how.

**Time management for a 2-problem / 100-minute OA:**
- 0–5 min: read both, pick the order.
- 5–35 min: solve the easier one **completely**, including your own edge tests.
- 35–40 min: submit, verify all tests pass, and *stop touching it*.
- 40–90 min: the harder one. At minute 75, if it's not passing, switch to a **brute force that is definitely correct** — partial test credit beats an elegant TLE.
- 90–100 min: buffer. Re-read constraints, re-run, submit.

**Hidden-test insurance — write these 5 tests yourself every single time:**
- empty / zero-length input
- single element
- all elements identical
- maximum constraint (`n = 10⁵`, values at their limits) — check for overflow and TLE
- the "sorted vs unsorted" and "negative numbers" assumption you silently made

**OA-specific traps:**
- **Integer overflow** — in Java/C++ use `long` for sums; in JS, watch anything beyond `2⁵³` and use `BigInt` if products are involved.
- **Recursion depth** — `n = 10⁵` with recursive DFS will stack-overflow in many judges. Convert to an iterative stack.
- **Reading input** — some OAs give you a driver, some don't. If you must parse, test the parser with trailing whitespace and empty lines.
- **Global state between test cases** — reset your caches/memo maps if the harness calls your function repeatedly.
- **Timer paranoia** — if the platform warns about tab switching or copy-paste, take it literally; a flagged session is an auto-reject at several companies.

---

## 3. The 45-minute live coding round, minute by minute

| Minutes | What you do | Why it scores |
|---------|-------------|---------------|
| 0–3 | Restate the problem in your own words. Ask 2–3 clarifying questions. Confirm input size, types, duplicates, and what to return on invalid input. | Opens the "communication" and "problem solving" axes immediately |
| 3–6 | Walk one small example by hand on the shared doc. Then state the brute force **with its complexity**. | Proves you understand the problem before optimising |
| 6–10 | Name the pattern and the target complexity: *"the repeated work is X, so a hashmap of prefix sums gets us to O(n)"*. Get a nod before coding. | This is where the interviewer can steer you off a dead end for free |
| 10–30 | Code it. Narrate only at decision points, not every line. Use real names (`lastSeenIndex`, not `m2`). | Coding axis |
| 30–38 | **Dry-run your own code** on the example, out loud, with a tricky input. Fix bugs you find yourself. | Verification axis — the most commonly blank one |
| 38–45 | State final time/space complexity. Offer one improvement or one follow-up you'd handle next. Ask your questions. | Leaves them with a "senior" impression |

**Hard rules:**
- **Never code in silence for more than ~60 seconds.** If you're stuck, say what you're stuck on: *"I'm deciding whether to track indices or values in the map — indices, because I need the distance."*
- **Never say "I've seen this one."** Say "this looks like the prefix-sum family" and derive it anyway. Claiming memorisation invites a harder replacement problem.
- **If you're stuck at minute 25, get the brute force fully working.** A complete `O(n²)` beats a half-written `O(n)` on every rubric.
- **Take the hint.** Interviewers hint deliberately; ignoring one is scored much worse than needing one.

---

## 4. Recovering when it's going badly

Failure is usually recoverable — how you recover is itself a signal.

- **Blanking completely:** go back to the example. Solve the concrete instance by hand, then ask "what did I actually do there?" That converts a blank into an algorithm surprisingly often.
- **Your approach is wrong at minute 20:** say it out loud — *"this breaks on duplicates; I need a different structure"* — and pivot. Silently patching a broken idea is the worst outcome.
- **You can't remember an API:** say what it does and use a placeholder (`// heap.pop() — min by weight`). Nobody fails for a forgotten method name; people fail for stalling on one.
- **Bug you can't find:** stop reading the code and start printing state. Narrate the expected vs actual at one specific index.
- **Ran out of time:** finish with a 30-second summary of exactly what remains and how you'd complete it. That's often enough for a "lean hire" on problem solving.

---

## 5. Company-shape differences (calibrate your prep, not your fundamentals)

- **Amazon** — OA is a big filter and includes a work-simulation + behavioural section; Leadership Principles are scored in *every* round including coding. Bar Raiser is a separate, veto-carrying interviewer.
- **Google** — hiring committee decides, not your interviewer. That's why *how you reason* is transcribed and matters as much as the result; expect ambiguity by design and at least one follow-up per problem.
- **Meta** — two problems in 45 minutes. Speed is the constraint; the problem set is narrower and repeats heavily.
- **Microsoft** — most rounds are fundamentals with a strong "clean code and edge cases" bias, ending with an AA round with a senior leader.
- **Apple** — team-dependent bar, deep resume drilling between problems, and a practical/debugging flavour.
- **Netflix** — fewer rounds, senior bar, heavy design + culture weight; the coding round expects production-quality code.
- **Uber** — story-framed problems, live debugging, and design creeping into coding rounds.
- **Adobe** — OA-heavy with hidden tests; strings/math/backtracking bias.
- **Atlassian** — IDE-based, multi-method class design, plus an explicit values round.
- **Salesforce** — moderate DSA bar, high code-quality and testing-strategy bar, real behavioural weight.

Each company folder in `DSA_Patterns_Notes` has its own 40-question bank matched to these shapes.

---

## 6. The 24 hours before, and the hour after

**Day before:** no new topics. Re-solve 3 problems you've already solved, sleep 8 hours, prepare your environment (charger, water, quiet room, backup internet/hotspot, IDE open with a scratch file).

**30 minutes before:** re-read your own crack notes for the target company folder — not new problems. Warm up by *typing* one easy solution so your hands are moving.

**During:** keep a scratch file for the interviewer's constraints and examples. Repeat the constraint back when you use it ("since values are bounded by 10⁵, counting sort is fine").

**Immediately after:** write down the exact problems asked, what you got stuck on, and what the interviewer hinted. This is the highest-value artifact you will ever produce for your next loop — and if you're rejected, it's your gap list for the reapplication in 6–12 months.

---

## 7. Quick pre-round checklist

- [ ] I know how many rounds, how long, and which language I'll use
- [ ] I've re-read the target company's folder in `DSA_Patterns_Notes`
- [ ] I have 2 clarifying questions I ask on *every* problem by reflex
- [ ] I can state time and space complexity without being prompted
- [ ] I have my 5 standard edge cases memorised
- [ ] I have 3 project stories ready for the "tell me about your work" gap
- [ ] I have 2 questions to ask the interviewer at the end
