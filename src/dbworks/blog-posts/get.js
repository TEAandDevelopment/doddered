var mongoose = require("mongoose"),//db işlemi için mongoose'u ekliyorum
    config = require("../../config/config"),//db connection url'i için config'i ekliyorum
    db = mongoose.createConnection(config().db),//db değişkenini oluşturuyorum
    BlogPostModel = require("../../models/blog-post");//database'den gelen veriyi tutmak için blog post'un schema'sını ekliyorum

var GetAll = function () {
    this.BlogPostList = {};//geri döndürülmek için değişken oluşturuyorum
    BlogPostModel.find({}, function (error, users) {
        //bu fonksiyon sadece success değildir ayrıca error de buraya döner parametreler ile kontrol mümkündür
        //1. parametre error 2. parametre response'dur

        BlogPostList = users;//GetAll fonksiyonunun scope'undaki değişkene atama yapıyorum
    });//db'den get işlemi yapıyorum
    return this.BlogPostList;//gelen user geri döndürüyorum
}

var GetById = function (id) {
    this.blogPostItem = {};//geri döndürülmek için değişken oluşturuyorum
    blogPostModel.find({ "_id.$oid": id }, function (err, user) {
        //bu fonksiyon sadece success değildir ayrıca error de buraya döner parametreler ile kontrol mümkündür
        //1. parametre error 2. parametre response'dur

        blogPostItem = user;//GetById fonksiyonunun scope'undaki değişkene atama yapıyorum
    });//db'den get işlemi yapıyorum
    return this.blogPostItem;//gelen user geri döndürüyorum
}

module.exports.GetAll = GetAll;//geri döndürülecek fonksiyonu ekliyorum
module.exports.GetById = GetById;//geri döndürülecek fonksiyonu ekliyorum