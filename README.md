# Forgot Password Flow
## Overview

Forgot Password flow in website
### SignUp
- In SignUp page new user is registered in the database
- And a Temporary activation code is send to the user email using node mailer
- when user click the activation link there account is activated
### Login
  - when user entered a data , checks if the user existed in the database and allow them to log in
  - if the user credential is wrong it will throw an error
  - have a forgot password option

### Forgot Password
   - get user registed email id as a input and send a link with temporary token to the user email
   - the token will have a 15 minutes of expirey time
   - when user clicks the link if will check the user data and token to allow the user to update new password
## Technologies Used
  - React + Vite
  - Tailwind CSS

## Back End Code
- [BackEnd](https://github.com/Praveen8161/Forget-password-server.git)

## Live Site
- [Live Site](https://forgot-password-8161.netlify.app/)
