var BlogPostFacade = require("../../dbworks/blog-posts/get");//blog post db i�lemleri i�in yard�mc� class'� ekliyorum

module.exports = function (app) {
    app.get("/", function (request, response) {
        var PostList = BlogPostFacade.GetAll();
        response.render("site/home-page.html", {
            title: "Anasayfa :: Talha Emin AYDEM�R",
            items: PostList
        });
    });
}