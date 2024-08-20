# Wildlife-nodejs

A simple Node.js web application that you can deploy using AWS Amplify. This app will fetch and display some wildlife information using the Animal API, which provides free access to random animal facts and images.

# Prerequisites
1. Aws Account
2. Github/Gitlab/Bitbucket/CodeCommit (One of the Account)
3. Basic Understanding with NPM.

# amplify.yml
This is the configuration file that AWS Amplify uses to build and deploy your app.

# Steps to Deploy on AWS Amplify
1. Set Up Git Repository: Ensure your project is a Git repository. If not, initialize one.
   
2. Push to a Git Repository: Push your code to a repository like GitHub, GitLab, Bitbucket, or AWS CodeCommit.

3. Deploy Using AWS Amplify:

Go to the AWS Amplify Console.
Click Get Started under "Deploy".
Connect your Git repository.
Select the branch containing your code.
AWS Amplify will automatically detect the amplify.yml file and use it to build and deploy your app.

4. Access Your Deployed App:
After the deployment is complete, AWS Amplify will provide a URL where your app is accessible.


# Step to deploy on AWS lightsail
# Getting Started with Amazon Lightsail
Here’s a simple step-by-step guide to getting started with Amazon Lightsail:
Sign in to AWS Management Console:

1.If you don’t have an AWS account, you can create one at aws.amazon.com.
Navigate to Amazon Lightsail:

1.1 In the AWS Management Console, find and select Lightsail from the services menu.
Create an Instance:
   Click on Create instance.
   Choose an operating system or application (like Nodejs).
   Select the instance plan based on your needs.
   Choose your instance location.
   Optionally,
   Configure additional options (like SSH key pairs).
   Choose your instance plan (Dual Stack )($5 USD per month)(First 90 days free)
   Identify your instance ( Give a Name to your instance )
   Tags (If Any)
   Click Create instance.

2 Manage Security Group of Instance:
		Select your instance and Click on Networking.
		Under IPV4 firewall > Add Rule > Allow 3000/TCP 
		Click Create. 

3 Connect to Your Instance:
   After the instance is running, you can connect to it via the Lightsail console or SSH. Run the following steps:-
   mkdir /var/www/html  
   cd /var/www/html
   git clone https://github.com/akbhatisain/Wildlife-nodejs.git
   cd Wildlife-nodejs
   npm install
   node index.html

4. Access Your webapp : 
   http://Instance-IPv4:3000


5. Same step you can do in any VM which is created with ec2 machine service as well. just make sure you have nodejs installed and any dependency should also there.

# Summary
This example provides a basic Node.js app that fetches wildlife information from a free API and displays it on a web page. If Api is not responding then it will show you error message which is also define in app.js file. The amplify.yml file ensures that the app is built and deployed correctly using AWS Amplify. This setup should work smoothly, and you can expand on it by adding more features or using more advanced APIs.

