const express = require('express');
const ejs = require('ejs');
const port = 3000;
const app = express();

app.use(express.static("./public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
})
.get("/about", (req, res) => {
    res.render("about");
})
.get("/add_post", (req, res) => {
    res.render("add_post");
});

app.listen(port, () => console.log(`Sunucu ${port} da başladı`));