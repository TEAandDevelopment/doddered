var express = require("express"),
    nunjucks = require('nunjucks'),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    config = require("./config/config"),
    serve = require("serve-static"),
    app = express();
//kullanýlacak kütüphaneler projeye ekleniyor

mongoose.connect(config().db);//db connection'ý yapýlýyor.

app.use(bodyParser.urlencoded({ extended: true }));//formlardan veri almak için body-parser ekleniyor
app.use(bodyParser.json());//body-parser ayarlamasý yapýlýyor

app.use(serve("public"));//static path ekleniyor.

nunjucks.configure("public/views", { autoescape: true, express: app });//view engine ekleniyor

var routes = require("./routes")(app);//route ayarlarý ekleniyor

var appPort = process.env.PORT || 1963;//portu açmak için hangi portun açýlacaðý deðiþkene aktarýlýyor.
app.listen(appPort, function () {
    console.log("port acildi \nport: " + appPort);//port açýldýðýnda console'a bilgi veriyor
});//port açýlýyor.