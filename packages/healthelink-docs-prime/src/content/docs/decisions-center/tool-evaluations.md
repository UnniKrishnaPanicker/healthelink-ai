---
title: Evaluate different tools for AI Experiments
---

### Evaluate Wren + DaLMatian + Vanna

#### Task

Evaluate AI Platforms for English to SQL Conversion Capability

- [WrenAi](https://www.getwren.ai/)
- [VannaAi](https://vanna.ai/)
- [DaLMatian](https://www.dalmatian.ai/)
  A detailed evaluation report highlighting the strengths and weaknesses of each AI platform in English to SQL conversion.

#### Evaluation findings

- Regarding our assessment of WrenAI, utilizing the link provided, we tested its functionality with a PostgreSQL database. Throughout our evaluation, we encountered the following issues:

  - In instances where column names contain unusual symbols, the Text-to-SQL feature may encounter difficulties. Additionally, it is imperative to specify table names to ensure the accuracy of the results.

  - We observed that the SQL queries received from WrenAI were not consistently formatted correctly. Consequently, manual editing was necessary to achieve the desired query and results. Despite these efforts, the outcomes from join queries did not consistently meet our expectations.

- Concerning Vanna AI, if the generated results are unsatisfactory, there is the option to augment its performance by incorporating training data. However, a similar functionality to integrate training data was not found in WrenAI.

- Regarding DaLMatian, we previously provided an update in the last week of March. Our evaluation concluded that it does not outperform Vanna AI, and the results often deviate from expectations.
