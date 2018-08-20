const express  = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();

const cors = require('cors');

const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(logger('dev'));

app.use(cors());

app.get('/', function(req, res) {
    res.json('hello');
});