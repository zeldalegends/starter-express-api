const express = require('express');
var bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

const app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/status', (req, res) => {
    console.log("healthy");
    res.send('Express App: Running (Healthy).');
})

app.post('/', urlencodedParser, (req, res) => {
    console.log('Form data received:', req.body);
    res.sendStatus(200);
});

app.listen(PORT, (err) => {
    if (err) console.log("Error in server setup");
    console.log("Server listening on port", PORT);
});
