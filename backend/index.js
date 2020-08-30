/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const app = express();

const dotenv = require("dotenv");

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

if (dotenv.error) {
  throw dotenv.error;
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get("/api/greeting", (req, res) => {
  const name = req.query.name || "World";
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.listen(process.env.PROXY, () =>
  console.log(`🚀 Express server is running on port: ${process.env.PROXY}`)
);