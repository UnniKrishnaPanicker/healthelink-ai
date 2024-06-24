---
title: Activity Log
---

Use this page to communicate any news & updates related to the HEALTHeLINK Governance, Planning, and Management (GPM) content.

## May 31, 2024

- Achieved monorepo using the NX tool

## May 30, 2024

- Tried to implement LiteLLM proxy UI locally using a dev container after making changes in the UI
- Worked on adding the Ollama option to providers in the LiteLLM proxy front end

## May 29, 2024

- Identified that a single repo is not useful as it may contain multiple programming languages, so selected the monorepo concept
- Evaluated monorepo
- Decided to select NX as the monorepo tool
- Tried to implement LiteLLM proxy UI locally using a dev container
- Debugged LiteLLM proxy server; figured out the issue with the model list not initialized error was because of not setting up .env and `proxy_config` files properly

## May 28, 2024

- Achieved single repo for HeL AI and pushed the [code](https://github.com/HEALTHeLINK/healthelink-ai)
- Set up Dev Container and was able to get LiteLLM proxy to work. Investigating the model list not initiated error

## May 27, 2024

- Created a single repo for HeL AI works using the pnpm build tool
- Tried to implement proxy UI locally using Docker. Checked LiteLLM integration with AnythingLLM using proxy UI. Checked (OpenAI, Gemini models)
- Tried to set up LiteLLM Dev environment locally without Docker; ran into package management issues and was unable to get it running
- Fixed the dependency issue in Vanna.ai during setup
- Conducted an initial review of Glide

## May 24, 2024

- Added Resource details in [GPM Site](/disciplines/netspective-resource-details/)
- Looked into the code for AnythingLLM and figured out that the LiteLLM integration works; it was an issue with not providing API keys
- Also tried the same with Ollama and figured out it works. LiteLLM still needs to be added as an embedding provider in AnythingLLM (we have submitted a feature request to the dev team)
- Reviewed the performance of Vanna.ai using GPT-4o
- Analyzed API calls for AnythingLLM and LiteLLM, and requested help from an open-source developer

## May 23, 2024

- Solved connection issue with Ollama embedding and submitted a bug report to the AnythingLLM dev team
- Set up the Dev environment for AnythingLLM local development

## May 22, 2024

- Netspective resources got permission in https://github.com/HEALTHeLINK/healthelink-ai
- Evaluated Vanna.ai with GPT-4o. Communicated issues with the developers of Vanna.ai and fixed dependency issues during setup
- Evaluated Ollama chat-completion and embedding for integration with LiteLLM
- Communicated integration issues with LiteLLM and Ollama to an open-source developer

## May 21, 2024

- Evaluated the new SQL agent feature of AnythingLLM
- Communicated issues with the developers of AnythingLLM

## May 17, 2024

- Updated meeting minutes of [May 15, 2024](/disciplines/minutes-of-meeting/)
- Tried to implement LiteLLM in LLM provider List in AnythingLLM and got the code of LiteLLM integrated into the AnythingLLM git repo and checked the code
- Evaluated BAML for prompting and embedding using AI providers OpenAI and Anthropic

## May 16, 2024

- Evaluated AI platforms (WrenAi, VannaAi, and DaLMatian) for English to SQL conversion capability and evaluation is available [here](/decisions-center/tool-evaluations/)
- Checked the hosted LiteLLM proxy UI
- Assessed BAML configuration formats and prompting with Anthropic, and generated type-safe Python and TypeScript
- Evaluated the feasibility of integrating AnythingLLM and LiteLLM

## May 15, 2024

- Meeting with customer HEALTHeLINK AI Experiment Project, mostly about GitHub access and AWS resources
- Evaluated BAML for generating type-safe Python and TypeScript for frontend integration

## May 13, 2024

- Went through LiteLLM (embedding and chat completion)

## May 10, 2024

- Understood the embedding and chat completion code of AnythingLLM
- Evaluated the LiteLLM Python library
- Evaluated the LiteLLM-js library
- Analyzed the internals of AnythingLLM to integrate LiteLLM as a new AI provider

## May 09, 2024

- Set up the Mojo language in a container and evaluated its interoperability with Vanna.ai to transition the app frontend to Mojo

## May 08, 2024

- Evaluated the Mojo programming language
- Assessed the Vanna.ai API and the feasibility of writing a client in Mojo

## May 07, 2024

- Added IaC for LiteLLM-proxy [here](https://github.com/netspective/healthelink-ai-expr-IaC-prime/tree/main/docker/vanna-ai) (Need to migrate to HeL GitHub when provided by HeL)
- Conducted a feasibility check of Mojo AWS ECS support
- Initially evaluated BAML TypeScript and Python generation in the playground
- Investigated Python limitations in AWS Edge

## May 06, 2024

- Added IaC for anything-llm in https://github.com/netspective/healthelink-ai-expr-IaC-prime (Need to migrate to HeL GitHub when provided by HeL)
- Added IaC for vanna-ai in https://github.com/netspective/healthelink-ai-expr-IaC-prime (Need to migrate to HeL GitHub when provided by HeL)
- Evaluated the setup and features of AnythingLLM and LiteLLM.
- Assessed AWS Gateway API and AI services.

## May 03, 2024

- Requested a new GPM repository for the HEALTHeLINK AI Experiments in HEALTHeLINK environment
- Requested a new GPM repository for the HEALTHeLINK AI Experiments Infrastructure as Code (IaC) in HEALTHeLINK environment

## May 02, 2024

- Established a monolithic GitHub repository (monorepo) to house all Infrastructure as Code (IaC) deployments within the Netspective Environment: https://github.com/netspective/healthelink-ai-expr-IaC-prime. This repository is slated for migration to the HEALTHeLINK repository in the future.

## April 30, 2024

- Updated AI Experiments GPM Site with [Architecture Diagram](/decisions-center/ai-experiments-architecture/).
- Updated AI Experiments GPM Site with [Roadmap](/decisions-center/ai-experiments-roadmap/).

## April 29, 2024

- Initial version of AI Experiments GPM Site Created.
