// include
const express = require('express');
const ejs = require('ejs');
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const postController = require('./controller/postController');
const pageController = require('./controller/pageController');
require('dotenv').config();
const app = express();


// Express config
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(methodOverride('_method'));
app.set("view engine", "ejs");

const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
}
// MongoDB connection
mongoose.connect(process.env.HOST_NAME, mongooseOptions);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Database Connection ERROR:'));

// GET
app
    .get("/", pageController.renderIndex)
    .get("/about", pageController.renderAbout)
    .get("/add_post", postController.renderAddPost)
    .get("/post/:id", postController.getPost)
    .get("/post/:id/edit", postController.getEditPage);

// POST
app
.post("/post", postController.createPost);

// PUT
app
.put("/post/:id/edit", postController.updatePost);

// DELETE
app.delete("/post/:id", postController.deletePost);


app.listen(process.env.PORT, () => console.log(`Sunucu ${process.env.PORT} da başladı`));