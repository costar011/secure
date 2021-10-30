const express = require("express");
const morgan = require("morgan");
const mysql2 = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

const db = mysql2.createConnection({
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

const app = express();

app.use(morgan("dev"));

app.listen(process.env.PORT, () => {
  console.log("✅ 4000 SERVER START");
});
