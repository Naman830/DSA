# Zero to Big Tech

**Naman Singla's complete roadmap: from MERN + mid-Striver to a big-tech SWE offer**
*v2 — rewritten August 2026 after profile review · BCA 2nd year (3-year, graduating 2028) + BA Mathematics (IGNOU, non-attending) · DSA in JavaScript, mid-Striver, <100 LeetCode · 7+ hrs/day · GitHub: [Naman830](https://github.com/Naman830) · Long-term: Germany 2029*

---

## 1. Read this first — the timeline correction that changes everything

**Your main internship application season is NOW: August 2026 → January 2027.**

Here's why. You graduate in **2028** (3-year BCA). Big tech hires summer interns from students who graduate *the year after* the internship, so they can convert them to full-time. Summer 2027 interns = 2028 graduates = **you, this cycle**. There is no "next year I'll be ready" — Summer 2027 is your one conventional big-tech internship window during BCA, and its applications open across this autumn.

That sounds scary from <100 LeetCode problems. It's not, for three reasons:

1. **You're not starting from zero.** You're through linked lists/recursion/stacks on Striver, and you code daily. What remains is trees → graphs → DP, and at 7 hrs/day that's ~4 months of work: Sep–Dec 2026 is exactly the runway you have before most interviews happen (Nov 2026–Mar 2027).
2. **Google STEP exists.** STEP India targets 1st/2nd-years, its interviews sit at LeetCode easy→medium, and this cycle (historically opens ~Sep–Nov) is your **only eligible year**. It's not a lottery ticket for you — it's the primary target your current level can actually reach in time.
3. **This is a multi-door campaign, not one exam.** If Summer 2027 doesn't land: GSoC 2027 (Mar), startup summer internship (Feb–Apr 2027), final-year 6-month internships (applications Aug–Nov 2027, internship Jan–Jun 2028), **2028-batch new-grad roles** (from mid-2027), and the Germany track (§17). You get four more shots after this one, each with a stronger profile.

**Your profile, honestly assessed:** your projects (ParuAI, CollabCode) are top-5%-of-your-batch material and your dev skill is ahead of schedule. Your bottleneck is exactly one thing: **solving unseen problems, on a judge, under time, while explaining yourself.** Everything in this plan feeds that bottleneck; almost nothing else gets new hours.

Decisions locked (so you never re-litigate):

1. **JavaScript for DSA, all-in.** Fully supported on LeetCode and every major OA platform (HackerRank, CodeSignal, HackerEarth, Codility). Cost accepted: Codeforces-style CP and quant/HFT firms drop off the target list — your project strength covers the differentiation those ratings would have provided.
2. **No new projects until at least February 2027.** ParuAI + CollabCode are your two resume projects. Dev time is capped at ~45 min/day for *maintenance and weaponization* (deploy, polish READMEs, defend-prep) only.
3. **Practice moves onto the LeetCode judge.** Your repo is a nice artifact, but OAs and interviews run on judges with hidden tests and clocks. Solve on LC; use the LeetHub browser extension to auto-commit solutions to GitHub so your green graph survives.
4. **Calendar > mood.** You apply when windows open — which is now — not when you feel ready.

> **The one-line strategy is unchanged: DSA is the gatekeeper, proof-of-work is the differentiator, referrals are the multiplier.** Your differentiator is already strong. This roadmap is a 4-month gatekeeper sprint with a referral engine bolted on.

---

## 2. Where you stand (from your GitHub + your answers)

**Assets:**
- **Projects that interview well**: ParuAI (streaming AI site builder, 218 tests) and CollabCode (Yjs CRDT collaborative editor + sandboxed execution, 295 tests). Mostly hand-written per you — so a few evenings of "defend every decision" prep makes them interview weapons (§10).
- **Striver A2Z through stacks/queues** — the back half (trees, graphs, DP) is the hard 50%, but the foundation is real.
- **A 400-question company-wise bank you already curated** (`DSA_Patterns_Notes/`) — this becomes your Nov–Dec tagged-practice syllabus. Curation is done; only execution remains.
- **7+ hrs/day, daily shipping habit, portfolio site, 38 repos.** The work ethic is proven.
- **BA Mathematics (IGNOU)** running alongside — near-zero prep value now, but real value for German MSc admissions later (§17).

**Gaps (all one theme):**

| Gap | Evidence | Fix |
|---|---|---|
| Judge-tested volume | <100 LC solved; practice lives in repo files | All solving on LC from today (§7) |
| Timed pressure | Zero contests | LC Weekly + Biweekly from this week (§9) |
| The hard topics | Trees/graphs/DP not done | Sep–Dec sprint (§5, §7) |
| Interview performance | Never done a live technical interview | Mocks from Nov (§16) |
| Network | No referral pipeline | Starts this week (§13) |
| CS-fundamentals MCQs | System-design notes exist, but OA-level OS/DBMS/CN not covered | Compressed pass in Dec (§11) |

**The BCA fine print, honestly:** most big-tech India internship listings say "pursuing a bachelor's degree in Computer Science or a related field" — BCA qualifies. A minority hard-filter on B.E./B.Tech; when a form forces it, skip that role and move on — never misrepresent (offers get revoked at background check). Your IGNOU BA is a second *distance* degree: don't use it to claim student status for internships after mid-2028 — companies mean full-time enrollment — but do list it on your resume (a maths second degree is a signal, §12).

---

## 3. What big tech actually evaluates

The funnel for an SWE intern role, and what each stage filters on:

1. **Resume screen (seconds).** Internships/selections, achievements with numbers, real projects, CGPA above cutoff (usually 7.0–7.5; keep **8.0+**). Your projects already survive this screen *if* the resume presents them right (§12) and a referral gets it seen (§13).
2. **Online Assessment.** 1–3 DSA problems, 60–105 min, easy→medium (Google trends harder), sometimes CS MCQs, sometimes a work-style survey (Amazon — answer honestly, consistently). JavaScript is selectable on all major OA platforms.
3. **Technical interviews (1–3 × 45–60 min).** Live problem-solving while thinking aloud, complexity discussion, edge cases; often a project deep-dive — *where you can shine* — sometimes CS basics.
4. **Behavioral.** STAR stories; Amazon's Leadership Principles are explicit. Your "self-taught, shipped real systems at 18" story is genuinely strong — prepare it, don't improvise it.

**Not required for interns:** high-level system design (your System-Design-Books repo is a fine long-term habit — but it earns zero new hours until 2027; exception: the CRDT/OT notes, which are CollabCode defense material), Kubernetes, more frameworks, certificates.

---

## 4. Master timeline (Aug 2026 → Germany 2029)

| When | Phase | Headline |
|---|---|---|
| **This week** (late Aug 2026) | **0 · Mobilize** | LC-judge migration, contest #1, resume v2, referral sheet, application alerts live |
| **Sep–Dec 2026** | **1 · War sprint + apply** | Trees → graphs → DP finished · 250+ new judge solves · **STEP + Summer-2027 applications, sequenced** |
| **Jan–Apr 2027** | **2 · Interview season** | Interviews land here · mocks weekly · GSoC proposal (~late Mar) · startup summer apps (Feb–Apr) as guaranteed fallback |
| **May–Jul 2027** | **3 · The summer** | Big-tech internship 🎯 / GSoC / startup — plus NeetCode second pass + CS fundamentals |
| **Aug 2027–Jan 2028** | **4 · Final-year season** | 6-month internships (Jan–Jun 2028) + **2028-batch new-grad roles** + PPO conversion if interning |
| **Jan–Jun 2028** | **5 · Land + graduate** | 6-month internship or FTE start · graduation · Germany groundwork (APS, IELTS) |
| **2028–2029** | **6 · Germany track** | MSc applications (Winter 2029 intake) or India FTE → transfer route (§17) |

**Calendar these today** (historical patterns — verify each cycle; set alerts a month early):
- **Sep 1, 2026, weekly check**: Google STEP India posting (careers.google.com/students) — apply the day it opens.
- **Aug–Nov 2026**: Microsoft, Atlassian, Uber, Adobe, Salesforce, ServiceNow, Sprinklr etc. Summer-2027 intern postings go live (rolling).
- **Sep 2026 →**: Amazon SDE intern applications (rolling — but see the **sequencing rule**, §14).
- **~Feb 2027**: GSoC orgs announced; **late Mar 2027**: proposal deadline (GSoC is open to anyone 18+ — no student-status requirement).
- **~Jun 2027**: Flipkart GRiD (you'll be eligible while still enrolled — check that year's rules).
- **Aug–Nov 2027**: final-year season — 6-month internships + new-grad postings.

---

## 5. The phases in detail

### Phase 0 · Mobilize (this week)

- [ ] **Move to the judge.** Re-solve 15–20 of your best repo problems directly on LeetCode this week (fast — you know them; the point is judge fluency, edge-case discipline, and account volume). Install **LeetHub** so every LC solve auto-commits to GitHub.
- [ ] **First contest this Sunday** (LC Weekly, 8:00 AM IST). Rating will be mediocre. Irrelevant — the habit starts now, and you need ~10 contests for the rating to mean anything.
- [ ] **Resume v2** (§12): both degrees, both projects with numbers, "Expected graduation: 2028."
- [ ] **Referral sheet + alerts** (§13): LinkedIn job alerts for "software intern" at each target; join 2–3 active "2028 batch" off-campus Telegram/Discord channels — they surface postings within hours.
- [ ] **STEP watch**: weekly reminder, every Monday.
- [ ] Portfolio/GitHub 1-hour polish: pin ParuAI, CollabCode, DSA; bio updated (you're 18, not 17 😉).

### Phase 1 · War sprint + applications (Sep–Dec 2026)

**The DSA sprint** (detail in §7): trees (Sep) → graphs (Oct) → DP (Nov–mid Dec) → company-tagged revision using your own 400-question bank (mid Dec →). Target: **~350 total quality solves by end of December**, all on the judge.

**The application campaign, in parallel** (~1 hr/day, non-negotiable):
- Apply the day postings open — rolling pipelines reward the first 48 hours.
- **Sequence by readiness** (§14): STEP immediately whenever it opens (its bar is closest to your current level, and there's no choosing your moment). Slower/multi-stage pipelines early. **Hold Amazon until ~Nov** — its OA arrives within days of applying and a failed OA triggers a ~6-month cooldown; take it after trees+graphs+tagged practice.
- Every application gets a referral attempt first (§13).
- If an OA or interview lands early: pause new topics for a week, drill that company's style from your bank, take the shot. **Any interview this season is a win** — worst case it's a dress rehearsal paid for by them.

**December vacation = 9–10 hr/day sprint**: finish DP, add the compressed CS-fundamentals pass (§11), first mock interviews.

### Phase 2 · Interview season (Jan–Apr 2027)

- Interviews for Summer 2027 concentrate here. Mode: maintenance + performance — 2 timed problems daily (one company-tagged), 1 contest weekly, **1–2 mocks weekly**, STAR stories written.
- Keep applying: postings continue through ~Feb, and off-cycle roles appear year-round.
- **Parallel fallback tracks** (start regardless of how big tech is going):
  - **GSoC 2027**: you're an unusually strong candidate — orgs using JS/TS are plentiful, and CollabCode/ParuAI prove you can own a codebase. Start contributing to 1–2 target orgs in Jan; proposal late Mar. GSoC pays, has no student requirement, and is the single best line for both global applications and German admissions.
  - **Startup summer internship** (Feb–Apr): Internshala, Wellfound, Cuvette, Unstop + cold DMs to founders shipping in your stack. With your projects, you will get offers. Even ₹10–15k/month — the line and the production experience are the point.

### Phase 3 · The summer (May–Jul 2027)

Execute whatever landed — big-tech internship (convert it: ship your project, ask sharp questions, be easy to work with), GSoC, or startup. In parallel, 2 hrs/day protected: **NeetCode 150 second pass** for speed + full CS fundamentals (§11). Resume v3 in July.

### Phase 4 · Final-year season (Aug 2027–Jan 2028)

Your second full-strength season, now with a summer credential:
- **6-month internships** (Jan–Jun 2028 — your final semester; they frequently convert to FTE). Confirm your college permits the semester away — for most BCA programs a final-semester internship is standard or negotiable.
- **2028-batch new-grad/FTE off-campus roles** — postings start mid-2027 and run all year. You're now hunting the actual job, with an internship on the resume.
- PPO conversion if you interned at big tech (then this phase is just backup-building).

### Phase 5 · Land + graduate (Jan–Jun 2028)

6-month internship or early FTE + graduation. Germany groundwork begins: **APS certificate** application (mandatory for Indian students, takes weeks–months — start ~mid-2028), IELTS booked, program shortlist (§17).

---

## 6. Your daily schedule (war-mode edition)

### Semester template (7 hrs)

| Time | Block | What |
|---|---|---|
| 06:30–08:30 | **Learn** (2h) | Current Striver topic: theory + guided solves |
| College | — | Protect CGPA ≥ 8; review failed-problem list on phone in gaps |
| 16:30–18:30 | **Solve** (2h) | 3–4 problems on the judge: current topic + 1 spaced-repetition re-solve |
| 18:30–19:00 | Break | Walk, food, no screens |
| 19:00–20:00 | **Timed** (1h) | One 45-min timed set (2 problems, contest conditions) — this hour is the interview simulator |
| 20:00–21:00 | **Campaign** (1h) | Applications, referral messages, alerts triage · (Phase 2+: mocks slot here) |
| 21:00–21:45 | **Projects** (45m) | Maintenance/weaponization only (§10) · Dec: CS fundamentals instead |
| 21:45–22:15 | **Close** (30m) | Log tracker, schedule re-solves, plan tomorrow's exact problems |

**Weekends:** LC Weekly Sunday 8 AM IST (+ Biweekly alternate Saturdays) with full upsolving; one 3-hr deep block on the week's hardest topic; Phase 2+: one mock. **One evening fully off weekly** — you're running a 20-month campaign, not a 20-day one.

**Exam weeks:** 1 hr/day minimum (one problem + review list). Never zero; never a 14-hour guilt binge after.

---

## 7. DSA curriculum — the remaining 50%, in JavaScript

**Spine:** Striver A2Z (continue where you are). **Pattern layer:** NeetCode 150. **Company layer:** your own `DSA_Patterns_Notes` 400-bank (Nov onward). **All solving on LeetCode.**

| Window | Topics | New solves |
|---|---|---|
| Sep wk 1–3 | Binary trees: traversals, views, diameter, LCA, path sums | ~45 |
| Sep wk 4 – Oct wk 1 | BST + heaps/priority queue + intervals/greedy | ~35 |
| Oct wk 2–4 | Graphs: BFS/DFS, components, cycle detection, topo sort, shortest paths, DSU | ~50 |
| Nov wk 1 – Dec wk 2 | **DP** (the separator — give it 6 full weeks): 1D, grids, subsequences/LCS, knapsack, strings, LIS, DP-on-trees | ~80 |
| Dec wk 3 → | Tries, bit manipulation, revision, company-tagged sets from your bank | ~40+ |

**Cumulative targets:** ~220 by end Oct · ~350 by end Dec · 400+ by Feb 2027 (with NeetCode 150 fully covered).

**Rules that make the count real:**
- **40-minute rule**: stuck 40 min → read the full editorial → close it → re-implement from scratch → re-solve at +7 and +30 days. An editorial you can reproduce a week later is a solve; a copied one is not.
- ~15–25 problems per topic, then move on; the daily spaced re-solve does retention.
- From October, narrate one solution aloud daily — interviews grade the narration.
- Hards: only company-tagged ones, only from December.

---

## 8. JavaScript DSA survival kit (pin this)

The gotchas that burn JS solvers in OAs and interviews:

1. **`.sort()` is lexicographic by default.** Always `arr.sort((a, b) => a - b)`. This single bug fails OAs silently.
2. **Number precision dies past 2⁵³−1.** Sums/products of 10⁵ elements up to 10⁹ can overflow doubles — reach for `BigInt` when products/large sums appear, and mind that `BigInt` is slow.
3. **No built-in heap.** Hand-roll a MinHeap once in September, keep it in a snippets file, and be able to rewrite it from memory (~25 lines). (LeetCode's JS runtime ships `@datastructures-js/priority-queue` — fine for practice speed, but interviews may want yours.)
4. **`Map`/`Set` over plain objects** for non-string keys and clean iteration; know that object keys stringify (`obj[[1,2]]` collides with `obj["1,2"]`).
5. **Recursion depth caps around ~10⁴.** Deep DFS on 10⁵-node graphs → write it iteratively with an explicit stack.
6. **Integer division:** `Math.floor(a / b)` truncates toward −∞ for negatives; `Math.trunc` (or `| 0` within 32-bit) truncates toward zero — know which you want.
7. **Strings are immutable** — build with arrays + `join("")`, never `+=` in a loop.
8. **Read input format carefully on HackerRank/HackerEarth** — unlike LeetCode, some OAs make you parse stdin in Node (`readline`). Do 2–3 practice runs on each platform *before* a real OA there.

---

## 9. Contest track (JavaScript edition)

Codeforces is off the table with JS (Node is technically supported, but the ecosystem, editorials, and rating economics are C++-first — not worth it on your timeline). Your contest home is LeetCode:

- **LC Weekly (every Sunday) + Biweekly (alternate Saturdays)** — from this week, permanently. Always upsolve the first problem you missed.
- Trajectory to expect: solving 2/4 by October, 3/4 consistently by January. Rating ~1650+ by Feb 2027 is a realistic stretch; **1800+/Knight** is the resume-worthy milestone (list it only when reached).
- **CodeChef** (supports Node) is an optional second cadence if you want more reps; skip if it crowds the schedule.
- Contests are your OA simulator: same clock, same alone-ness, same panic to be trained away. Treat every one as a dress rehearsal for the season you're already in.

---

## 10. Projects: stop building, start weaponizing

You have the differentiator most applicants lack. New rule: **zero new projects until Feb 2027.** The 45 min/day does this instead:

1. **Deploy ParuAI publicly** (it's your live demo — a recruiter clicking a link beats any README) and put the URL on the resume. Its free-model slowness is fine; the streaming preview is the wow.
2. **CollabCode's sandbox blocker**: Piston needs a privileged container — an **Oracle Cloud free-tier ARM VM** (or any ₹300–500/mo VPS) runs it. One weekend, and "deliberately not deployed" becomes a live multi-user demo. High leverage; do it in September.
3. **Defense prep** (this is the real work): for each project, write a one-page brief from memory — architecture diagram, the three hardest decisions and roads not taken (why Yjs over hand-rolled OT? why single-file HTML output? how does crash-recovery sweep work?), the worst bug and how you found it, what you'd redo. If you can't write it from memory, study your own codebase until you can. Interviewers smell borrowed code instantly — and reward deep ownership just as fast.
4. **READMEs → resume bullets**: "218 tests", "295 tests, 4 tiers", "CRDT-based real-time sync" — quantified, verifiable, excellent. Mirror them in the resume.
5. Your `System-Design-Books` CRDT/OT notes: keep exactly as CollabCode defense material. Everything else in that repo is frozen until 2027.

---

## 11. CS fundamentals (compressed for the compressed timeline)

- **December 2026 (OA-survival pass, ~20 hrs total):** OOP pillars with examples from your own code · OS: process vs thread, scheduling, deadlock, virtual memory · DBMS: indexes, transactions/ACID, normalization, joins · CN: TCP vs UDP, what-happens-when-you-type-a-URL, HTTP(S)/DNS. Source: any "top 50 interview questions" list per subject + Gate Smashers playlists at 1.5×. Goal: don't lose OA MCQ sections and interview warm-ups.
- **Summer 2027 (full pass):** proper depth + LeetCode SQL 50, per the original plan.
- **System design (HLD): still not required for internships.** Your notes repo waits.

---

## 12. Resume playbook (updated for your profile)

- **One page, ATS-safe** (Jake's template on Overleaf). No photo, no skill bars.
- **Education**: BCA (2025–2028, CGPA) on top; **BA Mathematics, IGNOU (2026–2029)** as a second line — a concurrent maths degree is an unusual, positive signal; label it clearly as a second degree. Add "Expected graduation: 2028" so recruiters can match you to the Summer-2027 intern cohort instantly.
- **Projects are your Experience section for now.** Two entries, ParuAI and CollabCode, three bullets each: what it is (one line a non-engineer understands), the hard technical thing (CRDT sync, streaming generation pipeline, sandboxed execution), the numbers (tests, users, performance). Live URLs.
- **Achievements**: LC stats once respectable (500+ solved or 1800+ rating — not before), GSoC/GRiD selections when they happen, anything ranked.
- Kill: certificate lists, objective statements, tech-logo walls, the word "passionate".
- Links that work: GitHub (pinned: ParuAI, CollabCode, DSA), portfolio, LinkedIn, LeetCode.
- Test: 3 people, 10-second skim each — what do they remember? Iterate until it's "built an AI site builder and a Google-Docs-for-code, solves hard problems."

---

## 13. Referrals & outreach — starting this week, not next July

Everything from v1 holds, compressed: the season is now, so the pipeline builds now.

**Who converts, in order:** your college's alumni anywhere in big tech (any batch — tier-3 alumni actively pull juniors up) → engineers posting "hiring/referral" on LinkedIn → engineers you share something with (city, stack, open source) → recruiters last.

**Rules:** ask only with a **specific job ID** · ≤80 words, resume attached, one genuine hook · one follow-up after 5–7 days, then move on · ~1 referral per 5–8 polite asks is normal · track every contact (§20) · warm up before you need them (a real comment on their post this week beats a cold ask next week).

**Template (LinkedIn DM):**
> Hi {Name}, I'm Naman, a 2nd-year student graduating 2028. I build in public — ParuAI (AI website builder, 218 tests) and CollabCode (real-time CRDT code editor): github.com/Naman830. {Company} has a SWE Intern opening for Summer 2027 (Job ID {###}) and I'd be grateful for a referral if my resume looks strong to you — attached. Thank you either way!

Your projects give your cold messages something most 2nd-years don't have: a reason to click. Lead with them.

---

## 14. Where & when to apply — Summer 2027 season

| Target | Typically opens | Your move |
|---|---|---|
| **Google STEP India** (1st/2nd yr) | **~Sep–Nov 2026** | **Primary target.** Apply the day it opens; essays matter — your self-taught story is STEP's exact demographic |
| Microsoft SWE Intern | ~Aug–Oct 2026 | Apply on sight + referral |
| Atlassian, Uber, Adobe, Salesforce, ServiceNow, Sprinklr, Media.net… | ~Sep–Nov 2026 | Apply on sight + referral; alerts catch the exact dates |
| **Amazon SDE Intern** (summer + 6-mo) | Rolling from ~Sep 2026 | **Hold until ~Nov** — OA arrives within days of applying, failing triggers a ~6-month cooldown. Apply after graphs + tagged prep |
| Goldman, JPMC, DE Shaw etc. | ~Sep–Dec 2026 | Banks: yes, apply. Pure quant/HFT: dropped (JS decision, CP-gated) |
| GSoC 2027 | Proposals ~late Mar 2027 | No student requirement; org contributions from Jan |
| Startup summer internships | Feb–Apr 2027 | The guaranteed fallback — your stack is exactly what they hire |
| Flipkart GRiD | ~Jun 2027 | Register if eligible that cycle |
| Final-year: 6-month internships + 2028-batch new-grad | Aug 2027 → | Second full season, stronger profile |

**The sequencing rule:** order applications by (pipeline speed × your readiness). Slow multi-stage pipelines and STEP: immediately. One-shot fast-OA companies with cooldowns (Amazon is the famous one): after your tagged prep in November. When an OA lands, you get 3–7 days to schedule — always take the latest slot and drill that company's patterns from your own 400-bank in between.

**Volume target this season: 60–80 applications** (every eligible big-tech + product-company intern posting), each with a referral attempt first. Check alerts + Telegram channels on a fixed twice-weekly schedule so it never eats DSA hours.

---

## 15. "Am I ready?" — the compressed-timeline truth

**You will be applying before you feel ready. That's not a flaw in the plan — it IS the plan.** The season doesn't wait for readiness, applications are free, silent rejections cost nothing, and every OA is a paid dress rehearsal. You calibrate prep with the bar below; you never use it to delay an application.

**Interview-readiness bar (aim: hit it by ~December 2026):**
- [ ] 2 unseen LC mediums in 60 min, working code, ~60–70% hit rate
- [ ] Trees, graphs, DP all covered with 15+ judge solves each
- [ ] 300+ total quality solves; re-solve backlog at zero
- [ ] 10+ contests done; solving 3/4 regularly
- [ ] 3+ mock interviews; can narrate a solution in English without freezing
- [ ] Both project one-pagers written from memory (§10)
- [ ] Top-50 OS/DBMS/CN questions answered
- [ ] 6 STAR stories written

**For STEP specifically** (may interview as early as Oct–Dec): the bar is lower — arrays, strings, hashmaps, two pointers, basic recursion/trees, solved *cleanly while communicating*. You are 6–8 weeks from that bar at your pace. If the invite comes early, drop everything and drill easy-mediums for two weeks.

---

## 16. Interview prep (how each round is won)

**OAs:** simulate before every real one (same duration, no phone) · read constraints first — they encode the intended complexity (n ≤ 10⁵ → O(n log n); n ≤ 20 → backtracking/bitmask) · brute-force partial credit beats a blank optimal · JS kit (§8) reviewed before every OA · **never cheat** — proctoring, shared blacklists, and the interview that follows expose it instantly.

**Live rounds — run the same loop every time:**
1. Restate the problem + invent a confirming example.
2. Ask 2–3 clarifying questions (empty input? duplicates? ranges?).
3. Say the brute force + complexity out loud, then improve. Never dive silently into code.
4. Get buy-in ("I'm thinking heap keyed on end-time — code it?").
5. Code cleanly, narrating. Real variable names.
6. Test aloud — the example + one edge case — *before* being asked. Debug calmly; they're grading recovery.
7. Stuck? Say what you know, what's missing, take the hint gracefully — well-used hints are a positive signal.

**Project rounds:** your best rounds if you do §10's defense prep — steer toward CollabCode's sync model or ParuAI's streaming pipeline whenever invited to.

**Behavioral:** 6 STAR stories ≤2 min each with a number in the result; map to Amazon's Leadership Principles. Your arc — self-taught, dual-degree, shipping tested systems from a tier-3 room — is a genuinely compelling ownership story. Rehearse it until it's tight, not theatrical.

**Mocks:** from November, weekly (Pramp, peers, seniors). The gap between "can solve" and "can solve while watched" closes only here.

---

## 17. The Germany 2029 track

Your stated path: highly-skilled SWE, prove big-tech capability, move abroad (Germany) around 2029. The clean route is an **MSc in Germany (Winter 2029 intake) → werkstudent/internship at big tech EU (Google Munich/Zurich, Amazon Berlin, Microsoft, SAP, Zalando…) → FTE**. Alternative: India big-tech FTE 2028 → internal transfer (real, but typically 2+ years and org-dependent).

What matters *now* (i.e., decisions today that Germany-2029 rewards):
- **Grades count in Germany far more than college tier.** German admissions convert your CGPA; keep BCA high and take the IGNOU BA Maths seriously — many German MSc CS programs reject applicants with thin math credits, and that second degree is your antidote (also: a 3-year Indian bachelor's is accepted by many but not all programs — the BA also hedges that; shortlist per-program in 2028).
- **GSoC + open source + internships** are the strongest CV items for both German admissions and the EU job market. One more reason GSoC 2027 is a first-class target, not a fallback.
- **Timeline:** mid-2028 — start **APS certificate** (mandatory for Indian students, slow) + IELTS + shortlist ~10 programs (uni-assist/VPD where needed) · late 2028–mid 2029 — applications for Oct 2029 start · budget reality: blocked account ≈ €11–12k/year (a 2028 FTE salary or internship savings make this self-funded).
- German language: not required for English-taught MSc or big-tech offices, but A2–B1 by 2029 makes life (and part-time jobs) dramatically easier. Duolingo-tier effort from 2028 is enough; zero hours before then.

---

## 18. FAQ — every doubt, answered straight (v2)

**Q1. Is Summer 2027 even realistic from <100 problems?**
Yes — with your specific inputs. Sep–Dec at 7 hrs/day ≈ 850 focused hours, on top of a mid-Striver base and daily coding fluency. The realistic outcome distribution: STEP and product-company interviews are genuinely winnable; Google/Microsoft SWE-intern offers are a stretch-but-possible; and even a "failed" season hands you 5–10 real OAs and interviews as training for the final-year season, where your odds jump. You lose nothing by running at it fully.

**Q2. Does BCA (vs B.Tech) hurt me?**
Only at the margins: a minority of postings hard-filter B.E./B.Tech — skip those, never lie. Everything else says "CS or related field," and once you're in the interview room, nobody asks. Your real filters are the same as everyone's: resume screen and DSA bar.

**Q3. Is JavaScript really OK for interviews?**
Completely — LeetCode, HackerRank, CodeSignal, HackerEarth all support it; interviewers evaluate problem-solving, not language choice. The genuine costs: hand-roll a heap (§8), mind number precision, and quant/HFT + Codeforces CP are off the menu. Given your dev-heavy profile and compressed timeline, momentum in JS beats a C++ restart. Decision closed.

**Q4. What about my 400-question company bank — should I keep building it?**
Stop curating, start executing. It becomes your Nov–Dec tagged syllabus and your pre-OA drill source. The repo's value now is measured in *your* solve count, not its README.

**Q5. Should I keep improving ParuAI/CollabCode or build something new?**
Neither — weaponize what exists (§10): deploy both, write the defense one-pagers, quantify the bullets. New features and new projects are frozen until Feb 2027. Your bottleneck is not proof-of-work; it's the judged clock.

**Q6. What if a recruiter/interviewer asks whether AI helped build my projects?**
Tell the truth: you built them hands-on, using modern tools like every working engineer does. Then demonstrate ownership — architecture from memory, trade-offs, the worst bug. Ownership, not typing, is what they're testing. (This is also why §10's defense prep is non-negotiable: claims of "mostly hand-written" get stress-tested.)

**Q7. CGPA — does it matter with a profile like mine?**
Cutoffs are dumb filters that don't read GitHub: stay above 7.5 minimum, target 8+. And for Germany, grades matter *more* than in Indian hiring — another reason not to let semesters slide during the sprint.

**Q8. How do I balance the IGNOU BA with all this?**
It's non-attending: treat it as exam-week bursts only (its exam calendar is known in advance — slot it like any exam week, 1 problem/day minimum). Its ROI arrives in 2028–29 (German admissions); it earns zero daily hours now.

**Q9. Contests feel brutal and my rating is embarrassing. Skip them?**
No — they're the only free simulator of the exact skill (timed, alone, judged) this entire season tests. Nobody sees a low rating you never list; everyone benefits from the 40 timed problems a season of contests forces. List the rating only when it flatters you.

**Q10. When do I take the Amazon OA?**
After graphs + two weeks of Amazon-tagged drilling — realistically November. Applying early and failing the OA can lock you out ~6 months, which on your compressed calendar means the whole season. This is the one place where "apply on sight" is wrong.

**Q11. An interview invite arrived and I'm mid-DP and terrified. What now?**
Take it. Pause new topics for 7–10 days, drill that company's patterns (your bank has a folder waiting), do 2 mocks, review §8 and §16, sleep. Interviews you feel unready for are how everyone's first offers actually happen — and a rejection now often comes with a 6–12 month re-apply window, which lands inside your final-year season anyway.

**Q12. What's my single biggest risk?**
Not DSA — you'll cover it at your pace. It's **splitting focus**: adding a new framework, a new project, a redesign of the notes repo, a 12th repo. Your GitHub shows builder's instinct, which is a superpower with exactly one failure mode: building instead of practicing when practicing is the bottleneck. The 45-minute dev cap is the whole discipline.

**Q13. What if nothing lands by April 2027?**
Then GSoC or a startup internship fills Summer 2027 (with your projects, a startup offer is near-certain), and you enter the final-year season — 6-month internships + 2028-batch new-grad roles — with a credential, 500+ problems, contest scars, and interview experience. The Germany track (§17) is also completely independent of whether big tech India says yes. Multiple doors; this season is just the first.

**Q14. Startups vs big tech for Summer 2027 — if I get both?**
Big tech, no contest (brand + PPO path). Between startups: pick the one with real engineers to learn from and a shot at a return offer. Stipend is the last tiebreaker at this stage.

**Q15. Should I do paid courses / a placement bootcamp?**
Still no. Striver (free) + NeetCode (free) + LC Premium for 2–3 months (~Nov, for company tags — the one purchase that's justified) covers 100% of the syllabus. Your gap is reps, which no course sells.

**Q16. My college placement cell?**
Register for everything, expect nothing, plan as if it gives nothing. Anything it delivers is a bonus.

**Q17. Service companies (TCS/Infosys) as backup?**
Final-year safety net only; they'd cap your trajectory now. Your floor is already higher: with your portfolio, a decent product startup is your realistic worst case.

**Q18. How do I not burn out running "war mode" for 8 months?**
One evening fully off weekly · 7+ hrs sleep (memory consolidation IS prep) · 30 min movement daily · exam-week minimum of 1 problem · never compensate a missed day with a binge · and remember the campaign math: you have *five* doors (Summer 2027, GSoC, final-year 6-month, new-grad 2028, Germany 2029). No single closed door ends anything — which means no single day deserves panic.

**Q19. Girlfriend of doubt: "everyone on LinkedIn is ahead of me."**
LinkedIn shows offer announcements, not the 300 rejections behind them. You're an 18-year-old with two systems-level projects, a dual degree, and 850 hours of runway before your first real season. Compare yourself to July-2026 you, monthly, in the tracker (§20) — that's the only comparison with signal.

**Q20. One thing people in exactly my position get wrong?**
They treat the *application campaign* as an afterthought to the *study plan* — grind DSA all autumn, "apply when ready," and discover in February the windows closed in November. In this plan the campaign hour (§6) has the same daily priority as the study hours. Apply while unready. That's the whole trick.

---

## 19. Rules of the game (v2 — pin above your desk)

1. **DSA gatekeeper · proof-of-work differentiator · referrals multiplier.** Your differentiator is built; fund the other two daily.
2. **The season is now.** Apply on sight (except Amazon: November). Referral attempt first. First 48 hours matter.
3. **Judge > repo.** Every solve on LeetCode; LeetHub keeps GitHub green.
4. **40-minute rule**, then editorial, then re-implement, then +7/+30 day re-solves.
5. **No new projects, no new frameworks, no repo redesigns until Feb 2027.** 45 min/day dev cap: deploy, defend, quantify.
6. **One contest minimum weekly** — it's the season's flight simulator.
7. **Sort with a comparator.** (And the rest of §8, before every OA.)
8. **Track everything** (§20); review monthly; compare only to last-month you.
9. **Protect the machine**: sleep 7+, one evening off, CGPA ≥ 8, exam-week minimum 1 problem.
10. **You will never feel ready. Apply anyway.** Especially to STEP.

---

## 20. The tracker (copy into Google Sheets)

**Sheet 1 — Weekly scorecard:** week · new judge solves · mediums · re-solves cleared · contest score/rating · applications sent · referral asks · mocks · CGPA guard OK? · one-line review.

**Sheet 2 — Failed-problem log:** link · topic · why failed (concept/bug/speed) · +7 date · +30 date · cleared?

**Sheet 3 — Application tracker (live from THIS WEEK):** company · role/Job ID · opens-date · referral contact · applied date · OA date/result · interview dates · status · notes.

**Sheet 4 — Referral contacts:** name · company · hook · first message · follow-up · outcome.

**Monthly review (last Sunday, 30 min):** unseen-medium hit rate vs last month · contest trend · applications-vs-openings gap · is any pillar starving? · adjust. That's the entire management system.

---

## Your next 7 days (start today)

1. Calendar every date in §4 with month-early alerts; Monday-weekly "check STEP posting" reminder.
2. Re-solve 15–20 known problems on LeetCode; install LeetHub.
3. **This Sunday, 8 AM IST: your first LC Weekly contest.** Non-negotiable.
4. Resume v2 (both degrees, both projects, "graduating 2028") — send it to 2 seniors for a 10-second-skim test.
5. Set LinkedIn job alerts for every §14 company; join 2–3 "2028 batch" off-campus channels; create the 4-sheet tracker.
6. Start trees on Striver (in JS, on the judge).
7. Weekend: deploy ParuAI publicly; order the Oracle free-tier VM for CollabCode's Piston sandbox.

Same closing truth as v1, with a shorter fuse: the plan doesn't crack the internship — the hours do. Yours start at 6:30 tomorrow. 🎯
