# Improv Website

This is a project for an Improv website featuring several interactive elements. It includes a **mailing list** connected to **Google Sheets**, a **multiplayer Name Game** using **Socket.io**, **Google Sign-In** using **Google Oauth2**, a **game carousel**, and an **events page** showcasing upcoming activities. The website also features integrated **Google Apps Script** and **Passport.js** for secure user authentication.

## Features

### 1. **Mailing List**
   - Users can input their **message** and **email** into a form, which then gets saved in **Google Sheets** for easy management.
   - Implemented using **Google Apps Script**.

### 2. **Name Game (Multiplayer)**
   - A fun multiplayer game where a player compete to guess top 5 words based on the question in real-time.
   - Built using **Socket.io** for real-time communication between players.

### 3. **Sign In with Google**
   - Users can log in using their **Google account** via **OAuth2** with **Passport.js**.
   - Sessions are used to store authentication data, ensuring secure login.

### 4. **Carousel**
   - A carousel displaying various **games** and their **rules**.
   - Designed to provide a quick overview of the games available on the platform.

### 5. **Events Page**
   - A page that showcases **upcoming events** for the improv community, with details about each event.

## Blogs

I have written a series of Medium blogs explaining how to:
- Configure **Google Web App** for the mailing list functionality.
- Set up **Oauth Consent screen** in the **Google Cloud Console**.

- [Blog 1: Google Web App Setup](#)
- [Blog 2: Google Sign-In Setup in Google Cloud Console](https://siddharthsamber94.medium.com/setting-up-google-oauth-consent-screen-for-develop-be0b06fbd874)

## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/username/improv-website.git

2. npm install in both frontend and backend:
   ```bash
   cd frontend 
   npm install
   cd backend
   npm install

3. Run your mongo DB databse 

4. Set all the environment variables in .env file:

Environment variables to setup 
Mongo URL, Google Client ID and secret , Session key 

5. run the dev script to run both front-end and back-end server. 
   ```bash
   cd frontend 
   npm run dev
   cd backend
   npm run dev 




