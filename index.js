let express = require('express');
let _ = require('lodash');


let app = express();
app.listen(3000);
app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'pug');

let params = {
    defaultTitle: 'App title'
};

// GET method route
app.get('/', function (req, res) {
    res.render('index', {
        _,
        params
    });
});

// POST method route
app.post('/', function (req, res) {
    res.send('POST request to the homepage');
});

