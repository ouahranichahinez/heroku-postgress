import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;
const { Client } = require("pg");

//var DATABASE_URL = "postgresql-shallow-08047";

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});
// postgresql-shallow-08047
client.connect();

client.query(
    "SELECT table_schema,table_name FROM information_schema.tables;",
    (err, res) => {
        if (err) throw err;
        for (let row of res.rows) {
            console.log(JSON.stringify(row));
        }
        client.end();
    }
);

app.get("/", (req, res) => {
    res.send("it works !!!");
});
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
