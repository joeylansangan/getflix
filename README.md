# Getflix Video Streaming App
This application is fully mobile responsive complete with secure Authentication and integrated with Stripe subscription API utilizing React hooks and Redux.

![Landing Page](/client/public/assets/screen1.png)
![Authentication Page](/client/public/assets/screen2.png)
![Hero Page](/client/public/assets/screen3.png)
![Hero Page 2](/client/public/assets/screen6.png)
![Profile Page](/client/public/assets/screen5.png)

### Demo
[https://getflixnow.netlify.app/](https://getflixnow.netlify.app/)

## Loggin In to the App
-Use following credentials to log in to the app:
-Username: hdplan@gmail.com
-Password: hdplan123

## Table of contents
1. [Technologies used](#technologies-used)
3. [Setup and Installation](#setup-and-installation)
4. [Additional Notes](#additional-notes)

## Technologies used
- [React.js](https://reactjs.org/)
- [@reduxjs/toolkit](https://redux-toolkit.js.org/)
- [Firebase](https://firebase.google.com/)
- [Stripe API](https://stripe.com/)
- [Netlify](https://www.netlify.com/)

## Requirements

### Node.js
-You need to have Node on your local development machine to run this application. If you don't have it installed on your system, please head to the official [Node.js](https://nodejs.org/en/) website to download and install Node.

### Git
-You'll also need to have Git installed to run Git commands in your terminal. 

### Install Git on Mac
1. Install [Homebrew](https://brew.sh/) 
2. Once Homebrew is installed, in your terminal run: 
```
$ brew install git
```
3. Verify the installation was successful:
```
$ git --version
```
### Install Git on Windows
You can download the latest Git for Windows installer [here](https://gitforwindows.org/)

## Setup and Installation
1. In your terminal, go to the folder where you want to save the source code and clone the repository by running:
```
$ git clone https://github.com/joeylansangan/VennliTest.git
```
2. Go to the project directory and install dependencies by running:
```
$ yarn add
```
3. After installation you can now run the application in the development mode with:
```
$ yarn start
```
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

## Additional Notes

### CI/CD
Continuous Integration and Deployment is setup for this application. The Git repository is connected to Netlify and triggers a publish automatically everytime a commit is pushed.