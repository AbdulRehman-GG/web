const https = require("https");
const express = require("express");
const es6Renderer = require('express-es6-template-engine');
const fs = require("fs")
const app = express();
const PORT = 443 || process.env.PORT;
const rateLimit = require('express-rate-limit');

app.engine('html', es6Renderer);
app.set('views', './views');
app.set('view engine', 'html');
app.use(express.static(__dirname + "/public"))




app.get('/', function(req, res) {
    res.render('index');
});

app.get('/about.html', function(req, res) {
    res.render('about_us.html');
});

app.get('/contact.html', function(req, res) {
    res.render('contact_us.html');
});

app.get('/consulting.html', function(req, res) {
    res.render('consulting.html');
});

app.get('/rehan', function(req, res) {
    res.render('rehan');
});


app.get('/rehman', function(req, res) {
    res.render('rehman');
});


app.get('/asher', function(req, res) {
    res.render('asher');
});


app.get('/shehryar', function(req, res) {
    res.render('shehryar');
});


app.get('/faq.html', function(req, res) {
    res.render('terms');
});
app.use(function (req, res) {
    res.status(404).render('404');
});



const server = https.createServer(app);server.listen(PORT,() => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

