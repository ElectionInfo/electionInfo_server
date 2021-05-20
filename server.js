var express = require("express");
var app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
app.use(express.static("public"));

var router = require("./router/main")(app);

var server = app.listen(3000, function () {
  console.log("Express server has started on port 3000");
});
