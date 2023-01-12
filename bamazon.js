const { createConnection } = require("mysql2");
const inquirer = require("inquirer");

//Connection to database
const db = createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "bamazon2"
});

db.connect(e => {
  if (e) {
    console.log(e);
  } else {
    displayProducts();
  }
});

const displayProducts = () => {
  let query = "SELECT * FROM products";
  db.query(query, (e, res) => {
    if (e) {
      console.log(e);
    } else {
      console.log(`ITEMS AVAILABLE FOR SALE: `);
      for (let i = 0; i < res.length; i++) {
        console.log(` 
        Item id: ${res[i].item_id} || 
        Product: ${res[i].product_name} || 
        Department: ${res[i].department_name} ||
        Price: ${res[i].price} ||
        Quantity for sale: ${res[i].stock_quantity} ||
        ----------------------------------------------`);
      }
    }
  });
};
