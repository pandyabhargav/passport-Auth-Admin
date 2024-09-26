const express = require('express');
const session = require('express-session');
const passport = require('./config/passport');
const router = require('./Router/router');
const path = require('path');
const mongoose = require('./config/mongose')
const cookieParser = require('cookie-parser');





const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'views')));

app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'yourSecret', // Replace with a strong secret
    resave: false,
    saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());


app.use('/', router);


app.use((req, res) => {
    res.status(404).send('Page not found');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
