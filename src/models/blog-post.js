var mongoose = require('mongoose'),//db i�lemi i�in mongoose'u ekliyorum
    config = require("../config/config"),//db connection url'i i�in config'i ekliyorum
    db = mongoose.createConnection(config().db);//db de�i�kenini olu�turuyorum

var BlogPostSchema = new mongoose.Schema({
    title: String,
    content: String
}); //blog post i�in schema (model) olu�turuyorum

var blogPostItem = db.model("blogposts", BlogPostSchema);
mongoose.model("blogposts", BlogPostSchema);//dbye schemam� ekliyorum

module.exports = blogPostItem; //return blog post schema