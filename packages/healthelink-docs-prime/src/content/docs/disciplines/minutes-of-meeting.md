---
title: Meetings(MOM)
tableOfContents:
  minHeadingLevel: 1
  maxHeadingLevel: 3
sidebar:
  label: Meetings(MOM)
---

<div style="text-align: justify">
#### Weekly Standup Meeting May 29,2024

- Date: Wednesday , May 29,2024
- Platform: Teams
- Participants: Charles McCarthy, Chris Klimek, Abdul Razak P M, Abdul jaleel, Rinshad, Dean Halweson, Tom King;

Key Discussion Points:

1. Recap of productive meeting last week and progress on to-do items.
2. Discussion on the Open API key usage and monitoring.
3. Inquiry about the Azure Sandbox setup status and necessary actions.
4. Clarification on the budget and usage expectations for the Open API key.
5. Update on the GitHub issue regarding expired invitations.
6. Discussion on the Prism database structure for training purposes and how to proceed.

Decisions Made:

1. Chris will set up an account for monitoring the Open API key usage.
2. Dan and Tim will sync up to find a replacement for Dean to expedite the Azure Sandbox setup.
3. Initial load of $25 for the Open API key, with further additions based on usage.

Action Items:

1. Chris - To provide access for monitoring the Open API key usage.
2. Dan and Tim - To coordinate on finding a replacement for Dean for the Azure Sandbox setup.
3. Chas - To follow up on providing the Prism database structure for the Netspective team.

Important Follow-Up Tasks:

1. Review the email from Abdul regarding the SOW and coordinate with Jen and Chris for any additional information needed.
2. Chas to reach out to the reporting and analytics team regarding the Prism database structure request.

Meeting Summary:
The meeting focused on reviewing progress on previously assigned tasks and addressing new inquiries and requests. Key discussions included the Open API key usage and monitoring, the status of the Azure Sandbox setup, and the initial budget for the Open API key. Action items were assigned to ensure the continuation of project momentum, including setting up account monitoring for the Open API key, expediting the Azure Sandbox setup, and addressing the request for the Prism database structure. The team demonstrated effective communication and collaboration, with a clear path forward for addressing outstanding items and continuing project development.

#### Weekly Standup Meeting May 22,2024

- Date: Wednesday , May 22,2024
- Platform: Teams
- Participants:Charles McCarthy, Chris Klimek, Shahid Shah, Abdul Razak P M, Dean Halweson, Tom King;

##### Key Discussion Points:

1. Network and external access control for public-facing web services like Vanna AI.
2. Testing period and synthetic testing for the setup of services.
3. Concerns about firewalls, load balancers, and other network setup tools.
4. Use of GitHub and the necessary tools for setting up and managing the services.
5. Infrastructure setup using EC2, Docker images, and Amazon pipelines.
6. Experimentation phase with the possibility of changes based on discoveries.

##### Decisions Made:

1. workspaces need to be accessible to authenticated users.
2. Infrastructure setup will initially use GitHub for storing code, executed on EC2 instances.
3. Experiments will determine final infrastructure needs, with adjustments made as necessary.

##### Action Items:

1. Ensure firewall and load balancer configurations are reviewed and set up.
2. Continue setting up GitHub and infrastructure as code using EC2 instances.
3. Jennifer - Oversee testing period and synthetic testing processes.
4. Netspective Present any new infrastructure discoveries during weekly calls for peer review.

##### Important Follow-Up Tasks:

1. Monitor the setup and testing of aws sandbox and workspace.
2. Review and adjust firewall and load balancer configurations as needed.
3. Prepare for potential changes in infrastructure requirements based on experimental findings.
4. Keep track of new infrastructure developments and present them in weekly calls.

##### Meeting Summary:

During the meeting, the team discussed the setup of public-facing web services and the necessary network and access controls. Concerns about firewalls and load balancers were raised, and it was decided that these configurations would be reviewed and set up. The use of GitHub for storing infrastructure code, executed on EC2 instances, was confirmed. The team agreed to proceed with an experimental approach, acknowledging that infrastructure needs might change based on discoveries. Action items were assigned to ensure the proper setup and monitoring of services, with regular reviews and updates planned during weekly calls.

#### Weekly Standup Meeting May 15,2024

- Meeting Details:
  - Date: Wednesday , May 15,2024
  - Platform: Teams
  - Participants: Charles McCarthy, Chris Klimek, Shahid Shah, Abdul Razak P M, Dean Halweson, Tom King;

#### Agenda items and topics discussed:

- Infrastructure stand-up and roadmap adjustments.
- Housekeeping items.
- Creation of a new AWS sandbox account.
- GitHub repository setup.

#### Key Discussion Points:

- The need for a new sandbox AWS account for development and experimentation.
- The importance of keeping the development environment isolated and secure.
- The use of infrastructures code (CDK or Terraform) for future promotions.
- Addressing the architecture and data flow considerations for future production environments.
- The importance of capturing schema from existing databases for LLM training.

#### Decisions Made:

- Create a new AWS sandbox account for isolated development.
- Start with a single subnet in the sandbox environment.
- Use CDK as the preferred infrastructure as code tool, with fallback to Terraform if needed.
- Gather schema from the Prism database for training purposes.
- Chaz to turn on two-factor authentication in GitHub and create the required repository.

#### Action Items:

- Dean Halweson - Create and provide access to the new AWS sandbox account.
- Chaz McCarthy - Enable two-factor authentication in GitHub and create the new repository, Export the schema from the Prism database.
- Netspective Team - Start developing the infrastructure as code in the new sandbox environment.
- Chris McLeod - Collaborate on the setup and management of the GitHub repository.

#### Important Follow-Up Tasks:

- Ensure the sandbox environment is set up with proper security and isolation.
- Document all experimental setups and findings.
- Prepare a promotion plan for moving from the sandbox to production.
- Develop a list of English queries for training the LLM model.
- Regularly update and review architecture diagrams and documentation.

#### Meeting Summary:

The meeting focused on setting up a new AWS sandbox environment for experimentation and development, ensuring proper isolation and security. Key decisions included starting with a single subnet and using CDK for infrastructure as code. Action items were assigned to various team members, including setting up the sandbox account, providing GitHub permissions, and exporting the Prism database schema. The team agreed on regular documentation and updates to ensure a smooth transition from the experimental phase to production.

#### Meeting Description:

The meeting began with attendee introductions and recognition, followed by a discussion on the agenda items. The primary focus was on addressing technical items and the infrastructure stand-up for the ongoing project. Shahid highlighted the need for a new AWS sandbox account to isolate the development environment, ensuring no sensitive data is exposed. The team decided to start with a single subnet in the sandbox environment and use CDK for infrastructure as code, with Terraform as a fallback option.

Dean emphasized the importance of considering data flow and costs when designing the architecture. Shahid explained that the current project is experimental, and many details are still unknown. The goal is to develop infrastructure as code and document the process thoroughly.

The team discussed the status of the new GitHub repository and providing permission to Netspective team. Tom was assigned the task of exporting the schema from the Prism database to aid in LLM training. The meeting concluded with a review of action items and a plan for regular updates and reviews to ensure the project's success.

# Weekly Standup Meeting May 08,2024

- Meeting Details:
  - Date: Wednesday , May 08,2024
  - Platform: Teams
  - Participants: Charles McCarthy, Chris Klimek, Jennifer Lane, Abdul Razak P M, Dan Kutis, Timothy Brock;

### Key Discussion Points:

1. Overview of the HEALTHeLINK AI Experiment Project GitHub Repositories Status and access
2. Strategy for setting up AWS resources, including the creation of a development environment.
3. Test content for the application, focusing on PDFs, docs, and URLs.

### Decisions Made:

1. GitHub Repositories will setup by HeL team soon and inform to Netspective team
2. CloudHesive will set up a new VPC and EC2 instance (T3 XL) for the development environment.
3. NetSpective will manage Docker and other necessary tools within the EC2 instance.
4. The team will use the 1115 waiver document as a starting point for test content.

### Action Items:

1. Tim - Provide cost and timeline for setting up the VPC and EC2 instance.
2. Chris and CloudHesive team - Confirm the use of ECS or EKS for future deployment.
3. Abdul - Share the link and credentials for the GPM with the team.

### Important Follow-Up Tasks:

1. Confirm the timeline for the VPC and EC2 setup and subsequent actions.
2. Determine the preferred approach for accessing the private network (jump server or VPN service).
3. Consider using aws native or adding Duo for additional security on workspaces.
4. Set up GitHub repositories for the Netspective team.
5. Chris McLeod - To submit an official request for the environment to be built and to coordinate with the team on the prism schema.

### Meeting Summary:

The meeting focused on the initial steps for setting up the development environment for the AI project, including the creation of a new VPC and EC2 instance by CloudHesive. NetSpective will manage Docker and other tools within this environment. The team decided to use the 1115 waiver document as initial test content and discussed the need for additional materials. Action items were assigned to various team members to move forward with the setup and to address security and access concerns. The meeting established a clear path forward for the project's technical setup and testing phase.

</div>
