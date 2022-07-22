import express from "express";
const app = express();

app.use(express.static("public"));
app.get("/", (req, res) => {
    res.send("hello there !");
});

// start the server listening for requests
app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));
