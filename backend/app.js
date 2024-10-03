const express = require("express");
const app = express();
require("dotenv").config();
require("./conn/conn");
//app.get("/", (req, res) => {
//  res.send("Hello from backend side");
//});

//creating port

app.listen(process.env.PORT, () => {
  console.log(`Server Started ${process.env.PORT}`);
});
