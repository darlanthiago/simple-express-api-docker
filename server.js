"use strict";

const express = require("express");

// Constants
const PORT = 3000;
const HOST = "0.0.0.0";

// App
const app = express();
app.get("/teste", (req, res) => {
  return res.json({
    message: "Service 2 (NodeJS) - teste",
  });
});

app.get("/teste/2", (req, res) => {
  return res.json({
    message: "Service 2 (NodeJS) - teste 2",
  });
});

app.listen(PORT, HOST);
console.log(`Running...`);
