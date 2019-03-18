const express = require('express');
const path = require('path');

const app = express();
const port = '3001';

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.use(express.static(path.join(__dirname + '/')));
app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "InnovateBham2019",
  database:"Portfolio"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});