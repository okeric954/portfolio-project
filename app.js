var express = require("express");
var app = express();

// Set a default port number (e.g., || 3000)
var port = process.env.PORT;

app.get("/", function (req, res) {
  res.send("Aloha World!");
});

app.listen(port, function (err) {
  console.log("The server is running on port: " + port);
});
