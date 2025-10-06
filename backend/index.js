const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

const allCategories = require("./fullCategories.json");

app.use(cors());

app.get("/all-categories", (req, res) => {
  //res.sendStatus(404);
  res.json(allCategories);
});

app.get("/visible-categories", (req, res) => {
  let fakeVisibleCategories = allCategories
    .filter((category) => category.id % 3 === 0)
    .map(({ id }) => ({ id }));

  res.json(fakeVisibleCategories);
});

app.get("*", (req, res) => {
  res.sendStatus(404);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
