var BlogPostDelete = require("../../../dbworks/blog-posts/delete");//blog post db iþlemleri için yardýmcý class'ý ekliyorum

module.exports = function (app) {
    app.get("/admin/blog-post/delete/:id", function (request, response) {
        var id = request.params.id;
        var mesaj = BlogPostDelete(id);
        response.render("site/home-page.html", {
            title: "Anasayfa :: Talha Emin AYDEMÝR",
            message: mesaj
        });
    });
}