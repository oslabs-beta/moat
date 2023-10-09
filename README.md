<p align="center">
  <img width="350" src="https://res.cloudinary.com/mfrazb/image/upload/v1695043154/moat/moat-smArtboard_1_wrq1bf.png" alt="moat small logo"> 
</p>

# About moat
moat is a monitoring tool that scans clusters for basic health metrics and malicious activity with Prometheus and AWS Cloudwatch. Users can view potential threats on a dashboard featuring Grafana panels to quickly pinpoint and remediate issues. We embarked upon this effort with a desire to learn more about Docker, Kubernetes, AWS, Prometheus, and Grafana. moat facilitated our explorations and helped us to deepen our understanding of these technologies, along with the importance of applying security best practices to any Kubernetes cluster.

Our application is still in its development phase. Our efforts up to now have consisted of building a Kubernetes cluster using Amazon EKS to simulate a real-world scenario. Then we deployed Prometheus to scan our clusters and log essential metrics. We are currently displaying general health metrics from our kubernetes cluster on our dashboard through Grafana panels. Also, given there are many potential entry points to a cluster, we decided to focus our first security feature on identifying failed AWS login attempts, which could indicate a brute force attack. 

# How To Use Moat
Given this project is still in it's early stages, the instructions below will guide you through many of the same steps we took to build out our test environment. It will involve creating a Kubernetes cluster on AWS, deploying an application to it, and scanning it with Prometheus. CloudWatch alerts will allow you to identify when a user exceeds a specified login attempt threshold. You can leverage our frontend dashboard to display your grafana panels and view the data that Prometheus scrapes from your cluster. 

## Initial Setup
1. Fork and clone this repo.
2. npm install locally in the moat directory (NOTE: We should probably put all of our moat stuff in a separate folder from our codeforge stuff)

## Build Test Environment
1. Create an AWS account and set up your IAM roles
2. Create a kubernetese cluster on AWS
3. Create a Docker image of your application (or use the example CodeForge app in our repo) 
4. Push your image to either ECR or Dockerhub
5. Deploy your application to AWS EC2 instance using elasticbeanstalk, or your preferred method
6. Set up your database with RDS, or your preferred method
7. Deploy your EC2 instance and database to your Kubernetes cluster

## Scan with Prometheus

## Configure Grafana

## Add Panels to Dashboard
Once you have Grafana configured and your cluster data from Prometheus is being displayed in your dashboard, you should be able to embed iframes of key metrics into the moat dashboard. 

## Set Up AWS CloudWatch Alerts for Failed Login Attempts
1. Install the CloudWatch Data Source plugin for Grafana. This plugin allows Grafana to fetch data from CloudWatch.
  * Go to the Grafana home page, click on the gear icon (⚙️) on the left sidebar to access the configuration.
  * Choose "Data Sources" and then click "Add data source."
  * Search for "CloudWatch" and select it.
  * Configure the CloudWatch data source with your AWS credentials and settings.
2. Create or use existing Grafana Dashboards
3. Set Up CloudWatch Alarms
4. Create an SNS (Simple Notification Service) topic in AWS. This topic will be used to send notifications when alarms are triggered.
5. In your CloudWatch alarm settings, configure actions to be taken when the alarm state changes to "ALARM." Add an action to publish a message to your SNS topic.
6. Configure CloudWatch to send notifications to Grafana. You might need to set up a Lambda function that receives CloudWatch alarm notifications from SNS and forwards them to Grafana via HTTP.
7. In Grafana, set up alerting rules for the panels on your dashboards. You can define alert conditions based on CloudWatch data. When an alert condition is met, Grafana can trigger actions, such as sending notifications or changing the state of a panel.
8. Test the entire setup by triggering a CloudWatch alarm. This could involve generating simulated high CPU usage or other metric conditions that will trigger the alarms you've set up.


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
