const express = require("express");
const app = express();
const DBconnect = require("./config/DB_connect");
require("dotenv").config();

const cors = require("cors");
DBconnect();

app.use(express.json());
app.use(cors());
app.use("/person", require("./routes/person"));

app.listen(process.env.PORT, (err) => {
  err ? console.log(err) : console.log("serveur is runnning");
});
