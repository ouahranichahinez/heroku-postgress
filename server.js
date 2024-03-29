import express from "express";
import pkg from "pg";
import bodyParser from "body-parser";
const { Client } = pkg;
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const client = new Client({
    user: "ybvvfosddpptkx",
    host: "ec2-54-161-255-125.compute-1.amazonaws.com",
    database: "d38o6h85l1i369",
    password:
        "1d5e26091ee3fcec785f53656a10c96f08c559ba8d847c2c95abde4057ffbcf4",
    port: 5432,
    ssl: {
        rejectUnauthorized: false,
    },
});
client
    .connect()
    .then(() => console.log("connection to database has been established."))
    .catch((err) => console.error("connection error", err.stack));

var queryModel = `select * from artists`;
// postgresql-shallow-08047
client.query(queryModel, (err, res) => {
    if (err) {
        throw err;
    } else {
        console.log("rows length is equal to " + res.rows.length);
    }
});

app.post("/saving", (req, res) => {
    const data = req.body.nom;
    var queryModel = `INSERT INTO artists ("id","name") VALUES (${Math.floor(
        Math.random() * (1000 - 0) + 0
    )},'${req.body.nom}')`;
    // postgresql-shallow-08047
    client.query(queryModel, (err, res) => {
        if (err) {
            throw err;
        }
        client.end();
    });
    res.redirect("/");
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
