const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const listRoutes = require("./routes/listRoutes");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-`Allow-Headers", "*")

//   if (req.method === "OPTIONS") {
//     res.header("Access-Control-Allow-Methods", "POST, GET")
//     return res.status(200).json({})
//   }
// })

app.get("/api/v1/status", (req, res, next) => {
  res.json({ status: "ok", apiVersion: "1.1" });
});


app.use("/api/v1/list", listRoutes);

module.exports = app