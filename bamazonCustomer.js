//Dependencies
var mysql = require("mysql");
var inquire = require("inquire");

//Connect to Mysql database
var connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "$Joublie3**",
  database: "bamazon4"
});

//Initiate Mysql connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//Establish routes and display table
connection.query("SELECT * FROM products", function(err, rows) {
if(err) throw err;
for (var i = 0; i < res.length; i++) {
	console.log(rows[i].name);
};

//Prompt the user with a question
var idNumber = inquirer.prompt(["What is the ID number of the product you would like to buy"]).then(function (err, res) {
 	console.log(res);
 	if(err) throw err;

//Console.log product id details
 	connection.query("SELECT * FROM products", function(err, res) {
  	for (var i = 0; i < res.length; i++) {
    console.log(res[i].id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
 	}
});	

//Prompt user with 2nd question
 	var unitsProduct = inquirer.prompt(["How many units of this product are you looking to buy?"]).then(function (err, res) {
   	console.log(res);

//Store responses from stock and price quantities in variables to reference later
   	var stock_quantity = res[i].stock_quantity
   	var price = res[i].price

//Create if statement to verify if stock is available
   	if (res > stock_quantity) {
   		console.log("Insufficient quantity, please choose a number lower than" + res);
   	}

//If stock is available, calculate and display total for customer
   	else {
   		function totalFunction() {
   			var total = res * price
   		}
   		console.log("Your total is $" + total);
   	}

});
});

//Initiate the listener
app.listen(port);
