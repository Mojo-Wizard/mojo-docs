---
title: Standard library deep dive
---

# Standard library deep dive

**What it is:** The [Mojo standard library reference](https://docs.modular.com/mojo/lib/) that Modular publishes. It documents every built-in type, module, and helper.

**Why read it:**

- Clarifies which types are cheap values versus heap-backed, so you know when copying is safe.
- Lists traits and methods for each core type, which helps when you are porting Python code.
- Includes GPU- and LayoutTensor-aware packages that are easy to miss elsewhere.

**Tips before you click:**

- Start with the Core Types section to get a feel for the ownership semantics.
- Use the Collections and Algorithms entries when you’re hunting for helpers (`enumerate`, `zip`, reductions, etc.).
- Keep an eye on the GPU and Layout chapters-Modular updates them frequently as MAX evolves.

[Open Modular’s standard library docs](https://docs.modular.com/mojo/lib/)
