---
title: Introduction to Amazon EKS
slug: introduction-amazon-eks
featured: false
published: false
date: 2023-01-09T00:00:00+00:00
featuredImage: ../src/images/eks.jpg
---

## Amazon EKS

Kubernetes offers powerful container orchestration capabilities, ideal for managing containers at scale. Managed Kubernetes services alleviate the operational burden by handling infrastructure tasks that are essential but non-differentiating.

Amazon EKS (Elastic Kubernetes Service) exemplifies this approach by managing the Kubernetes Control Plane. This critical component orchestrates communication between operators, AWS services, and the data plane (worker nodes where containers run).

The EKS Control Plane operates within an AWS-managed VPC, ensuring reliability through automated backups, scaling, patching, and upgrades. As your workload scales, the AWS-managed Control Plane scales seamlessly alongside it.

The Data Plane, running in the customer’s VPC, hosts the actual container workloads. When provisioning EC2 nodes, considerations include compatibility with EKS components and configurations. Nodes must be registered with the Control Plane, granting necessary permissions for cluster workload access within the customer’s VPC.

Automation plays a crucial role in managing these nodes, including patching, upgrades, and scaling. AWS offers Managed Node Groups, extending EKS API capabilities to simplify provisioning and lifecycle management of EC2 compute nodes. This streamlines operational overhead, allowing actions like node group creation, scaling operations, and more via API commands.

When deploying on AWS with EKS, you have the flexibility to choose between EC2 instances or Fargate for container execution, depending on your specific requirements.

Getting started with EKS typically involves using the AWS Management Console for setting up the Control Plane. For more complex scenarios, such as provisioning compute nodes, decisions on node quantity and type, the AWS CLI (eksctl) provides a powerful toolset. It facilitates tasks like creating managed node groups directly from the command line.

Additionally, Terraform emerges as a popular choice for infrastructure management, including AWS resources and EKS. Leveraging Terraform allows for defining EKS infrastructure as code (IaC), providing a robust framework for automating and managing infrastructure deployments.
