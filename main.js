var express = require('express');
var app = express();
var fs = require("fs");
var path = require("path");
var bodyParser = require('body-parser');

//parse form
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())
// function between(min, max) {
//   return Math.random() * (max - min) + min;
// }

app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname + '/views/addNewExpense.html'));
})

let expenses = [];
app.get('/expenses/add', function (req, res) {
   res.sendFile(path.join(__dirname + '/views/addNewExpense.html'));
})

app.post('/expenses/add', function(req, res) {
  let expense = {
    account : req.body.account,
    amount : req.body.amount,
    date : req.body.date,
    category : req.body.category
  }
  console.log(expense);
  expenses.push(expense);
  res.redirect("/")
})

app.get('/expenses/{id}', function (req, res) {
   res.sendFile(path.join(__dirname + '/views/addNewExpense.html'));
})

// app.get('/', function (req, res) {
//    res.sendFile(path.join(__dirname, "test.txt"));
// })

// app.get('/nextDay', function (req, res) {
// 	let date = new Date();
// 	date.setDate(date.getDate() + 1);
// 	res.send(date);
// })
//
// app.get('/healthCheck', function (req, res) {
// 	res.send("Server ok!!!!");})
//
// app.get('/randomNumber', function (req, res) {
// 	res.send(String(between(0, 101)));
// })
//
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
