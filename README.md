# FollowMeUp
Github Repository for the FollowMeUp group
# Project FollowMeUp Readme

## Release Notes

### Version 1.0.0
- Release Date: Sept 25, 2023
- Back-end and front-end for the application and database for the server.

**Bugs/Fixes:**
- Trying to make it responsive, need to add homepage designs.
- Add actual features to the list for payment options.
- Change title to "Follow Me Up" and add the logo.

### Version 1.0.1
- Release Date: Oct 2, 2023
- Added homepage and about us, and other landing page designs.
- Added front-end for tasks and settings page.

**Bugs/Fixes:**
- Need to add the backend for tasks and settings page.
- Change logo to "Follow Me Up."
- Change "email" to "tags."
- Add events on the dashboard.
- Contacts: take off the chat button or make it change to email like in the contact page.
- Display the notes on the contact page.
- Calendar page: events not showing up on the calendar.
- No email templates page.

### Version 1.0.2
- Release Date: Oct 8, 2023
- Finalized all pages for hosting.
- Fully functional contact, task, and settings page.
- Tags and events are displayed on the dashboard.

**Bugs/Fixes:**
- Email templates are just in the backend.
- Can't update profile photo for settings.
- Data in the dashboard for monthly connections is still fixed.
- Notes still not shown on contacts page.
- Time constraints can't make an email template page; it's all in the backend.

## Installation and Running Instructions
 **Installation:**

### DEPLOYMENT INSTRUCTIONS

- Clone source code from Github Repository:
  - Execute the command `git clone [repository-url]` (please replace the repo name with your project name) to add your project to the local environment.

- In the Local Code compilation, continue to proceed to the path of ‘client’ and ‘api’ from the local project structure.
  - After that, execute the code `npm run build` to execute the source code.

- Create Image and Docker package:
  - Using Docker to encapsulate and create an image for front-end and back-end, follow the specifications outlined in the Dockerfile.

  - **Client**: Execute 'docker build -t frontend .' in the terminal.
  - **API**: Execute 'docker build -t backend .' in the terminal.

- Create the AWS EC2 account and set up the configuration:
  - Access the AWS Management Console.
  - Create a new EC2 Instance and set up the necessary configuration. Please note that the port used in the project is for port 80 and 3001 to allow traffic, as these ports are integral to the project operations.

- Setting up Docker on EC2:
  - Access SSH into the EC2 instance, then set up the Docker Engine, following the instructions via this link: [Install Docker Engine on Ubuntu | Docker Docs](https://docs.docker.com/engine/install/ubuntu/).

- Create an account on Docker Hub and log in:
  - Create an account on Docker Hub, then log in to the account on both Docker local and Docker Engine by the command `docker login`.

- Push Image to Docker Hub:
  - From the local, use the command `docker push frontend` and `docker push backend` to push the 2 images built to Docker Hub.

- Run image on EC2:
  - From the EC2, use the command `docker pull frontend` and `docker pull backend` to clone the 2 images. After that, run 2 images with frontend on port 80 and backend on port 3001 via these commands:
    - Frontend: `docker run -p 80:4173 --name frontend frontend`
    - Backend: `docker run -p 3001:3001 --name backend backend`

**Important Consideration:**
The version of Personal from Docker Hub is available to save one image in each session, so when you push a version to Docker Hub, you must pull that version into EC2 immediately.

2. **Project URLs:**
- Github URL:https://github.com/s3900567/FollowMeUp
- Final Github (for the client, cleaner version): https://github.com/hoangfamm/FollowMeUp_Official
- Deployed Project URL: http://3.26.190.214/
