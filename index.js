const express = require('express');
const path = require('path');
const mailroutes = require('./controller/mail.js');
const { PORT } = require('./config/environment.js');

const app = express();
const port = PORT || 3002;

app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

app.use(express.static(path.join(__dirname, '/')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/sendemail', mailroutes)


