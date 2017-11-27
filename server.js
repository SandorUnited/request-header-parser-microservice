var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();


app.get("/", function (req, res) {
  var header = req.headers;
  var userAgent = header["user-agent"];
  var language = header["accept-language"];
  var ip =  req.headers['x-forwarded-for'];
  var object = {language, userAgent, ip}
  res.send(object);
  
});


app.listen(PORT, function () {
  console.log('Your app is listening on port ' + PORT);
});
