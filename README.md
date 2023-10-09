<p align="center">
  <img width="250" src="https://res.cloudinary.com/mfrazb/image/upload/v1695043154/moat/moat-smArtboard_1_wrq1bf.png" alt="moat small logo"> 
</p>

# About moat
moat is a monitoring tool that scans clusters for basic health metrics and malicious activity with Prometheus and AWS Cloudwatch. Users can view potential threats on a dashboard featuring Grafana panels to quickly pinpoint and remediate issues. We embarked upon this effort with a desire to learn more about Docker, Kubernetes, AWS, Prometheus, and Grafana. moat facilitated our explorations and helped us to deepen our understanding of these technologies, along with the importance of applying security best practices to any Kubernetes cluster.

Our application is still in its development phase. Our efforts up to now have consisted of building a Kubernetes cluster using Amazon EKS to simulate a real-world scenario. Then we deployed Prometheus to scan our clusters and log essential metrics. We are currently displaying general health metrics from our kubernetes cluster on our dashboard through Grafana panels. Also, given there are many potential entry points to a cluster, we decided to focus our first security feature on identifying failed AWS login attempts, which could indicate a brute force attack. 

# How To Use Moat
Given this project is still in it's early stages, the instructions below will guide you through many of the same steps we took to build out our test environment. It will involve creating a Kubernetes cluster on AWS, deploying an application to it, and scanning it with Prometheus. CloudWatch alerts will allow you to identify when a user exceeds a specified login attempt threshold. You can leverage our frontend dashboard to display your grafana panels and view the data that Prometheus scrapes from your cluster. 

## Initial Setup
1. Fork and clone this repo.
2. npm install locally in the moat directory

## Build Test Environment
4. Create an AWS account and set up your IAM roles
5. Create a kubernetese cluster on AWS
6. Create a Docker image of your application (or use the example app in our repo) 
7. Push your image to either ECR or Dockerhub
8. Deploy to AWS using elasticbeanstalk, or your preferred method
9. Connect your database to your application

# Scan with Prometheus

# Configure Grafana

# Add Panels to Dashboard

# Set Up AWS CloudWatch Alerts for Failed Login Attempts
9. Set up CloudWatch alerts
10. Create a CloudWatch alarm and SNS notification
11. Lambda
12. Grafana

# The Team 
| Name | Contribution |
| ------------- | ------------- |
| Anil Kondaveeti | TBD  |
| Gayle Martin  | TBD  |
| Ivy Shmikler  | TBD  |
| Max Weiner  | TBD  |
| Meredith Frazier Britt  | TBD  |

# How to Contribute
If you're interested in contributing to moat, please check out our Contributer README (link)
