var express                 = require("express"),
    homeroutes              = require("./routes/home.routes")

var app = express();
app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));

app.use(homeroutes);
let port = process.env.PORT||4000;
app.listen(port);