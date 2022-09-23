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

   1. In terminal, Navigate to project folder "backend" (...\WallApp\backend)
   2. Execute this command in terminal: "virtualenv env" This will create env folder in the project folder
   3. Activate virtual environment. " . env\Scripts\activate".
   4. Install dependencies which are located in requirements.txt .
      Ex. "pip install -r requirements.txt"
   5. *** If you come across the error "Cannot use ImageField because Pillow is not installed", run "pip uninstall Pillow", and then "pip install Pillow". ***
   5. You can now run any script with enabled virtual environment

6. Enable python virtual environment in PyCharm. File-Settings-Python Interpreter select new virtual environment with 
   specifying path to "C:\Git Projects\CI-Testing\env\Scripts\python.exe"
