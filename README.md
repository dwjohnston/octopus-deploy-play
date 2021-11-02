# Octopus Deploy Play 

Playing around with Octopus Deploy. 

## Step 1 

I'm going to create a simple REST API lambda. 

1. First manually package it to zip and deploy to AWS via the browser. 
2. Next configure Travis CI to do the build and package - and then upload the artifact how Octopus wants. 
3. Next - get  Octopus to deploy the artifact. 



### 1 - Manually configure AWS

- Via browser create a basic Lambda + Rest API Gateway. Test that this works manually. 
- Add `package` script to create a zip file. 




