---
title: Mojo by Example
---

# Mojo by Example

**Link:** [https://ruhati.net/mojo/index.html](https://ruhati.net/mojo/index.html)

Mojo by Example is a community-written handbook by Ruhati Öztürk. It follows the “learn by example” format you might know from the Go or Rust books: each chapter introduces a concept, explains why it matters, and ends with short, copy-friendly snippets. The guide currently covers:

- Language basics (values, types, functions, control flow)
- Structs, modules, and packages
- Python interop and data exchange
- Early looks at GPU kernels and performance tips

## Why it’s useful

- Gives a friendlier walkthrough than the official reference for people who already know Python or Rust.
- Shows small, focused Mojo snippets you can paste into `mojo run` without scaffolding a whole project.
- Helps contextualize what “value semantics” and “ownership” feel like in real code.

## Important caveats

The author explicitly warns readers that Mojo is still evolving quickly:

> _“Mojo programming language is still under heavy development. Some of the chapters may get obsolete … I have other commitments and therefore may not get updated as fast as I wish. Thanks for your patience.”_

Keep that in mind as you read:

- Some syntax or APIs might lag behind the latest compiler builds.
- A few chapters (like dictionary literals) are placeholders until the language lands the feature.
- Cross-reference the [official Modular docs](https://docs.modular.com/mojo/) if you see discrepancies.

If you notice outdated sections, consider opening an issue or PR at the author’s site to keep the guide current.
