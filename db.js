const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "portfolio_db"
});

connection.connect((err) => {
    if (err) {
        console.log("Database Connection Failed");
        return;
    }

    console.log("MySQL Connected");
});

module.exports = connection;
