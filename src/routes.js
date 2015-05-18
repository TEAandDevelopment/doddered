module.exports = function (app) {
    console.log("routes'a girdi");
    var HomePageController = require("./controllers/site/homepage")(app);
    var HomePageController = require("./controllers/admin/blog-post/delete")(app);
}