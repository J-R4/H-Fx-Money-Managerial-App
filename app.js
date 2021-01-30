const express = require('express');
const app = express();
const port = 3000;
const router = require('./routes');
const session = require('express-session');
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
    })
);
app.use('/', router, express.static(path.join(__dirname, 'views')));

app.listen(port, (err) => {
    if (err) throw err;
    else {
        console.log('app listening on port' + ' ' + port);
    }
});
