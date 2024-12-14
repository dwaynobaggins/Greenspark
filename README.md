# Greenspark Task:
Create a front-end service that allows a user to display product widgets as well as update their settings. A product widget domain has immutable properties (id, type, amount, action) and mutable settings (color, active and linked states).

## Non-technical requirements:
* As a user I want to see my product widgets.
* As a user I want to customise my widgets by changing their colors, active state and whether it’s linked to my public profile (using client-side state management)
* Only one widget can have the active state at a time

# Solution:

## Clone this repository

     git clone https://github.com/dwaynobaggins/Greenspark.git 
     
## Install the dependencies (Project Setup)

     npm install  

## Run the project on http://localhost:5173/

     npm run dev

## Notes on this Project

I chose to complete this task using Vue with a from scratch project, to demonstrate that I know how to scaffold a new Vue project using the latest packages and best practices for project setup.
I used global styles where possible, with the intention of keeping the broader scope of the project in mind while maintaining component driven architecture.
The Per Products Component is designed to work in-situ and in isolation (for ease of Storybook testing).
