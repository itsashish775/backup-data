const express = require("express");
const birds = require("./Routes/apicontroller");
const mail = require("./Routes/mailcontroller");
const app = express();
var cors = require("cors");
const port = 5000;
app.use(cors());
app.get("/", (req, res) => {
  console.log(req.url);
  console.log(req.method);
  res.send("Hello World!");
});
app.use("/ashish", birds);
app.use("/email", mail);
app.get(
  "/example/b",
  (req, res, next) => {
    console.log("the response will be sent by the next function ...");
    next();
  },
  (req, res) => {
    console.log(req.method);
    res.send("Hello from B!");
  }
);
app
  .route("/book")
  .get((req, res) => {
    console.log(req.method);
    res.send("Get a random book");
  })
  .post((req, res) => {
    console.log(req.method);
    res.send("Add a book");
  })
  .put((req, res) => {
    console.log(req.method);
    res.send("Update the book");
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
