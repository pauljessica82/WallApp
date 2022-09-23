# WallApp


## Overview

WallApp is a simple app that allows a user to write a message and post a picture to a "wall." To post, a user must first signup, after which, they will be redirected to 
a login page where they can use their newly created credentials to login and start posting. After signing in, the user will receive an email welcoming them to "WallShare"(internal name of site).

# Getting started and running the WallApp:

1. Clone this repository to a directory in your desired location
   
   a. Open command terminal or Git Bash and execute the following command: 
      git clone https://github.com/pauljessica82/WallApp.git
      
2. Begin installing dependencies and packages for frontend
   a. In your terminal, navigate to the directory in which you cloned the project.
   b. Execute "cd frontend" in terminal to navigate to the frontend directory
   c. Execute "npm install" to install all the packages needed for the frontend.
   d. Once package install is complete run "npm start" to fire up the local react environment at http://localhost:3000/ . You should now see the landing page: 
   
   ![image](https://user-images.githubusercontent.com/51688932/192004803-4cf6f213-9af1-43f5-94c2-9cabf2b0946c.png)


5. Setup new virtual environment for backend 

   a. In terminal, Navigate to project folder "backend" (...\WallApp\backend)
   b. Execute this command in terminal: "virtualenv env" This will create env folder in the project folder
   c. Activate virtual environment. " . env\Scripts\activate".
   d. Install dependencies which are located in requirements.txt .
      Ex. "pip install -r requirements.txt"
   e. *** If you come across the error "Cannot use ImageField because Pillow is not installed", run "pip uninstall Pillow", and then "pip install Pillow". ***
   
6. Set Up utils.py for email sending

   a. When user registers, a new email is fired off using the EMAIL_HOST_USER and EMAIL_HOST_PASSWORD specified in the ..backend/user/utils.py file. Update these            to a valid email, and password of your choosing.  *Some details to note: 
            a. The current script uses "smtp.gmail.com" as the host, the EMAIL_HOST_USER must be a valid gmail account with IMAP enabled. To enable IMAP, see:                      https://support.google.com/mail/answer/7126229?hl=en#zippy=%2Cstep-check-that-imap-is-turned-on.*The EMAIL_HOST_PASSWORD will be a generated             app password. To generate an app password for your Gmail account, see https://support.google.com/accounts/answer/185833?hl=en#:~:text=Create%20%26%20use%20App%20Passwords . 
   
7. Creating User and Post tables

   a. In terminal, run "python manage.py migrate --run-syncdb" and tables will be generated to create users and posts.
   b. Now you should be able to register a new user by navigating to http://localhost:3000/ , and clicking SignUp. ( I recommend using https://temp-mail.org/en/ if you would not like to use a real email ) 
            

6. (Pycharm) Enable python virtual environment in PyCharm. File-Settings-Python Interpreter select new virtual environment with 
   specifying path to ....\env\Scripts\python.exe
