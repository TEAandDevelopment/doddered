var mongoose = require("mongoose"),//db işlemi için mongoose'u ekliyorum
    config = require("../../config/config"),//db connection url'i için config'i ekliyorum
    db = mongoose.createConnection(config().db),//db değişkenini oluşturuyorum
    BlogPostModel = require("../../models/blog-post");//database'den gelen veriyi tutmak için blog post'un schema'sını ekliyorum


module.exports = function (id) {
    BlogPostModel.findOne({ _id: id }, function (error, blogPostObject) {
        if (error)
            return error;
        else {
            blogPostObject.remove();

            return "Güncelleme işlemi gerçekleştirildi";
        }
    });
}