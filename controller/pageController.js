const PostModel = require('../models/model_post');

exports.renderIndex = async (req, res) => {
    var posts = await PostModel.find({});
    res.render("index", {posts});
}

exports.renderAbout = (req, res) => res.render("about");