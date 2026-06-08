const express = require("express");
const cors = require("cors");
const path = require("path");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;

    const sql =
        "INSERT INTO contacts (name,email,message) VALUES (?,?,?)";

    db.query(sql, [name, email, message], (err) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                message: "Failed to save message"
            });
        }

        res.json({
            message: "Message sent successfully!"
        });
    });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
