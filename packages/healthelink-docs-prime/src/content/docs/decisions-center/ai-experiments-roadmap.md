---
title: AI Experiments Roadmap
---

</div style="text-align: justify">

This roadmap outlines the key milestones and deliverables for HEALTHeLINK AI experiment's development and launch. As we gear towards creating a product that meets the needs , our focus will remain unwavering on offering a seamless compliance solution.
<br>
</br>

![AI Experiments Roadmap](ai-experiments-roadmap.drawio.svg)

</br>

```mermaid
    gantt
    title HEALTHeLINK AI Experiments Project Roadmap
    dateFormat  YYYY-MM-DD
    axisFormat %b-%d

    section Project Setup
	Discovery  and creation of SOW: done, milestone, 2024-4-24, 1d
    Project kick-off meeting: done, 2024-04-30, 1d
    Setup Github repository for AI Experiments GPM in Netspective environment: done, 2024-04-30, 3d
    Setup Github repository for AI Experiments Infrastructure as Code (IaC) in Netspective environment: done, 2024-05-02, 3d
    Create Project Management Website for HEALTHeLINK AI Experiments Project Roadmap : active , gpm_initial, 2024-04-30, 60d


	section Infrastructure and Environment Setup
    Setup Github repository for AI Experiments GPM in HEALTHeLINK environment: active, 2024-05-08, 15d
    Setup Github repository for AI Experiments Infrastructure as Code (IaC) in HEALTHeLINK environment:active, 2024-05-08, 15d
    Create AWS resources for developers in India : active, 2024-05-09, 2w
    Setup Github based project infrastructure :active, 2024-05-09, 2w
    Prepare Infrastructure as Code for Vanna.ai :active, 2024-05-15, 2w
    Prepare Infrastructure as Code for anything-llm :active, 2024-05-17, 2w
    Prepare Infrastructure as Code for lite-llm: active, 2024-05-17, 2w

	section Development and Deployment
    Evaluate anything-llm:: active, 2024-05-20, 15d
    Evaluate Glide AI Proxy: active, 2024-05-20, 15d
    Evaluate Wren:: active, 2024-06-01, 15d
    Evaluate DaLMatian: active, 2024-06-01, 15d
    Evaluate Vanna: : active, 2024-06-10, 15d
    Deployment of Vanna.ai in development environment: active, 2024-06-20, 2d
    Deployment of anything-llm in development environment: active, 2024-06-24, 1w
    Deployment of lite-llm in development environment: active, 2024-06-28, 1w
    Development of Polyglot API Gateway: active, 2024-07-10, 2d

	section Testing and Documentation
    Test English to SQL features : active, 2024-07-10, 15d
    Test English to Private Content when cloud APIs cannot be used (e.g., sensitive documents, clinical records) features: active, 2024-07-10, 20d
    Test English to Non-Sensitive and Non-PHI Business Content features: active, 2024-07-10, 20d
    Prepare comprehensive documentation (or videos) for each exemplar, including installation, configuration, and usage instructions:  active, 2024-08-10, 2w

    section User Training
    Develop training materials, tutorials, or workshops for QE users on effectively utilizing the AI exploration infrastructure :  active, 2024-08-10, 2w
```
