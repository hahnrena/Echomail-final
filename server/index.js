// common JS modules: system implemented by NODE for sharing files; node.js doesn't support es2015 modules 
const mongoose = require('mongoose');
const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./models/Survey');
require('./services/passport');
// const authRoutes = require('./routes/authRoutes');
//I switched './models' and './services' to get rid of the error "schema hasn't been registered for model 'users'"

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();

// tell passport & express to make use of cookies//
app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    // like our main.js file or main.css file
    app.use(express.static('client/build'));

    // Express will serve up the index.html file
    // if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });
}


// heroku inject environemnt variables//runtime configuration \\
const PORT = process.env.PORT || 5000;  
app.listen(PORT);