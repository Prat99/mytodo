var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var todos = require('./routes/todos');

var app = express();

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});


app.use('/', index);
app.use('/api/v1/', todos);
app.use('*', function(req, res)
{
  res.sendFile(path.join(__dirname, 'public/index.html'));
});
var port = process.env.PORT || 8080;
app.listen(port, function(){
    console.log('Server started on port'+port);
});
