//@ts-check
const express = require('express');
const app = express();
const PORT = 3000;
const router = require('./routes/index.js');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', router);

app.listen(PORT, () => {
    console.log(`app Listening on: http://localhost:${PORT}`);
});
