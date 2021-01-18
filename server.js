const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mysql = require('mysql');

console.log("connecting DB");
var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'rteb',
        password : 'C0deH0riz0n!',
        database : 'gold_rush_calculator',
        insecureAuth : true
    });
    
// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});
app.get('/products_info', (req, res) => {
  connection.query("SELECT * FROM products", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    if (result.length == 0 ) {
  		res.send({ express: "database empty!"})
    } else {
  		res.send({ express: JSON.stringify(result) });
  }
  });
  
  
  
});