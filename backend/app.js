

var express = require('express');

var app = express();

var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var db = require('./app/config/db.config.js');
db.sequelize.sync({force: false});

var cors = require('cors');
var corsOptions = {
    origin: 'http://localhost:4200',
    credentials: true,
    optionSuccessStatus: 200
};
app.use(cors(corsOptions));

var requests = require('./app/route/request.js');
requests(app);

app.listen(3000);