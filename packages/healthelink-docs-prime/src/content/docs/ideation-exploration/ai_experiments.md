---
title: AI Experiments
tableOfContents: false
sidebar:
  order: 1
  label: AI Experiments
---
<div style="text-align: justify">

### Development of Shared and Reusable AI Exploration Infrastructure for Qualified Entities (QEs)

This project aims to establish an experimental AI exploration infrastructure accessible to QEs (HIEs). This infrastructure will provide access to exemplar implementations of various AI functionalities with potential practical applications, detailed in the following:

- **English to SQL:** This utilizes the open-source Vanna.ai to translate natural language queries into SQL code for efficient data retrieval.
  - A clinician researcher is interested in the prescribing rates of statins among patients with an abnormal EKG who have not been referred to a cardiologist.
  - A nurse in an outpatient practice wants to identify all pediatric patients who have not had adequate lead screening and wants to categorize those children by zip code of highest lead risk.
  - A maternal health provider is seeking to understand how well their practice performs in completing 2, 3, and 4 maternal health visits after a patient has been initially identified as having a positive pregnancy test.
- **English to Private Content when cloud APIs cannot be used (e.g., sensitive documents, clinical records):** This leverages the open-source AnythingLLM to translate natural language requests into private content, potentially including access to clinical records while ensuring patient privacy.
  - A primary care provider wants a concise narrative summary of all clinical activity shared with HEALTHeLINK since the patient's last visit, including but not limited to, provider visits, hospital and ED admissions, discharge plan, medications prescribed by specialists, and vaccinations received.
  - An oncologist is reviewing outside health records for a patient and would like a summary of key findings across multiple complex genetics reports.
  - A population health specialist needs to identify the prevalence of patients documented as having been sexually active in the past year.
- **English to Non-Sensitive and Non-PHI Business Content:** This creates a single API endpoint that connects users to OpenAI, Anthropic, and Google Gemini APIs, enabling translation from English to various non-protected health information (non-PHI) business content.
  - HEALTHeLINK staff person wants to better understand the xxx page of the 1115 Waiver document and wants to solicit an answer to a specific question relating to this new regulation.
  - HEALTHeLINK staff person wants to find and summarize the exclusions enumerated in the 21st Century Cures Act
  - HEALTHeLINK staff person wants to read a summary of an internal policy on maintaining confidentiality when accessing patient health record data.

Each of the above technologies may be hosted in a shared environment managed by TechBD (QCS) or any QE should be able to take components of the architecture and install it within their own environments.

## Scope of Work

The scope of this project encompasses the following tasks:

- **Deployment of Vanna.ai**
  - Acquire and install the necessary open-source Vanna.ai components on designated infrastructure.
  - Configure Vanna.ai to handle user queries and translate them into SQL code.
  - Integrate Vanna.ai with a suitable database system.
  - Develop and implement a user interface for interacting with the English to SQL functionality.
- **Deployment of AnythingLLM**
  - Acquire and install the open-source AnythingLLM on designated infrastructure.
  - Configure AnythingLLM to accept natural language requests and generate private content, adhering to relevant data privacy regulations concerning clinical records.
  - Implement security measures to ensure authorized access and prevent unauthorized disclosure of sensitive information.
  - Develop and implement a user interface for interacting with the English to private content functionality.
- **Development of Polyglot API Gateway**
  - Choose [Glide](https://github.com/einstack/glide) or design and develop a single API endpoint accessible to QE users.
  - Integrate this API endpoint with the existing APIs of OpenAI, Anthropic, and Google Gemini.
  - Implement functionalities within the API to route user requests based on language and content type (e.g., non-PHI business content) to the appropriate external API.
  - Develop error handling and logging mechanisms for the API gateway.
- **Documentation and Training**
  - Prepare comprehensive documentation (or videos) for each exemplar, including installation, configuration, and usage instructions.
  - Develop training materials, tutorials, or workshops for QE users on effectively utilizing the AI exploration infrastructure.

## Deliverables

- Functional English to SQL instance using Vanna.ai.
- Functional English to private content instance using AnythingLLM.
- Documentation for each exemplar (installation, configuration, usage).
- Functional polyglot API endpoint connecting to OpenAI, Anthropic, and Google Gemini APIs using [Glide](https://github.com/einstack/glide) or custom developed solution.
- Training materials (tutorials, workshops) for QE users.
</div>  