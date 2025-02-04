const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const e = require('express');
require('dotenv').config();

GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

// setting up google strategy for passport
// setting callback url after successful authentication
// setting client id and secret from google developer console
const strategy = new GoogleStrategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret:GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/google/callback",
        passReqToCallback   : true
      },
      async function(request, accessToken, refreshToken, profile, done) { 

        try {
                // Try to find the user by their Google ID
                let user = await User.findOne({ googleId: profile.id });
                // if user not found create a new user
                if (!user) 
                    {
                        user = await User.create({
                        googleId: profile.id,
                        email: profile.emails[0].value,
                        displayName: profile.displayName
                        });
                    }
                return done(null, profile);
            }
        catch (error)
        {
            console.error("Error during authentication:", error);
            return done(error);  // If error occurs, pass the error to the 'done' callback
            
        }
        

    }

    
    );
// verify function needs to be defined inside the strategy here 
passport.use(strategy);

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(async function(id, done) {
    try {
        let user = await User.findOne({ googleId: id });
        done(null, user);
        
    } catch (error) {
        console.error("Deserialization Error:", error);
        return done(error); 
        
    } 
});  

//       passport.use(strategy, async function(request, accessToken, refreshToken, profile, done) {
//         try {
//             // Try to find the user by their Google ID
//             let user = await User.findOne({ googleId: profile.id });
    
//             // If the user doesn't exist, create a new one
//             if (!user) {
//                 user = await User.create({
//                     googleId: profile.id,
//                     email: profile.emails[0].value,
//                     displayName: profile.displayName
//                 });
//             }
    
//             // Passing the user object to the 'done' callback after successful authentication
//             return done(null, user); // user is passed to Passport
    
//         } catch (error) {
//             console.error("Error during authentication:", error);
//             return done(error);  // If error occurs, pass the error to the 'done' callback
//         }
//     });
    
// passport.serializeUser(function(user, done) {
//     done(null, user.id);
//   });

// passport.deserializeUser(function(id, done) {        
//     User.findOne({ googleId: id }, function(err, user) {
//       done(err, user);
//     });
//   });   

