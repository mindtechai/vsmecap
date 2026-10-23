# VSMECAP — Push to GitHub: Manual Runbook

The migrated Vite codebase (committed on local `main` as "chore: migrate frontend from craco to vite for node 22/24 compatibility") is pushed to github.com/mindtechai/vsmecap by the owner, from the workspace terminal, overwriting the remote `main` branch as already approved.

## Who it's for
- The site owner, who will run the push themselves because token pasting is restricted in the chat UI
- No one else — nothing on the page or in the codebase changes

## Core features and experience
- **Everything is already staged**: local `main` holds the complete Vite migration commit; `origin` is set to https://github.com/mindtechai/vsmecap.git; git identity is configured (Salil Patankar <salil@proactiveconsultancy.co.uk>)
- **Exact runbook the owner runs** in the workspace terminal:
  1. `cd /app`
  2. `git push --force origin main`
  3. When prompted: Username = `mindtechai`, Password = the GitHub token (the fine-grained PAT once its Contents: Read and Write permission is active, or a classic token with `repo` scope)
  4. Expected result: `+ ... main -> main (forced update)`
- **Verification step (agent-run afterwards, read-only)**: `git ls-remote origin main` to confirm the remote tip matches the local commit
- **Force push consequence, already approved**: the existing remote commit on `main` (repo-creation README) is discarded and replaced by this codebase's history

## User flow
Owner opens the workspace terminal → runs the two commands → enters credentials when prompted → remote main now matches local main → agent verifies the remote tip on request → Vercel can import the repo (root `frontend`, output `build`, Node 22/24).

## UI/UX feel
No visual or product change. This is a git operation only; visitors and the preview are untouched.

## Implementation phases
- **Phase 1 (now — MVP)**: hand over the runbook above; nothing is executed by the agent. On the owner's word afterwards, the agent runs the read-only verification (`git ls-remote`) to confirm the push landed
- **Phase 2**: connect the Vercel project to mindtechai/vsmecap (root directory `frontend`, build output `build`, Node 22/24) and confirm the first production deploy
- **Phase 3**: resume content work — draft copy review pass, favicon, SEO meta polish, then point vsmecap.com at the deployment

## Assumptions
- The owner runs the push personally; the agent never handles a token again — decided by the user
- Force-overwriting remote `main` is accepted; its single existing commit is disposable — confirmed by the user
- The fine-grained token's Contents permission will be fixed by the owner before pushing, or a classic `repo`-scope token will be used instead — owner's choice, not the plan's
- The workspace terminal (code server) is available to the owner for running the commands
- No code, copy or config changes are in scope; the local commit is final for this push
