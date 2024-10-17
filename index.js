const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

app.use(express.static(path.join(__dirname, '/')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.get("/message", (req, res) => {
    res.send({ message: "Hello from server!" });
});

