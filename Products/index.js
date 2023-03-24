const express = require("express");

const app = express();
app.use(express.json());

app.use("/", (req, res, next) => {
  return res.status(200).json({ msg: "Hello from Products" });
});

app
  .listen(3302, () => {
    console.log(`listening to port 3302`);
  })
  .on("error", (err) => {
    console.log(err);
    process.exit();
  });
