//server.js
const express = require('express');
const app = express();

app.use("/test", (req, res) => {
    res.send({message: 'Hello'});
    res.end();

});

module.exports = app;
