var BlogPostFacade = require("../../dbworks/blog-posts/get");//blog post db iþlemleri için yardýmcý class'ý ekliyorum

module.exports = function (app) {
    app.get("/", function (request, response) {
        var PostList = BlogPostFacade.GetAll();
        response.render("site/home-page.html", {
            title: "Anasayfa :: Talha Emin AYDEMÝR",
            items: PostList
        });
    });
}