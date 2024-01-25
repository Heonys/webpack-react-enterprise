const express = require("express");
const path = require("path");
const fs = require("fs-extra");
const port = 3000;
const app = express();

const copyMockServiceWorker = async () => {
  const source = path.join(__dirname, "../public/mockServiceWorker.js");
  const destination = path.join(__dirname, "../dist/mockServiceWorker.js");

  try {
    await fs.copy(source, destination);
  } catch (err) {
    console.error(err);
  }
};

app.use(express.static(path.join(__dirname, "../dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(port, async () => {
  await copyMockServiceWorker();
  console.log(`Example app listening at http://localhost:${port}`);
});
