import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;


app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/webapplications", (req, res) => {
  res.render("web-applications.ejs");
});

app.get("/aboutme", (req, res) => {
  res.render("aboutme.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
