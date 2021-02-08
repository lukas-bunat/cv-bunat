const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.download("resume.pdf", err => err ? console.error(err) : console.log("CV was served."));
});


module.exports = app;
