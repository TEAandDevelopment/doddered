var mongoose = require("mongoose"),//db işlemi için mongoose'u ekliyorum
    config = require("../../config/config"),//db connection url'i için config'i ekliyorum
    db = mongoose.createConnection(config().db),//db değişkenini oluşturuyorum
    BlogPostModel = require("../../models/blog-post");//database'den gelen veriyi tutmak için blog post'un schema'sını ekliyorum

var GetAll = function (callback) {
    BlogPostModel.find({}, function (error, users) {
        //bu fonksiyon sadece success değildir ayrıca error de buraya döner parametreler ile kontrol mümkündür
        //1. parametre error 2. parametre response'dur
        callback(users);//get işlemi tamamlanınca parametre olarak gelen fonksiyona gelen datayı göndererek işlem yaptırıyorum
    });//db'den get işlemi yapıyorum
}

var GetById = function (id, callback) {
    blogPostModel.find({ "_id.$oid": id }, function (err, user) {
        //bu fonksiyon sadece success değildir ayrıca error de buraya döner parametreler ile kontrol mümkündür
        //1. parametre error 2. parametre response'dur

        callback(user);//get işlemi tamamlanınca parametre olarak gelen fonksiyona gelen datayı göndererek işlem yaptırıyorum
    });//db'den get işlemi yapıyorum
}

module.exports.GetAll = GetAll;//geri döndürülecek fonksiyonu ekliyorum
module.exports.GetById = GetById;//geri döndürülecek fonksiyonu ekliyorum