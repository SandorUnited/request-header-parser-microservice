var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();


app.get("/", function (req, res) {
  var header = req.headers;
  var userAgent = header["user-agent"].split('A')[0].slice(0, -1);
  var language = header["accept-language"].split(',')[0];
  var ip =  req.headers['x-forwarded-for'].split(',')[0];
  var object = {language, userAgent, ip}
  res.send(object);
  
});


app.listen(PORT, function () {
  console.log('Your app is listening on port ' + PORT);
});
