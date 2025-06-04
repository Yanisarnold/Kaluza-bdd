## BDD KALUZA TEST 

# Installation & run 
1. git clone https://github.com/Yanisarnold/Kaluza-bdd.git
2. npm install ->  Dependencies
3. run live: npm run test:api
4. run mocking : npm run test:mock

npm -v : npm version: 10.8.3
node -v : node version:v22.8.0

.gitignore = node_modules , dist folder

cucumber.json :  set up 2 profile 
1. mockTest 
2. live Test
this is done to avoid ambiguity since the test cases are similar with 2 different paths to follow 

# The Task
API : https://api.agify.io/?name=michael example api 
# Documentation: 
1. created a test data to validate different conditions per scenarios 

# Feature
for this task I have added all scenarios into one file but the structure [below] would be my suggestion
1. userSearch.feature ->  contains all positive TC scenarios +  api response scenarios
2. invalidInputSearch.feature -> would contains all negative TC scenarios 

# Step Folder
2 file -> api, mocking steps

# Data Folder
2. Created userMocks file in data, just to mock the api response as a fallback, Due to (usage)

# Support Folder
3. Api function UserSearch() -> takes a parameter of any and return an [object {}]
3. userMocks function UserSearch() -> takes a parameter of any and return an [object {}]



# ISSUES ENCOUNTERED  & SOLUTIONS
1. AAA - Ambiguity in the feature file 
Solved by reviewing the scenario and removing the ambiguity also removed redundant steps (when, given, or then) -  separated the mocks feature to api.feature, Initial mistake was using one feature for 2 steps 
2. Error fetching data: Error: HTTP error! status: 429 - Due to usage reached limit - created Api mocking on fake data 


# Additionaly Edge cases
Validating the api {Status}
1. validating the api status 429 -> 429 Too many requests { "error": "Request limit reached" } -  Verify 429 is return when usage limit has been reached 
2. 422 Unprocessable Content { "error": "Missing 'name' parameter" } - Verify that submitting the request without any parameter  gives 422
3. 422 Unprocessable Content { "error": "Invalid 'name' parameter" } - 
4. Verify user can search for multiple users name [micheal ,  Jean ]
5. ci/cd 
6. 
