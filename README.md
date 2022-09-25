# WallApp

## Overview

WallApp is a simple app that allows a user to write a message and post a picture to a "wall." To post, a user must first signup, after which, they will be redirected to 
a login page where they can use their newly created credentials to login and start posting. After registering, the user will receive an email welcoming them to "WallShare"(internal name of site).

Any guest user can still view posts without having to sign in.

# Getting started and running the WallApp:

1. Clone this repository to a directory in your desired location
   
   a. Open command terminal or Git Bash and execute the following command: 
      git clone https://github.com/pauljessica82/WallApp.git
      
2. Begin installing dependencies and packages for frontend

   - In your terminal, navigate to the directory in which you cloned the project.
   - Execute "cd frontend" in terminal to navigate to the frontend directory
   - Execute "npm install" to install all the packages needed for the frontend.
   - Once packages are installed, run "npm start" to fire up the local react environment at http://localhost:3000/ . You should now see the landing page: 
   
   ![image](https://user-images.githubusercontent.com/51688932/192004803-4cf6f213-9af1-43f5-94c2-9cabf2b0946c.png)


5. Setup new virtual environment for backend 

   - In terminal, Navigate to project folder "backend" (...\WallApp\backend)
   - Execute this command in terminal: "virtualenv env" This will create env folder in the project folder
   - Activate virtual environment. " . env\Scripts\activate".
   - Install dependencies which are located in requirements.txt .
      Ex. "pip install -r requirements.txt"
   - (Pycharm) Enable python virtual environment in PyCharm. File-Settings-Python Interpreter select new virtual environment with 
   specifying path to ....\env\Scripts\python.exe
   
6. Set Up utils.py for email sending

   - When user registers, a new email is fired off using the EMAIL_HOST_USER and EMAIL_HOST_PASSWORD specified in the ..backend/user/utils.py file. Update these            to a valid email, and password of your choosing.  *Some details to note: 
               
        - The current script uses "smtp.gmail.com" as the host, the EMAIL_HOST_USER must be a valid gmail account with IMAP enabled. To enable IMAP, see: https://support.google.com/mail/answer/7126229?hl=en#zippy=%2Cstep-check-that-imap-is-turned-on. 
        - The EMAIL_HOST_PASSWORD will be a generated app password. To generate an app password for your Gmail account, see https://support.google.com/accounts/answer/185833?hl=en#:~:text=Create%20%26%20use%20App%20Passwords . 
         
                        
7. Creating User and Post tables

   - In terminal, while in the ...WallApp/backend run "python manage.py migrate --run-syncdb". 
   - Start the server by running "python manage.py runserver" in the terminal.
   - If you come across the error "Cannot use ImageField because Pillow is not installed", run "pip uninstall Pillow", and then "pip install Pillow".
   - Now you should be able to register, login and create a new user by navigating to http://localhost:3000/.  
   - You can use: https://temp-mail.org/en/ if you would not like to use a real email for registering
            
![image](https://user-images.githubusercontent.com/51688932/192016102-2935b8e2-e3fe-427a-966f-44c9fa5f0cb9.png)

## Info for Unit Testing

- Test cases are located in ...WallApp\backend\post\tests\ & ...Wallapp\backend\user\tests\.

## API Testing With Postman

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/b4feb6674584dea50443?action=collection%2Fimport)

- First, register a new user by filling appropiate fields in the Body section of the Register request
- Use the "Login Obtain Token" request to enter the username and password. This will send back an access token
- Use the generated access token in the "TestAPIEndpoint" request. Select "Bearer Token" under the Authorization tab. Enter the access token.  

## Future Improvements

- Add user authentication through a Google or Facebook account
- Add more CRUD operations to posts so a user can delete and update their posts
- Allow other users to comment and like others posts

