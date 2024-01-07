const express = require('express');
const path = require('path');
const fs = require('fs');
const lessMiddleware = require('less-middleware');
const browserifyMiddleware = require('browserify-middleware');

// Load config files
const config = require('config');
const port = config.get('server.port');


// remove previously rendered files
fs.rmSync('public/static', { recursive: true, force: true });
fs.mkdirSync('public/static/js',{recursive:true});
fs.mkdirSync('public/static/css',{recursive:true});


// initialize the app
const app = express();

// Use less-middleware to compile and serve Less files
app.use('/static/css',lessMiddleware(path.join(__dirname, 'src/less'), {
    dest: path.join(__dirname, 'public/static/css'),
    force: true, // Recompile on every request (for development)
}));

// Our module islocated at src/js/smartBuilding/main.js
app.get('/static/js/smart-building.js', browserifyMiddleware('./src/js/smartBuilding/main.js',{
    debug:true
}));


// expose the static js files
app.use('/js', express.static(path.join(__dirname, 'public/static/js')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'public')));
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

