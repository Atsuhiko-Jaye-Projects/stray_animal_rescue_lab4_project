# Lab Activity #4 — Prompt Log
## Project: PawPath — Web-Based Stray Animal Rescue & Care Management System
**Innovation sector:** Health & Wellness Innovation

> **Evidence integrity:** The prompts in this document are prepared prompts for you to submit to GitHub Copilot. They are not proof that Copilot was used. Replace all placeholders with the exact prompts submitted, actual Copilot responses or saved-file references, and observations from your own runs. Do not report tests as passed unless you performed them. Preserve earlier output versions in `outputs/`.

---

## Task 1 — Sector Selection

**Sector:** Health & Wellness Innovation  
**Local challenge (proposed):** Community members may encounter stray animals but have no simple, organized way in this prototype to record sightings and review rescue follow-up. This is a project premise, not a verified finding about a specific community.  
**Target users:** Community residents, animal rescue volunteers, and shelter coordinators.  
**Project:** PawPath — Web-Based Stray Animal Rescue & Care Management System.  
**Proposed solution:** A responsive, single-page interface for submitting fictional animal-sighting reports, reviewing and filtering sample rescue requests, and displaying basic non-clinical care follow-up examples.  
**Core features:**
1. Stray animal report form with animal type, location description, observed condition, and optional details.
2. Rescue request board with status filtering and editable demo statuses.
3. Basic animal care follow-up cards for food/water, shelter, and next steps.

**Scope constraints:** Semantic HTML, CSS, vanilla JavaScript, fictional demo data, no backend/database/authentication/external APIs. This prototype does not contact rescuers or provide veterinary diagnosis.

---

## Task 2 — Zero-Shot Prompting

**Technique:** Zero-shot  
**Objective:** Establish a baseline from a short prompt without examples.

**Exact prompt submitted to Copilot:**
> Create a simple webpage for a stray animal rescue and care management system.

**Actual Copilot output:**
[PASTE THE ACTUAL COPILOT RESPONSE HERE OR SAVE THE GENERATED SOURCE AS `outputs/task2-zero-shot.html`.]

**Observation — SAMPLE ONLY; replace with actual result:**
A short prompt communicates the general project topic, but may leave the page layout, target users, exact features, data behavior, accessibility, and safety limitations unspecified. Record only what the actual output did or did not include.

**Next action / verification:**
Save the baseline output before changing files. Open it in a browser and test any controls that were generated. Record actual behavior and any errors.

---

## Task 3 — Improve: Anatomy of a Prompt

**Technique:** Structured prompt using Role, Task, Context, Constraints, Expected Output, and Acceptance Criteria.  
**Objective:** Improve relevance and testability.

**Exact prompt submitted to Copilot:**
> **Role:** Act as a careful frontend web developer.
>
> **Task:** Build a responsive single-page frontend prototype named “PawPath — Web-Based Stray Animal Rescue & Care Management System.”
>
> **Context:** The project is for the Health & Wellness Innovation sector. Its proposed users are community residents, animal rescue volunteers, and shelter coordinators who need a simple way to organize animal-sighting reports and sample follow-up statuses. Use fictional demonstration data only.
>
> **Constraints:** Use semantic HTML, CSS, and vanilla JavaScript. Do not use a backend, database, authentication, frameworks, external APIs, live location tracking, or real rescue integrations. Do not provide veterinary diagnosis or treatment instructions. Include a safety note explaining that this is a classroom demo and does not contact a real rescue team. Make the interface responsive and keyboard accessible.
>
> **Expected Output:** Provide `index.html`, `styles.css`, and `script.js`. Include (1) a report form with animal type, location description, observed condition, and optional details; (2) a report board with status filtering and editable demo statuses; and (3) basic non-clinical care follow-up cards.
>
> **Acceptance Criteria:** The page works on mobile and desktop; form submission adds a demo report to the page without a network request; status changes update the displayed status and summary counts; filtering shows only the selected status; labels are associated with inputs; keyboard focus is visible; user-entered text is not inserted as unsafe HTML; and the interface clearly identifies fictional data and the prototype's limitations.

**Actual Copilot output:**
[PASTE THE ACTUAL COPILOT RESPONSE HERE OR REFERENCE YOUR SAVED FILES IN `outputs/task3-structured/`.]

**Observation — SAMPLE ONLY; replace with actual result:**
The structured prompt provides more explicit requirements and acceptance criteria than the zero-shot prompt. Confirm whether the actual Copilot output implemented these requirements.

**At least two actual differences from zero-shot:**
1. [Record a real difference found by comparing your two outputs.]
2. [Record a second real difference found by comparing your two outputs.]

**Next action / verification:**
Test form submission, status changes, filters, summary counts, keyboard operation, mobile layout, and safety copy. Save this version separately.

---

## Task 4A — Few-Shot Prompting

**Technique:** Few-shot prompting  
**Objective:** Use examples to encourage consistent report data.

**Exact prompt submitted to Copilot:**
> Create four additional fictional stray-animal report examples using this exact format:
>
> Example 1:  
> Animal type: Dog  
> Location: Near the public market  
> Observed condition: Appears calm  
> Status: Reported  
> Notes: Sample report for classroom demonstration only.
>
> Example 2:  
> Animal type: Cat  
> Location: Near the community park  
> Observed condition: Seems frightened  
> Status: Rescue in Progress  
> Notes: Fictional example; do not approach a frightened animal.
>
> Generate four additional fictional examples using the same five fields. Keep descriptions concise and non-graphic. Do not invent medical diagnoses or treatment recommendations. Then render the records as accessible report cards using semantic HTML and text-safe DOM insertion.

**Actual Copilot output:**
[PASTE THE ACTUAL COPILOT RESPONSE HERE OR SAVE IT AS `outputs/task4a-few-shot.md`.]

**Observation — SAMPLE ONLY; replace with actual result:**
The examples specify a consistent five-field structure. Compare the actual generated records with that structure and note any missing or inconsistent fields.

**Next action / verification:**
Check the output fields, ensure examples are clearly fictional, and verify that report text is inserted safely and can be read with keyboard/screen-reader navigation.

---

## Task 4B — Role Assignment

**Technique:** Role assignment  
**Objective:** Review the same interface from an accessibility and usability perspective.

**Exact prompt submitted to Copilot:**
> Act as a frontend accessibility reviewer. Inspect the current PawPath HTML, CSS, and JavaScript. Identify up to three high-priority issues, if any, involving semantic structure, form labels, keyboard navigation, visible focus, status announcements, color contrast, responsive layout, or safe handling of user-entered text. For each issue, identify the relevant code, explain the user impact briefly, and recommend the smallest correction without expanding the project's scope. Do not claim a defect exists without pointing to evidence in the supplied code. Do not add a backend or veterinary functionality.

**Actual Copilot output:**
[PASTE THE ACTUAL COPILOT RESPONSE HERE OR SAVE IT AS `outputs/task4b-role-review.md`.]

**Observation — SAMPLE ONLY; replace with actual result:**
A specialized reviewer may identify usability concerns that a general code-generation prompt overlooks. Record only concerns Copilot actually raised, then inspect the code to see whether they are valid.

**Next action / verification:**
Confirm any suggested issue in the code. Apply one justified correction and test it, or explain why a recommendation was not applicable.

---

## Task 5 — Structured Analysis and Refinement

**Technique:** Structured technical analysis and targeted refinement  
**Objective:** Identify a meaningful weakness and verify a correction or additional test.

**Exact prompt submitted to Copilot:**
> Review the current PawPath prototype against these requirements: (1) submitting a valid report adds a new demo card without reloading the page, (2) blank required fields are rejected by browser validation, (3) changing a report status updates its badge and summary counts, (4) the status filter shows only matching reports, (5) user-entered text is handled safely, (6) form controls have labels and visible keyboard focus, and (7) the layout works on a narrow mobile viewport. Based only on the supplied code, identify the two most important confirmed issues, or state that you cannot confirm a defect. Point to the relevant code and recommend the smallest correction. Provide a short reproducible test procedure with expected results. Do not provide hidden internal reasoning; give concise findings and evidence. Do not add backend services or veterinary advice.

**Actual Copilot analysis:**
[PASTE THE ACTUAL COPILOT RESPONSE HERE OR SAVE IT AS `outputs/task5-analysis.md`.]

**Selected correction or additional test:**
[Describe the actual correction you applied, or the additional test you performed if no valid defect was found.]

**Verification procedure:**
1. Open `index.html` in a modern browser.
2. Submit the form with required fields blank; confirm submission is blocked by validation.
3. Submit a fictional report with all required fields; confirm a new card appears without page reload.
4. Change a report status; confirm the badge and summary counts update.
5. Filter by each status; confirm only matching cards are visible.
6. Enter special characters such as `<script>` in a text field; confirm they display as text and do not execute as markup.
7. Use Tab and keyboard controls; check visible focus and label usability.
8. Resize to a narrow mobile viewport; check that content remains readable and no horizontal page overflow appears.
9. Confirm the safety note clearly says the demo does not contact rescuers.

**Actual verification results (complete after testing):**
- Required-field validation: [PASS/FAIL + actual observation]
- Demo report creation: [PASS/FAIL + actual observation]
- Status and counts: [PASS/FAIL + actual observation]
- Filtering: [PASS/FAIL + actual observation]
- Text safety: [PASS/FAIL + actual observation]
- Keyboard and focus: [PASS/FAIL + actual observation]
- Mobile layout: [PASS/FAIL + actual observation]
- Safety disclaimer: [PASS/FAIL + actual observation]

**Next action:**
Preserve the version before changes, apply the smallest justified correction, and rerun the relevant test. Save the corrected version separately.

---

## Task 6 — Compare and Submit

Complete the observations below only after running the actual experiments.

| Technique | Actual observation |
|---|---|
| Zero-Shot | [What did Copilot assume or omit?] |
| Structured Prompt | [What improved after context and acceptance criteria were added?] |
| Few-Shot | [Were the example records more consistent? Give evidence.] |
| Role Assignment | [Which accessibility or usability concern was identified and confirmed?] |
| Structured Analysis | [What correction or additional test was completed, and what happened?] |

### Final reflection — draft to personalize with real evidence

This activity showed how the way a requirement is communicated can affect AI-assisted frontend development. The zero-shot prompt establishes a baseline, while the structured prompt makes the intended users, required features, constraints, and acceptance criteria clearer. Few-shot prompting can encourage consistent report formats, and role assignment can focus attention on accessibility and usability. However, generated code and suggestions must be inspected and tested before acceptance. In the final submission, I selected the version that best met the requirements based on the actual outputs and verification results recorded above.

**Replace or expand this draft with specific examples from your own experiments.**

---

## Submission checklist
- [ ] Working single-page frontend: `index.html`, `styles.css`, `script.js`
- [ ] Exact prompts and actual Copilot output records
- [ ] Baseline output preserved before refinements
- [ ] Structured prompt output preserved
- [ ] Few-shot output documented
- [ ] Role-assignment response documented
- [ ] Structured analysis response documented
- [ ] At least one justified correction or additional test recorded
- [ ] Verification results based on tests actually performed
- [ ] Comparison table and reflection completed with real evidence
- [ ] Project folder/repository and CodeSandbox URL prepared as required by the instructor
