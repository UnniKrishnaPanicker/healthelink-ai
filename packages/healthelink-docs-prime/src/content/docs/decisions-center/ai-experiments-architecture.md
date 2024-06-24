---
title: AI Experiments Architecture
tableOfContents: false
sidebar:
  order: 3
  label: AI Experiments Architecture
---

![Architecture](ai-experiments-architecture.drawio.svg)

### Core Services

- [**vanna.ai**](https://vanna.ai/): Vanna AI  is a tool that uses retrieval augmentation to help you generate accurate SQL queries for your database using LLMs.

- [**anything-llm**](https://useanything.com/): AnythingLLM is the easiest to use, all-in-one AI application that can do RAG, AI Agents, and much more with no code or infrastructure
- **TypeScript/Python**: The primary programming languages driving custom development within the project. TypeScript, particularly favored for its strong typing and scalability in web applications, is preferred wherever feasible, utilizing Deno, Bun, or NodeJS environments. Python, though secondary, remains indispensable for integrating exceptional tools or libraries crucial for the project's success.

- [**BAML**](https://docs.boundaryml.com/docs/home/overview): An LLM function is a prompt template with some defined input variables, and a specific output type like a class, enum, union, optional string, etc. BAML is a configuration file format to write better and cleaner LLM functions.

- [**MOJO**](https://www.modular.com/max/mojo): Mojo combines the usability of Python with the performance of C, unlocking unparalleled programmability of AI hardware and extensibility of AI models.
