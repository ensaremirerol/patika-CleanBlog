const mongoose = require('mongoose');

var postSchema = mongoose.Schema(
    {
        title: String,
        detail: String,
        dateCreated: {type: Date, default: Date.now()}
    }
);
 const PostModel = mongoose.model('Post', postSchema);

 module.exports = PostModel;