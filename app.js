const express = require("express");

const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use("/subdir", require("./routes/subdir"));

app.get("/", (req, res) => {
  // res.send("Hello World!");
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});

app.get("/about-me", (req, res) => {
  // res.redirect("/about"); // 302 be default
  res.redirect(301, "/about");
});

app.get("/message", (req, res) => {
  res.json({ message: "Test" });
});

app.get("/*", (req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
