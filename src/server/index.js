// app.js
const express = require('express');
const os = require('os');
var cors = require('cors');

const app = express();

app.use(cors());

app.use(express.static('dist'));

app.all('/api/items/add', (req, res) => {
    console.log(req.body);
    res.send({ username: os.userInfo().username });
});

app.all('/api/items', (req, res) => {
    let data = [{ id: 1, name: "test item" }, { id: 2, name: "test item1" }];
    res.send(data);
});

app.listen(4200, () => console.log('Listening on port 4200!'));