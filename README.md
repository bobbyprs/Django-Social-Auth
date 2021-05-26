# Django-React-Socical-auth
react django social auth fullstack social authentication extension of blog app
# About
Build a full-stack single-page application (SPA) having 3 components as described below.
# Login Page
Create a simple login page allowing users to pass through using their Google or Facebookaccounts. Any package or existing module can be used to implement it.
After logging in, they should be taken to the “Contact Us” page (described in the next section)with a menubar having links to “Contact Us”, “Analytics” page 
and logout

# Contact Us Page
  create a simple “Contact us” form that saves a copy of theresponses to a database.This Contact us form will have the following 4 fields:
  - First name
  - Last name
  - Email
  - Message
  - reCaptcha (below the Message box)

The first name, last name, and email fields will be text inputs, with the message being a textarea. Be sure to add validation to the email field to make sure it’s a valid email address, andprevent the form from submitting until a valid email address is entered.

# Analytics 
- Date range
- Chart showing the number of form submissions from the contact us page form for everyday between the selected dates

# Lets get started (Django)
  
  **Before u need to install git and django**
  
  **Install Git for linux**
  If you want to install the basic Git tools on Linux via a binary installer, you can generally do so through the 
  package management tool that comes with your distribution. If you’re on Fedora (or any closely-related RPM-based distribution, such as RHEL or CentOS), 
  you can use dnf insted of apt
  
    $ sudo apt install git-all
    
**Run the Project :**

  First clone the project into your local machine  and the try to install requirements.txt file all the dependinces required to run the project will 
  get install automatically
    
    git clone https://github.com/bobbyprs/C3-Project.git
    
   **installing Dependencys**
   
    pip install -r requirements.txt
    
   **This step is optional unless if you are adding a new database then this is required steap**
      
      python manage.py makemigrations
      
   **Make shure you migrate it is good check ones**
   
      python manage.py migrate
   **For running the Project**
   
   Ones u have complected all the above steps u have to activate the virtual env u can install by refering to 
   this link:https://www.javatpoint.com/django-virtual-environment-setup  or else u can use the djangoenv folder      
   **Make shure you not running project with out activating vitual env**
   
      python manage.py runserver
