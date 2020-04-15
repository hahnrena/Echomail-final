# ECHOMAIL 
Surveying web application built to gather feedback from your clients! 

# ENVIRONMENT
-I have made a separate client-side and server-side in order to apply decoupling. 

-Created a development & production environment 
The following scripts are from the server -> inside package.json 

<img width="874" alt="Screen Shot 2020-04-14 at 9 26 38 PM" src="https://user-images.githubusercontent.com/62117964/79289205-acf2aa00-7e96-11ea-8205-2b7a4e93191d.png">

-cd into the server & run "npm run dev"
-if there are issues, cd into the client & run "npm start" 

# Ensure version numbers are the same

<img width="171" alt="Screen Shot 2020-04-14 at 9 14 20 PM" src="https://user-images.githubusercontent.com/62117964/79288556-0e197e00-7e95-11ea-9c98-c1fc9593c523.png">


<img width="316" alt="Screen Shot 2020-04-14 at 9 14 48 PM" src="https://user-images.githubusercontent.com/62117964/79288539-022dbc00-7e95-11ea-9fb8-a0b93ab987ce.png">


# KEY FEATURES

User Authentification

-Users can sign up or log in with a Google Account
-Invalid login would invoke an error in the front-end & back-end

-Logged in users can access creating a survey, sending a survey, adding credits, and viewing their Dashboard of surveys
-Once a user sends a survey, they get redirected to the main dashboard and can view their 'sent' surveys

<img width="630" alt="Screen Shot 2020-04-14 at 9 09 25 PM" src="https://user-images.githubusercontent.com/62117964/79288413-a95e2380-7e94-11ea-8542-08b4b2530295.png">

These are the auth routes/RESTful API endpoints in Express for authentification in the back end server:

<img width="874" alt="Screen Shot 2020-04-14 at 9 26 38 PM" src="https://user-images.githubusercontent.com/62117964/79289851-7c137480-7e98-11ea-883a-ddff64e7cbe3.png">

Survey Form

-Users can manually type their survey questions and review them before they can send it to their clients' emails

<img width="773" alt="Screen Shot 2020-04-14 at 9 20 39 PM" src="https://user-images.githubusercontent.com/62117964/79288862-e1b23180-7e95-11ea-88df-3edcc59260e1.png">


<img width="816" alt="Screen Shot 2020-04-14 at 9 20 58 PM" src="https://user-images.githubusercontent.com/62117964/79288897-f55d9800-7e95-11ea-8809-bb20abf6f1f7.png">


Sending Surveys

-Users can send surveys to their clients and view the sent surveys on their Dashboard

<img width="685" alt="Screen Shot 2020-04-14 at 9 18 05 PM" src="https://user-images.githubusercontent.com/62117964/79288713-7b2d1380-7e95-11ea-96b9-553083f45d02.png">

<img width="715" alt="Screen Shot 2020-04-14 at 9 16 28 PM" src="https://user-images.githubusercontent.com/62117964/79288629-415c0d00-7e95-11ea-902f-a9df2461e498.png">




