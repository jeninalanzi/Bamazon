// Establishing dependencies needed for this app to work.
const mysql = require("mysql");
const inquirer = require("inquirer");

// Establishes a connection with the mySQL database using credentials:
const connection = mysql.createConnection({
    host: "localhost",
    post: 3306,
    user: "root",
    password: "aphelion9",
    database: "bamazon"
});

// Begins connection to mySQL and functions:
connection.connect(function (err) {
    if (err) throw err;
    displayProducts();
});


// Create a function that displays table values to user.
function displayProducts() {

    connection.query("SELECT item_id, product_name, price, stock_quantity FROM products", function (err, res) {
        if (err) throw err;

        // Displays the values as a readable table
        console.table(res);

        // Runs the placeOrder function that will allow the user to make orders.
        placeOrder();


    });
};

// Create the placeOrder() function called in line 31.
function placeOrder() {

    // Once you have items, prompt user what product ID they want to buy and how much
    inquirer
        .prompt([
            {
                name: "choice_id",
                type: "input",
                message: "Which item would you like to buy? [select by ITEM_ID]"
            },
            {
                name: "order_amount",
                type: "input",
                message: "How much (quantity) would you like to order?"
            }
        ])
        .then(function (answer) {

            // Just testing functionality at this point in the code..
            // console.log("You chose ITEM NO. " + answer.choice_id + " and you want " + answer.order_amount + " of it!");

            // Store our mySQL query to retrieve all pertinent table values
            const query = `SELECT * FROM products`

            // This code displays the fetched results on the server-side console.
            connection.query(query, { item_id: answer.choice_id }, function (err, res) {

                var chosenProduct;

                // For-loop that compares the item_id to the user's product selection
                // IMPORTANT!!! answer.choice_id needs to be converted to integer for this to work
                for (var i = 0; i < res.length; i++) {
                    if (res[i].item_id === parseInt(answer.choice_id)) {
                        chosenProduct = res[i];
                    }
                };

                // Conditional statement that will update the stock_quantity of chosen product!
                if (chosenProduct.stock_quantity >= parseInt(answer.order_amount)) {
                    console.log(`You chose ${answer.order_amount} and there are ${chosenProduct.stock_quantity} in stock`);

                    var updatedQuantity = chosenProduct.stock_quantity - parseInt(answer.order_amount);

                    // Update the selected column's stock_quantity by item_id 
                    connection.query(
                        "UPDATE products SET ? WHERE ?",
                        [
                            {
                                stock_quantity: updatedQuantity
                                // This updates the stock_quantity to updated_quantity
                            },
                            {
                                item_id: answer.choice_id
                                // selects item id which is the user's choice id
                            }
                        ],

                        function (error) {
                            if (error) throw err;

                            // The variable which will take the total price of the order and display it
                            var orderTotal = parseInt(answer.order_amount) * chosenProduct.price;

                            // Messages to the user once order is placed successfully
                            console.log(" ");
                            console.log("....")
                            console.log("=======================================================================================================");
                            console.log(" ");
                            console.log(`Order placed successfully! \nThere are now ${updatedQuantity} of ${chosenProduct.product_name} left!`);
                            console.log(`Your order total is: $ ${orderTotal}`);
                            console.log(" ");
                            console.log("=======================================================================================================");
                            console.log(" ");

                            displayProducts();
                        }
                    )
                }
                else {
                    // If stock quantity isn't high enough to fulfill order, warn customer and re-initialize order process.
                    console.log(" ");
                    console.log("Sorry, stock is too low to fulfill that order. Try again!");
                    console.log(" ");
                    displayProducts();
                }

                // connection.end();
            });
        });

}