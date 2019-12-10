const mysql = require("mysql");
const mysqlConfig = require("./mysqlConfig.js");

const productDB = mysql.createConnection({
  host: mysqlConfig.host,
  user: mysqlConfig.user,
  password: mysqlConfig.password,
  database: mysqlConfig.database
});

productDB.connect(console.log("connected to DB"));

const getProduct = (productID, callback) => {
  productDB.query(
    `SELECT * FROM products WHERE id = ${productID};`,
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        callback(err, results);
      }
    }
  );
};

module.exports = { getProduct };
