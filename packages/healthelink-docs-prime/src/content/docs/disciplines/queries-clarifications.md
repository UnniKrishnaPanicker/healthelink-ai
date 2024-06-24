---
title: Queries and Clarifications
tableOfContents:
  minHeadingLevel: 1
  maxHeadingLevel: 3
sidebar:
  label: Queries and Clarifications
---

<div style="text-align: justify">

### May 14, 2024

#### Questions/discussion topics from Cloudhesive:

##### INFRASTRUCTURE/NETWORKING:

- How many Subnets will there be?
  **1 to start is fine. unless something needs to be public and then in that case we should have two**

- Private or Public Subnets?
  **Private**

- Will these subnets need to talk to anything outside of this VPC/AWS account? Outbound internet access to be able to install software, etc.
  Database, apps, Ports, etc? **Port 80 and 443 outbound**

- How many instances?
  **One to start EC2 `t3.xlarge` with 250 GB SSD**

- OS types and version requirements?  
  **Linux, Debian 12 (HVM) ami-058bd2d568351da34 (64-bit (x86))**

- DATABASE: Stand alone or can we use RDS?
  **Currently, Netspective recommends deploying the database within the EC2 instance itself; RDS is not needed at this time.**

- ACCESS:
  Who needs access to the environment?

  - Chris Klimek,
  - Claryssa Ryan, Jack Lynch,
  - and **the Netspective Team**
    - Shahid Shah <shahid.shah@netspective.com>,
    - Rinshad K Asharaf <rinshad-asharaf@netspective.in>,
    - Abdul Razak P M <abdulrazak-pm@netspective.in>,
    - Abdul Jaleel E <abduljaleel-edathol@netspective.in>,
    - Sinju Payyeri <sinju-payyeri@netspective.in>

- How many people? Directory Service integration? IAM should be sufficient for now - not sure how many Netspective team members are needed, expecting less than a dozen total users

**Netspective Team is**

- Shahid Shah <shahid.shah@netspective.com>
- Rinshad K Asharaf <rinshad-asharaf@netspective.in>
- Abdul Razak P M <abdulrazak-pm@netspective.in>
- Abdul Jaleel E <abduljaleel-edathol@netspective.in>
- Sinju Payyeri <sinju-payyeri@netspective.in>

- How will they access the environment? VPN or Workspaces?
  **Workspaces**

- What kind of access will they need? RDP, SSH, etc? Likely both based on OS type
  **Since the OS type is Linux, SSH is suitable.**

- People who need ssh access from workspace

  - Shahid Shah <shahid.shah@netspective.com>
  - Rinshad K Asharaf <rinshad-asharaf@netspective.in>

### April 30, 2024

##### General Questions about AI Experiment architecture

- Does Vanna.ai cause any SQL injection issues?
  **We can overcome the SQL Injection issues by the following methods: Input validation and sanitization, Use of parameterized queries, Escaping user inputs and Utilizing wrapper tools or ORMs like Dizzler, which will facilitate achieving all these.**

- Does Vanna.ai help generate SQL for different RDBMS, and how can we handle it in our program?
  **Yes, affirmatively; Vanna.ai often supports generating SQL queries for various Relational Database Management Systems (RDBMS). Since we are using PostgreSQL with FDW, supporting more than one DB won't be difficult for us.**

- Netspective's preference between Docker and managed services:
  **Netspective is open to either choice and will provide Infrastructure as Code (IaC) based on CloudHesieve's preference. Netspective recommend using EC2 instances for development purposes initially. The Infrastructure as Code (IaC) prepared can later be transitioned for use with ECS or EKS in the production environment. CloudHesieve indicated a preference for ECS/EKS type Managed service as Docker is considered legacy, but CloudHesieve will finalize their decision soon.**

</div>
