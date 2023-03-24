const express = require("express");

const app = express();
app.use(express.json());

app.use("/", (req, res, next) => {
  return res.status(200).json({ msg: "Hello from Shopping" });
});

app
  .listen(3303, () => {
    console.log(`listening to port 3303`);
  })
  .on("error", (err) => {
    console.log(err);
    process.exit();
  });
