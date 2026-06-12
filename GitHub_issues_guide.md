# GitHub Issues Agent Guide for sqrx_nextjs

This document defines the structured workflow, discipline, and rules for AI agents when handling GitHub issues, bug fixes, enhancements, and updates in this repository (Project: **sqrx_nextjs**). Follow these guidelines strictly to ensure code quality, predictability, and project health.

---

## 1. Branch Management & Issue Triage

- **Branch Naming**: All bugs, improvements, updates, and feature developments **MUST** be handled on a separate branch named `issue`.
- **Triage and Planning**:
  When an issue is assigned or a task is given to you:
  1. **Understand the Scope & Assign Labels**: Read the issue description thoroughly. Identify the issue type and map it to the corresponding GitHub default labels. If the issue doesn't have the appropriate label, update it using the `issue_write` tool:
     - **Bug** (something isn't working) -> Apply **`bug`** label.
     - **Enhancement** (new feature/improvement) -> Apply **`enhancement`** label.
     - **Documentation** (modifying markdown/guides/comments) -> Apply **`documentation`** label.
     - **Chore / Update / Clarification** -> Apply **`question`**, **`good first issue`**, or other relevant default labels.
  2. **Locate and Reproduce**:
     - Locate the relevant files, routes, or components.
     - For bugs, locate or write a reproduction script/test case to confirm the issue exists.
  3. **Establish a Plan**:
     - Unless the fix is completely trivial (e.g., a simple spelling fix), you **MUST** formulate an implementation plan.
     - Outline the proposed changes, affected files, and verification steps.
     - Present the plan to the user for confirmation before writing code.

---

## 2. Code Changes & Discipline

- **Branch Context**: Always ensure you are committing and working on the `issue` branch when addressing an issue.
- **Minimalist Approach**: Implement only what is required to solve the issue. Avoid scope creep or unrelated refactoring.
- **Backwards Compatibility**: Ensure that updates do not break existing public APIs, interfaces, database schemas, or configurations.
- **Documentation**:
   - Keep JSDoc, inline comments, and markdown documents up-to-date with your changes.
   - If an issue introduces new configurations or environment variables, update the documentation immediately.

---

## 3. Milestone & Goal Management

When working on complex issues or multi-step enhancements:

- **Create a Task List**: Track your progress in a `task.md` file (or equivalent state tracking). Mark items as `[ ]` (pending), `[/]` (in-progress), and `[x]` (completed).
- **Update on the Go**: If requirements change or new hurdles are encountered, update the task list and implementation plan immediately, informing the user of the adjustments.
- **Milestone Verification**: After completing each critical section or sub-task, run tests and perform manual verification to verify stability before proceeding.

---

## 4. Verification and Testing

No issue is resolved until it has been verified:

1. **Automated Tests**: Run the test suite (`npm run test`, `bun test`, etc.) to ensure that:
   - The specific bug is fixed.
   - No regressions are introduced.
2. **Manual Verification**: Run the development environment (`npm run dev` or equivalent) and verify the changes in the browser or terminal.
3. **Walkthrough**: Document your changes and verification results in a concise summary/walkthrough.

---

## 5. Summary of Rules

- **DO NOT** make changes without locating the root cause first.
- **DO NOT** deploy or mark an issue as resolved without running the test suite.
- **DO** ensure the issue has the correct GitHub default label applied before starting development.
- **DO** use the correct `state_reason` ('completed', 'not_planned', 'duplicate') when closing issues via the `issue_write` tool.
- **DO** keep files organized and use absolute links when referencing files in documentation.
- **DO** communicate milestones and blockers clearly to the user.
