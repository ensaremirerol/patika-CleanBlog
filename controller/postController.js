const PostModel = require('../models/model_post');

exports.getPost = async (req, res) => {
    var post = await PostModel.findById({_id: req.params.id});
    res.render("post", {post});
}

exports.getEditPage = async (req, res) => {
    var post = await PostModel.findById({_id: req.params.id});
    res.render("edit_post", {post});
}

exports.createPost = async (req, res) => {
    await PostModel.create(req.body);
    res.redirect("/");
}

exports.updatePost = async (req, res) => {
    try {
        await PostModel.findByIdAndUpdate(req.params.id, req.body); 
    } catch (error) {
        console.log(`Error: ${error}`);
    }
    res.redirect(`/post/${req.params.id}`);
}

exports.deletePost = async (req, res) => {
    try {
        await PostModel.findByIdAndRemove(req.params.id); 
    } catch (error) {
        console.log(`Error: ${error}`);
    }
    res.redirect('/');
}


exports.renderAddPost = (req, res) => res.render('add_post');