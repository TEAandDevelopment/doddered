var mongoose = require("mongoose"),//db işlemi için mongoose'u ekliyorum
    config = require("../../config/config"),//db connection url'i için config'i ekliyorum
    db = mongoose.createConnection(config().db),//db değişkenini oluşturuyorum
    BlogPostModel = require("../../models/blog-post");//database'den gelen veriyi tutmak için blog post'un schema'sını ekliyorum


module.exports = function (newBlogPostObject) {
    newBlogPostObject.save(function (error) {//gelen objeyi save ederek geri dönüş'e göre işlemin tamamlanıp tamamlanmadığını geri döndürüyorum
        if (error)
            return "Hata: " + error;
        else
            return "Kayıt işlemi başarılı";
    });
    //gelen obje zaten mongoose.schema olarak oluşturulduğu için save metodu mongoose.schema'nın metodu oluyor.
    //gideceği url ona göre obje oluşturulurken hangi  schema'daysa ona göre extend ediliyor.
}