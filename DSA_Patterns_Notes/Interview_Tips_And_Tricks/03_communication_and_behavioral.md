# 🗣️ Communication & Behavioural — What to Actually Say

> **Scope of this file:** the words — think-aloud scripts, clarifying questions, and behavioural answers.
> Round mechanics: [`01_rounds_and_oa_strategy.md`](01_rounds_and_oa_strategy.md).
> Choosing the algorithm: [`02_pattern_recognition_cheatsheet.md`](02_pattern_recognition_cheatsheet.md).
> Scheduling your prep: [`04_study_plan_and_revision_system.md`](04_study_plan_and_revision_system.md).

---

## 1. The clarifying questions that always earn points

Ask **2–3**, not ten. Pick the ones that could change your algorithm:

- "Can the input be empty or null, and what should I return then?"
- "Are there duplicates, and do they need distinct handling?"
- "Is the input sorted, or can I sort it — does the original order matter in the output?"
- "What's the range of `n` and of the values? Can values be negative or exceed 32 bits?"
- "Should I optimise for time or memory here — is this a one-shot call or a hot path with many queries?"
- "If several answers are valid, do you want any one, or a specific tie-break?"
- (Strings) "ASCII or Unicode? Case-sensitive? Are spaces and punctuation meaningful?"
- (Graphs/trees) "Can there be cycles? Are the nodes guaranteed to exist in the tree?"

**Anti-pattern:** asking questions the statement already answers. That reads as not having listened.

---

## 2. Think-aloud script (copy the phrasing)

**Restating (0–1 min):**
> "So: given an array of integers and a target, I return the indices of the two numbers that sum to the target — indices, not values, and exactly one valid answer exists. Is that right?"

**Brute force (1–3 min):**
> "The straightforward version checks every pair — that's `O(n²)` time, `O(1)` space. It works, but it re-scans the array for each element, and that's the waste I want to remove."

**Optimising (3–6 min):**
> "Instead of searching for the complement, I can remember what I've already seen. A hashmap of value→index makes the lookup `O(1)`, so the whole thing becomes one pass, `O(n)` time and `O(n)` space. That's the trade I'd take unless memory is tight. Sound good before I code it?"

**While coding (narrate decisions, not syntax):**
> "I'm storing the index rather than the value because the output needs positions."
> "I'm checking the map *before* inserting the current element, so I can't pair a number with itself."

**Verifying (last 8 min) — this is the part most people skip:**
> "Let me run it on `[2,7,11,15]`, target 9. i=0: map is empty, complement 7 not there, store 2→0. i=1: complement 2 is in the map at index 0, so I return `[0,1]`. Correct."
> "Edge cases: empty array returns nothing; duplicates like `[3,3]` with target 6 work because I check before inserting; negative numbers are fine since I'm not assuming order."

**Closing:**
> "Final complexity: `O(n)` time, `O(n)` space. If the array were sorted and I could return values instead of indices, two pointers would give `O(1)` space. Want me to handle the sorted variant?"

---

## 3. Rules for talking while thinking

- **Externalise the branch, not the whole tree.** "I'm choosing between a heap and sorting — heap, because I only need the top 3 and n is large."
- **Silence budget: 60 seconds.** Longer than that, say what you're weighing. "Give me twenty seconds to think through the indices" is a perfectly good sentence — it buys real silence, deliberately.
- **Name things properly.** `lastSeenIndex`, `remainingCapacity`, `maxEndingHere`. Interviewers read your variable names as evidence of whether you understand your own algorithm.
- **Say the invariant.** "At every point, the window contains at most K distinct characters." Invariants are the single strongest senior signal in a coding round.
- **Never argue with a hint.** "That's a good point — if the values can be negative, my sliding window breaks. Let me switch to prefix sums."
- **Don't apologise repeatedly.** One "let me correct that" is fine; five of them reads as low confidence and eats your clock.
- **Ask before you assume anything expensive.** "Can I use a library heap, or do you want me to implement it?"

---

## 4. Behavioural answers: STAR, with the parts people leave out

**S**ituation (1 sentence) → **T**ask (1 sentence, *your* responsibility) → **A**ction (60% of the answer, "I" not "we") → **R**esult (a number, plus what you learned).

Two failure modes to avoid:
- **All situation, no action.** Three minutes of context and 20 seconds of what you did.
- **"We" everywhere.** The interviewer is hiring *you*. Say "I proposed", "I wrote", "I convinced".

**Build a story bank of 6 stories**, each reusable across many questions:

| Story | Must contain |
|-------|--------------|
| A project you owned end to end | Scope, a decision you made alone, a measurable outcome |
| A hard technical problem you debugged | The symptom, your hypothesis process, the root cause |
| A conflict with a teammate or manager | Real disagreement, how you resolved it, the relationship after |
| A failure that was genuinely yours | What you'd do differently — no "I work too hard" |
| Something you shipped under a tight deadline | What you cut, and why that was the right cut |
| Something you learned fast from zero | How you learned it and what you built with it |

**Numbers make stories real:** "cut p95 latency from 800ms to 210ms", "reduced the build from 14 to 4 minutes", "used by 3 teams". If you don't have a metric, use scale ("~50k rows/day") or time saved.

---

## 5. Company value frameworks — what they're really probing

- **Amazon (16 Leadership Principles).** The heaviest behavioural bar in tech; expect 2 LP questions *per round* and a Bar Raiser. The LPs asked most: **Customer Obsession, Ownership, Invent and Simplify, Dive Deep, Bias for Action, Deliver Results, Earn Trust, Disagree and Commit**. Prepare **two stories per principle** (they'll ask for a second example) and expect deep follow-ups: "what was the data?", "what would you do differently?", "who disagreed and why?"
- **Google (Googleyness & Leadership).** Comfort with ambiguity, collaboration, intellectual humility. Answer with how you handled *not knowing*.
- **Meta (Move fast, Focus on impact).** Prioritisation under constraints. Be ready for "you have two weeks and three asks — what do you drop?"
- **Microsoft (Growth mindset).** "Learn-it-all, not know-it-all" — a story where you changed your mind based on evidence lands well.
- **Netflix (Freedom & Responsibility, Candour).** Judgement without process, and giving/receiving direct feedback. Have a real "I told a senior person something they didn't want to hear" story.
- **Apple.** Craft, detail, and secrecy-compatible collaboration. Talk about quality bars you refused to lower.
- **Uber.** Ownership in ambiguity and operating at speed.
- **Adobe / Salesforce / Atlassian.** Customer empathy, teamwork, and values-based decisions — Atlassian's values round ("Open company, no bullshit", "Play as a team", "Build with heart and balance") is explicitly scored, and Salesforce probes trust and customer success.

---

## 6. Questions to ask them (never say "no questions")

Have 4 ready, use 2 — pick the ones that actually inform your decision:

- "What does the first 90 days look like for this role?"
- "What's the on-call and incident culture like on this team?"
- "How do you decide what gets built — where does the roadmap come from?"
- "What's something the team is currently getting wrong that you'd like to fix?"
- "How is success measured for this role at the 6-month mark?"
- (To an engineer) "What's the most annoying part of your dev loop right now?"

Avoid asking about salary, promotion timelines, or WFH policy with the *engineer* interviewers — those are recruiter questions.

---

## 7. Handling the awkward moments

| Situation | Say this |
|-----------|----------|
| You don't know a concept | "I haven't used that directly. My mental model is X — is that close?" Curiosity scores; bluffing gets caught. |
| You've solved the exact problem before | "This looks like the prefix-sum family — let me derive it rather than recite it." Then derive it. |
| The interviewer is silent/cold | Keep narrating anyway. Many are taking notes or in a scoring rubric; it's rarely about you. |
| You realise your solution is wrong late | "This fails on duplicates. Two options: change the map to store counts, or sort first. I'd take the map — 30 seconds to change." |
| They ask about a gap or a layoff | One factual sentence, then what you did with the time. No apology, no over-explaining. |
| They ask your salary expectation | "I'd rather understand the role's scope first — what's the band for this level?" |
| You get rejected | Ask the recruiter for feedback and the reapplication window (usually 6–12 months), then log the exact questions asked while they're fresh. |

---

## 8. Remote-interview mechanics

- Camera at eye level, face lit from the front, one clean shared screen — the interviewer is reading your code, not your room.
- Use the shared editor's plain text for the plan (constraints, examples, complexity) so both of you can point at it.
- Type your examples; don't wave at them verbally. Anything they can see, they can score.
- Test the platform (CoderPad/CodeSignal/HackerRank) once beforehand — including whether it runs code and which language versions exist.
- Keep water and a written list of your 2 clarifying questions and 5 edge cases just off-screen. That's preparation, not cheating.
