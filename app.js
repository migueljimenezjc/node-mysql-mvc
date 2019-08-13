const express = require('express');
const bodyParser = require('body-parser');

var app = express();

var user_routes = require('./routes/user');

// parse application/json
app.use(bodyParser.json());
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', user_routes);


app.listen(3000, function() {
    console.log('Express is running on port 3000');
});