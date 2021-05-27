// include
const express = require('express');
const ejs = require('ejs');
const path = require('path');
const port = 3000;
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

// Express config
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set("view engine", "ejs");

// MongoDB connection
mongoose.connect(process.env.HOST_NAME, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Database Connection ERROR:'));

// MongoDB schema and models
var postSchema = mongoose.Schema(
    {
        title: String,
        detail: String,
        dateCreated: {type: Date, default: Date.now()}
    }
);
var PostModel = mongoose.model('Post', postSchema);

// GET
app.get("/", async (req, res) => {
    var posts = await PostModel.find({})
    res.render("index", {posts});
})
.get("/about", (req, res) => {
    res.render("about");
})
.get("/add_post", (req, res) => {
    res.render("add_post");
})
.get("/post/:id", async (req, res) => {
    var post = await PostModel.findById({_id: req.params.id})
    res.render("post", {post});
});

// POST
app.post("/post", async (req,res) => {
    await PostModel.create(req.body);
    res.redirect("/");
});

app.listen(port, () => console.log(`Sunucu ${port} da başladı`));