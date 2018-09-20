// app.js
const express = require('express');
const os = require('os');

const app = express();

app.use(express.static('dist'));

app.all('/api/items/add', (req, res) => {
    console.log(req.body);
    res.send({ username: os.userInfo().username })
});

app.all('/api/saveData', (req, res) => res.send('done'));

app.listen(4200, () => console.log('Listening on port 4200!'));