const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");

const app = express();
app.use(express.json());

app.use("/customer", proxy("http://localhost:3301"));
app.use("/shopping", proxy("http://localhost:3303"));
app.use("/", proxy("http://localhost:3302")); // Products

app
  .listen(3300, () => {
    console.log(`listening to port 3300`);
  })
  .on("error", (err) => {
    console.log(err);
    process.exit();
  });
