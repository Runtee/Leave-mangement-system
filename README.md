# leave-mangement-system

## Table of contents

- [leave-mangement-system](#leave-mangement-system)
  - [Table of contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Demo](#demo)
  - [Run](#run)
  - [TECHNOLOGY USED](#technology-used)
  - [Features](#features)


## Introduction

A leave management website using Node js, Express js, and Mongoose.

## Demo

The application is deployed to Heroku and can be accessed through the following link:

[leave management system on Heroku](https://leave-management-system.herokuapp.com/)

The website resembles a real real system in which companies can manage and grant their employees leaves. 
The website has three actors, the employees, the supervisors and the admin.

## Run

To run this application, you have to set your own environmental variables. For security reasons, some variables have been hidden from view and used as environmental variables with the help of dotenv package. Below are the variables that you need to set in order to run the application:

- MONGO_URI: this is the connection string of your MongoDB Atlas database or your local Mongodb server.

After you've set these environmental variables in the .env file at the root of the project, you need to navigate to the "seedDB" folder and run "node data.js" to fill your empty MongoDB Atlas database.

## TECHNOLOGY USED

* 1-FRONTEND-HTML 5 , CSS, BOOTSRAP.
* 2-BACKEND- NODE JS, EXPRESS JS , MONGO DB.

## Features

The application displays a virtual bags store that contains virtual products and contact information.

Employees can do the following:

- Create an account, login or logout
- Track applied leave
- Change password
- View and edit personal profile details

Supervisors can do the following:
 
- Create an account, login or logout
- Approve or decline leaves sent by the employees in their department
-View approved and pending leaves
- Change password
- View and edit personal profile details 

Admin can do the following:

- Login or logout to the admin panel
- View/delete users.
