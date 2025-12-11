---
id: project-docs
title: Overview
---

# Overview

This section is a parking spot for the day maintainers want to host their own documentation here - either as a full import or as a short overview that points to deeper references. No projects are using it yet, but the moment someone wants to experiment, everything is ready.

## Two ways to participate

1. **Full documentation import.** When a project already ships docs in Markdown, we can port them here (one folder per project) as long as they stay in sync with the canonical repository.
2. **Short-form explainer.** Prefer a lighter touch? Publish a single page that covers the elevator pitch, how to get started, and which resources to read next. Think of it as a quickstart that links back to your repo.

Either way, every entry should include:

- Project name and maintainer(s).
- Primary category (match the slug used on the [Projects directory](/projects)).
- Links to the official repo, packages, and any hosted docs.
- Clear guidance on how readers can learn more or contribute.

## How to add your project docs

1. Open an issue proposing the addition. Include the repo link, category, and whether you want the **full-docs** or **short-explainer** format.
2. After we confirm scope, create `docs/project-docs/<your-project>/` and place your Markdown files there. For single-page explainers, `docs/project-docs/<your-project>/index.md` is plenty.
3. Reference any upstream build steps if you’re syncing existing docs (generators, diagrams, etc.).
4. Update `sidebars.js` so your project appears under the Project Docs section.

Not ready to write the page yourself? Open an issue anyway - someone else from the community might help bring it to life.
