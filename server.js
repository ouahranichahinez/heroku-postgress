import express from "express";
import pkg from "pg";
import bodyParser from "body-parser";

const { Client } = pkg;
const app = express();
const PORT = process.env.PORT || 3000;

// use the express-static middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
//var DATABASE_URL = "postgresql-shallow-08047";

app.post("/saving", async (req, res) => {
    /* const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false,
        },
    });*/

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

    // postgresql-shallow-08047
    client.connect();
    client.query(
        `INSERT INTO artists(id,name) VALUES('4','${req.body.nom}')`,
        (err, res) => {
            if (err) throw err;
            for (let row of res.rows) {
                console.log(JSON.stringify(row));
            }
            client.end();
        }
    );
    res.redirect("/");
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
