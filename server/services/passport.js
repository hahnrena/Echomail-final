const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});


passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        });
});

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
            proxy: true
        }, 
        (accessToken, refreshToken, profile, done) => {
            // console.log('access token', accessToken);
            // console.log('refresh token', refreshToken);
            // console.log('profile', profile);
            User.findOne({ googleId: profile.id })
                // we used an asynchronous request &  promise b/c it takes time for mongodb to grab data. so once we get data, we .THEN show the data
                .then((existingUser) => {
                    if (existingUser) {
                        done(null, existingUser);
                    }
                    else {
                        new User({ googleId: profile.id })
                            .save()
                            .then(user => done(null, user));

                    }
                })
        }
    )
);


