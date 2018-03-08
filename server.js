const bodyParser = require('body-parser');
const express = require('express');
const mysql = require('mysql');

const app = express();

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'forum',
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});


app.use(function(req, res, next) {
    //set headers to allow cross origin request.
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/saveuser' ,(req,res)=> {	
let post = {username:'pavi',password:'ddddddd',email:'dfdsfds@gg.com',signup_date:1487247618};
let sql ='INSERT INTO users SET ?';
let query  = connection.query(sql, post, (error, results) =>
{
  if (error) throw error;
   console.log(results);
   res.send('User added');
});
});



app.get('/getusers' ,(req,res)=> {	
let sql ='SELECT * from users';
let query  = connection.query(sql, (error, results) =>
{
  if (error) throw error;
   console.log(results);
   res.send(results);
});
});


app.listen('3000' , () =>
{
	console.log('Server');
});
