---
id: project-docs
title: Overview
---

# Overview

Project Docs is for **project-specific documentation**: design notes, integration tips, release guides, or full manuals that maintainers want to host alongside Mojo Docs. Unlike the Community Guides (which focus on learning the language), this section is about shipping software - how your package works, how people should use it, and what to watch out for.

Nothing lives here yet, but the scaffolding is ready the moment a maintainer wants to experiment.

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

Not ready to write the page yourself? Open an issue anyway - someone else from the community might help bring it to life. The sooner we collect real project documentation here, the easier it becomes for new users to adopt those tools.
