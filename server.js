require("dotenv").config();
const express = require("express");
const jsonServer = require("json-server");
const app = express();
const cors = require("cors");
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use("/api", jsonServer.defaults(), jsonServer.router("db.json"));

app.listen(4000, () => console.log("Server started on port 4000"));
