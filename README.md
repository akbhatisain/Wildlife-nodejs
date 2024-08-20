# Wildlife-nodejs

A simple Node.js web application that you can deploy using AWS Amplify. This app will fetch and display some wildlife information using the Animal API, which provides free access to random animal facts and images.

# Prerequisites
1. Aws Account
2. Github/Gitlab/Bitbucket/CodeCommit (One of the Account)
3. Basic Understanding with NPM.

# amplify.yml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm install
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: public
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*

******************************************
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


# Summary
This example provides a basic Node.js app that fetches wildlife information from a free API and displays it on a web page. The amplify.yml file ensures that the app is built and deployed correctly using AWS Amplify. This setup should work smoothly, and you can expand on it by adding more features or using more advanced APIs.

