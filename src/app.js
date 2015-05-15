var express = require("express"),
    nunjucks = require('nunjucks'),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    config = require("./config/config"),
    serve = require("serve-static"),
    app = express();
//kullan�lacak k�t�phaneler projeye ekleniyor

mongoose.connect(config().db);//db connection'� yap�l�yor.

app.use(bodyParser.urlencoded({ extended: true }));//formlardan veri almak i�in body-parser ekleniyor
app.use(bodyParser.json());//body-parser ayarlamas� yap�l�yor

app.use(serve("public"));//static path ekleniyor.

nunjucks.configure("public/views", { autoescape: true, express: app });//view engine ekleniyor

var routes = require("./routes")(app);//route ayarlar� ekleniyor

var appPort = process.env.PORT || 1963;//portu a�mak i�in hangi portun a��laca�� de�i�kene aktar�l�yor.
app.listen(appPort, function () {
    console.log("port acildi \nport: " + appPort);//port a��ld���nda console'a bilgi veriyor
});//port a��l�yor.