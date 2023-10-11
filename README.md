<p align="center">
  <img width="350" src="https://res.cloudinary.com/mfrazb/image/upload/v1695043154/moat/moat-smArtboard_1_wrq1bf.png" alt="moat small logo"> 
</p>

<div align= "center">

[![Kubernetes](https://img.shields.io/badge/kubernetes-326ce5.svg?&style=for-the-badge&logo=kubernetes&logoColor=white)](https://kubernetes.io/) [![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/) [![AWS](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)](https://aws.amazon.com/) [![Prometheus](https://img.shields.io/badge/Prometheus-000000?style=for-the-badge&logo=prometheus&labelColor=000000)](https://prometheus.io/) [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/) [![Express](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/) [![Node.js](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/en) [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Glossary/HTML5) [![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/) [![Eslint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)

</div>

# About moat
moat is a monitoring tool that scans clusters for basic health metrics and malicious activity with Prometheus and AWS Cloudwatch. Users can view potential threats on a dashboard featuring Grafana panels to quickly pinpoint and remediate issues. We embarked upon this effort with a desire to learn more about Docker, Kubernetes, AWS, Prometheus, and Grafana. moat facilitated our explorations and helped us to deepen our understanding of these technologies, along with the importance of applying security best practices to any Kubernetes cluster.

Our application is still in its development phase. Our efforts up to now have consisted of building a Kubernetes cluster using Amazon EKS to simulate a real-world scenario. Then we deployed Prometheus to scan our clusters and log essential metrics. We are currently displaying general health metrics from our kubernetes cluster on our dashboard through Grafana panels. Also, given there are many potential entry points to a cluster, we decided to focus our first security feature on identifying failed AWS login attempts, which could indicate a brute force attack. 

# How To Use Moat
Given this project is still in it's early stages, the instructions below will guide you through many of the same steps we took to build out our test environment. It will involve creating a Kubernetes cluster on AWS, deploying an application to it, and scanning it with Prometheus. CloudWatch alerts will allow you to identify when a user exceeds a specified login attempt threshold. You can leverage our frontend dashboard to display your Grafana panels and view the data that Prometheus scrapes from your cluster. 

## Initial Setup
1. Fork and clone this repo, and then install the dependencies:
```bash
npm install
```
2. Launch moat from the command line:

```bash
npm run dev
```

## Build Kubernetes Test Environment
The following instructions are for building a test environment on AWS. Keep in mind, this will cost money. If you want a free alternative, try building a test environment locally with minikube. You can leverage the files in our test environment folder for your configurations. 

1. Create an AWS account and set up your IAM roles.
   - While all actions *can* be done in the root user’s account, it is *NOT* recommended to use the root user for anything other than setting up IAM roles.
   - Set up a user group with the AdministratorAccess policy and set up any additional IAM user roles from there. Use the rule of least-privilege for granting permissions.
2. Create a kubernetes cluster on AWS using EKS. Once the kubernetes cluster has been spun up, you will be use AWS’s console or the AWS CLI to add, edit, and stop deployments.
3. Create a Docker image of your application (or use the example CodeForge app in our repo).
4. Push your image to either ECR or Docker Hub. Remember the repo and organization name, it will be important when creating the .yaml files for deploying the EC2 instance to our k8s cluster.
5. Deploy your application to AWS EC2 instance using elasticbeanstalk, or your preferred method.
6. Set up your database with RDS, deploy your own database to the cluster, or use your preferred method.
7. Deploy your EC2 instance and database to your Kubernetes cluster.
8. Configure nginx-ingress controller to serve EC2 instance through an external URI. Make sure that the ports being exposed are the same ports being used by your application (CodeForge uses port 3000).
9. After testing, *REMEMBER* to tear down all unused AWS resources, they *WILL* charge you.

## Command Line Setup
1. Install AWS CLI and Configure AWS Credentials.
   - After AWS CLI is installed, go to AWS account > security credentials > access keys > create new access key.
   - Create IAM Role with administration access and make sure all services and users have been assigned to use this Role.
   - Run the command aws configure and enter AWS credentials. (If running into permissions issues you can use the root users credentials to configure AWS but this is NOT recommended because it is not secure.)
2. Install and setup kubectl (Kubernetes Command Line Tool).
3. Install and setup Helm (Kubernetes Package Manager).
4. Install and setup eksctl (CLI for Amazon EKS).
   - After instilation, you can either create a cluster here or pull an existing one.
   - To pull an existing cluster, run the command `eksctl get cluster --name your-cluster-name --region your-region`. Make sure that everything on AWS is using the same region!
5. Update Kube Config and connect to EKS cluster.
   - Run the command  `aws eks update-kubeconfig --name your-cluster-name --region your-region`.
   - You can verify this connection by running kubectl get nodes.

## Install Prometheus and Grafana
The following commands will install the Prometheus and Grafana OSS (_Not Grafana Cloud_) as a sidecar container on your Kubernetes Cluster.

1. Add Helm Stable Charts for your local client: `helm repo add stable https://charts.helm.sh/stable`
2. Add Prometheus Helm repo: `helm repo add prometheus-community https://prometheus-community.github.io/helm-charts`
3. Create Prometheus namespace: `helm repo add prometheus-community https://prometheus-community.github.io/helm-charts`
4. Install Prometheus: `helm install stable prometheus-community/kube-prometheus-stack -n prometheus`
5. Verify by running `kubectl get pods -n prometheus`
6. Edit Prometheus and Grafana service files to use LoadBalancer: `kubectl get svc -n prometheus`
    - Grafana will be installed along with Prometheus, so no need to install it separately
    - `kubectl edit svc stable-kube-prometheus-sta-prometheus -n prometheus`
    - At the bottom of this service file, under spec, change type from ClusterIP to `type: LoadBalancer`. Under status, change to `loadBalancer: {}`. Save the file.
6. Verify type and status have been changed: `kubectl get svc -n prometheus`
7. Now do the same for Grafana: `kubectl edit svc stable-grafana -n prometheus`
8. Change type and status from ClusterIP to LoadBalancer: `kubectl get svc -n prometheus`. This will provide a URL to access both the Prometheus and Grafana Servers.
9. Grafana default login credientials:
    - **Username:** admin
    - **Password:** prom-operatior
10. Access secrets by running `kubectl get svc -n prometheus`.
11. Prometheus should already be configured as a data source in Grafana. 
12. On the top search bar click Import Dashboard.
13. Under Import from Grafana.com, enter `15760`.
14. Select Prometheus as the data source. This will load the pre-configured dashboard Kubernetes/Views/Pods.
15. Create your own dashboard panels by querying Prometheus using PromQL, or view other pre-configured dashboards here.
16. Update Grafana configuration to allow embedding.
17. Navigate to the grafana-configmap.yaml in the repo, and run the following comand:
    `kubectl apply -f /path_to/grafana-configmap.yaml`
18. Verify changes are reflected in Grafana: Home > Administration > Settings > security > allow_embedding=true
19. You can now embed dashboard panels on an external website!

**Source for installing Prometheus on EKS:** https://medium.com/@maheshbiradar8887/eks-monitoring-using-helm-prometheus-and-grafana-dashboard-e47093c08ece

## Add Panels to Dashboard
Once you have Grafana configured and your cluster data from Prometheus is being displayed in your dashboard, you should be able to embed iframes of key metrics into the moat dashboard. 

## Set Up AWS CloudWatch Alerts for Failed Login Attempts
1. Set up a [CloudWatch alarm](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudwatch-alarms-for-cloudtrail.html#cloudwatch-alarms-for-cloudtrail-signin) for sign-in failures in AWS
2. Create an [SNS (Simple Notification Service) topic](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarm-evaluation) in AWS. This topic will be used to send notifications when alarms are triggered.
3. In your CloudWatch alarm settings, configure actions to be taken when the alarm state changes to "ALARM." Add an action to publish a message to your SNS topic.
4. Set up a Lambda function that receives CloudWatch alarm notifications and exposes them in Grafana. Here is the python code we used:

```python
import boto3
import json

def lambda_handler(event, context):
    # Extract information from the CloudWatch Alarm event
    try:
        alarm_name = event['detail']['Console sign-in failures alarm']
        alarm_description = event['detail']['Raises alarms if more than 3 console sign-in failures occur in 5 minutes']
        new_state = event['detail']['newState']['stateValue']
    except KeyError as e:
        # Handle missing keys gracefully
        return {
            'statusCode': 400,
            'body': json.dumps(f'Error: Missing key {e} in event.')
        }
    
    # Check if the alarm has entered the ALARM state
    if new_state == 'ALARM':
        # Define the action to take when the alarm is triggered
        action_to_take = "Take action to address console sign-in failures."
        
        # You can add your custom logic or notifications here
        # For example, sending a notification using SNS
        sns_client = boto3.client('sns')
        topic_arn = 'YOUR-ARN'
        message = f"Alarm '{alarm_name}' triggered: {alarm_description}\nAction: {action_to_take}"
        
        sns_client.publish(
            TopicArn=topic_arn,
            Message=message,
            Subject=f"Alarm '{alarm_name}' Triggered"
        )
        
        # You can also perform other actions or integrations as needed
        
        # Return a response
        response = {
            'statusCode': 200,
            'body': json.dumps('Alarm triggered successfully.')
        }
    else:
        # Return a response indicating that the alarm is not in ALARM state
        response = {
            'statusCode': 200,
            'body': json.dumps('Alarm is not in ALARM state.')
        }

    return response
```
11. Install the CloudWatch Data Source plugin for Grafana. This plugin allows Grafana to fetch data from CloudWatch.
     - Go to the Grafana home page, click on the gear icon (⚙️) on the left sidebar to access the configuration.
     - Choose "Data Sources" and then click "Add data source."
     - Search for "CloudWatch" and select it.
     - Configure the CloudWatch data source with your AWS credentials and settings.
12. In Grafana, set up alerting rules for the panels on your dashboards. You can define alert conditions based on CloudWatch data. When an alert condition is met, Grafana can trigger actions, such as sending notifications or changing the state of a panel. 
13. Test the entire setup by triggering a CloudWatch alarm with excessive login attempts. 


# The Team 
| Name | Github | LinkedIn |
| ------------- | ------------- | ------------- |
| Anil Kondaveeti | https://github.com/Akon530  | http://www.linkedin.com/in/anil-kondaveeti-23175320b  |
| Gayle Martin  | https://github.com/palemartian  | https://www.linkedin.com/in/gaylem/  |
| Ivy Shmikler  | https://github.com/ishmikler  | http://www.linkedin.com/in/ivy-shmikler  |
| Max Weiner  | https://github.com/maxweiner02  | https://www.linkedin.com/in/max-j-weiner/  |
| Meredith Frazier Britt  | https://github.com/mfrazb  | https://www.linkedin.com/in/meredithfrazierbritt/  |

# How to Contribute
If you wish to contribute, or just learn from our progress, you are more then welcome! Please follow these guidelines:

1. Fork and clone the repository
2. CREATE BRANCH with the format:
    > [!IMPORTANT]
    > **category/your-branch-name-here**

    | Category | Description |
    | ------------- | ------------- |
    | hotfix | for quickly fixing critical issues, usually with a temporary solution  |
    | bugfix  | for fixing a bug  |
    | feature  | for adding, removing or modifying a feature  |
    | test  | for experimenting with something that is not an issue  |

3. Guidelines for commit messages:
   - Capitalize first word
   - Use active voice: “Create sidebar component”
   - Give why/how context when helpful to other developers
   - Commit early and often
   - Use multi-author commits 

4. DID YOU ADD ANY SENSITIVE INFORMATION TO CODE? Before you commit, move your sensitive data to a .env file. and add .env to .gitignore file.
5. COMMIT when you make a meaningful change and use the guidelines.
6. PUSH your code to your branch and submit a pull request.
