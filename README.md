# Mojo Docs

This repository powers [Mojo Docs](https://mojo-docs.com), a curated hub that highlights the best official resources for the Mojo programming language.

## Developing locally

```bash
yarn install
yarn start
```

This runs Docusaurus in development mode with hot reload enabled. The site uses a dark-only theme, so you should preview it with the default dark appearance.

To build for production:

```bash
yarn build
```

## Updating the curated docs

The content in `/docs/*.md` contains short intros for official Modular resources. Feel free to edit or add new pages under `docs/`, but keep the tone conversational and link directly to canonical sources.

If you add a new doc page, remember to update `sidebars.js` so it appears in the sidebar. The docs are grouped into “Mojo Language,” “MAX AI Docs,” “Platform & Community,” “Community Guides,” and “Project Docs,” so keep that structure in mind when introducing new sections.

### Community guide contributions

The [`docs/community-guides.md`](docs/community-guides.md) page explains how we’ll highlight community-maintained walkthroughs. To get your guide featured:

1. Open an issue proposing the page. Include the repo link, the relevant category, and a short outline.
2. Once we agree on scope, create `docs/community-guides/<project-name>/index.md` (nested files welcome if you need more depth).
3. Link out to the canonical documentation or README so visitors know where the source of truth lives.
4. Update `sidebars.js` with the new page so it appears under the Community Guides section.

### Project docs contributions

Nobody has taken advantage of the Project Docs slot yet, but the scaffolding is ready. When someone wants to host a full documentation set (or a shorter explainer) inside this site, follow the flow in [`docs/project-docs.md`](docs/project-docs.md):

1. Start with an issue describing whether you plan to import full docs or just an explainer.
2. Create `docs/project-docs/<project-name>/` and place your Markdown files there.
3. Cross-link to your canonical repo and note any build steps if content is synced from elsewhere.
4. Update `sidebars.js` so your entry shows up in the Project Docs section.

Even if you can’t write the doc immediately, open an issue so the community knows you’re interested.

## Adding a community project

Community projects are rendered from the JSON file at the repository root:

```
projects.json
```

Each entry should look like this:

```jsonc
{
  "name": "Project name",
  "description": "One-paragraph summary of what the project does.",
  "repoUrl": "https://github.com/owner/project",
  "docsUrl": "https://project-site/docs", // optional
  "category": "gpu-accelerator"
}
```

Guidelines:

- Use concise names and descriptions (roughly one sentence).
- Each project must specify exactly **one** category. Use one of the slugs below.
- If the project has documentation, add `docsUrl`; otherwise omit it.
- Submit a PR updating `projects.json`. The Projects page (`/projects`) will read the JSON automatically - no other changes are required.

### Available categories

| Category slug                    | Label                                 |
| -------------------------------- | ------------------------------------- |
| `language-compiler-tools`        | Language and Compiler Tools           |
| `build-packaging-dependency`     | Build, Packaging and Dependency Tools |
| `testing-qa`                     | Testing and QA                        |
| `benchmarking-profiling`         | Benchmarking and Profiling            |
| `core-utilities`                 | Core Utilities                        |
| `data-structures-algorithms`     | Data Structures and Algorithms        |
| `math-numerical`                 | Math and Numerical Computing          |
| `linear-algebra-tensors`         | Linear Algebra and Tensors            |
| `gpu-accelerator`                | GPU and Accelerator Programming       |
| `machine-learning-deep-learning` | Machine Learning and Deep Learning    |
| `python-interop`                 | Python Interop and Bindings           |
| `data-engineering-analytics`     | Data Engineering and Analytics        |
| `storage-databases`              | Storage and Databases                 |
| `networking-protocols`           | Networking and Protocols              |
| `web-development`                | Web Development                       |
| `observability-operations`       | Observability and Operations          |
| `security-cryptography`          | Security and Cryptography             |
| `concurrency-distributed`        | Concurrency and Distributed Systems   |
| `media-graphics-ui`              | Media, Graphics and UI                |
| `scientific-simulation-hpc`      | Scientific Simulation and HPC         |
| `robotics-embedded`              | Robotics, Aerospace and Embedded      |
| `finance-trading`                | Finance and Trading                   |
| `games-creative`                 | Games and Creative Coding             |

Pick the slug that best describes the primary goal of the project.

## Contributing

1. Fork the repo and create a branch.
2. Make your changes (docs, styles, `projects.json`, etc.).
3. Run `yarn lint` if applicable and `yarn build` to ensure the site compiles.
4. Open a PR describing what changed and why.

Thanks for helping keep the Mojo ecosystem easy to explore!
