var mongoose = require('mongoose'),//db iþlemi için mongoose'u ekliyorum
    config = require("../config/config"),//db connection url'i için config'i ekliyorum
    db = mongoose.createConnection(config().db);//db deðiþkenini oluþturuyorum

var BlogPostSchema = new mongoose.Schema({
    title: String,
    content: String
}); //blog post için schema (model) oluþturuyorum

var blogPostItem = db.model("blogposts", BlogPostSchema);
mongoose.model("blogposts", BlogPostSchema);//dbye schemamý ekliyorum

module.exports = blogPostItem; //return blog post schema