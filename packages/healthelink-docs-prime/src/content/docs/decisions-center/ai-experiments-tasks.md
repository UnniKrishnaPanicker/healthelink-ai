---
title: AI Experiments Tasks
---

</div style="text-align: justify">

The following tasks will outline the main objectives we need to accomplish for the AI Experiments project. This document is temporarily available here. Once the HeL GitHub is ready, these tasks will be managed within GitHub itself
<br>

### Create OpenAI API key for development purposes

### Create GitHub repositories for GPM and IaC in HeL Project

As part of our HEALTHeLINK project, we need to establish GitHub repositories for Governance, Planning and Management (GPM) and Infrastructure as Code (IaC). These repositories will serve as the central hubs for managing documentation, code, and resources related to these aspects of the project.

Tasks:

- Create a new GitHub repository named "healthelink-gpm-prime" for HEALTHeLINK Governance, Planning, and Management.
- Establish appropriate access controls and permissions for team members involved in GPM. GitHub IDs include razakpm, rinshadka, and abduljaleeledathol.
- Import existing project from https://github.com/netspective/healthelink-docs-prime.
- Create a new GitHub repository named "healthelink-iac-prime" for Infrastructure as Code.
- Configure access controls and permissions for team members working on IaC.
- Import existing project from https://github.com/netspective/healthelink-ai-expr-IaC-prime.
  [ In the weekly session meeting on May 8th, 2024, it was decided that GitHub repositories will be set up by the HeL team soon, and they will inform the Netspective team accordingly.]

### Create AWS resources for developers in India (in isolated area from all other HeL areas)

Chris will need to decide the strategy for setting up AWS resources, including Virtual Private Clouds (VPCs), subnets, security groups, and then proceeding to set up EC2 instances and S3 storage etc. We recommend using EC2 instances for development purposes initially. The Infrastructure as Code (IaC) prepared can later be transitioned for use with ECS or EKS in the production environment.

This environment must be isolated from other HEALTHeLINK areas. Netspective resources will have access here to experiment with the prepared IaC and test the applications.

We prefer to have EC2 `t3.xlarge` during development of IaC and then we will work with Cloudhesive for their preferred production deploymnet model.

[ In the weekly session meeting on May 8th, 2024, CloudHesive will set up a new VPC and EC2 instance (T3 XL) for the development environment. NetSpective will manage Docker and other necessary tools within the EC2 instance.]

### Test content for English to Non-Sensitive and Non-PHI Business Content

The application we're delivering can ask questions from any PDF, DOC, or website URL. If you could provide a test PDF, DOC, or website URL with some preferred questions, it would be helpful for providing a proper example. This isn't high priority but is needed after the infrastructure setup.

Currently, we are utilizing publicly available 1115 Waiver content. If there is no private test content available, we can also utilize that material for testing.

[ In the weekly session meeting on May 8th, 2024, Jennifer instructed us to utilize the 1115 waiver content until further communications are provided.]
