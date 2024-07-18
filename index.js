const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");

const app = express();

// Set Handlebars as the template engine
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "views/layouts"),
    partialsDir: path.join(__dirname, "views/partials"),
  })
);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Serve HTML pages from the root directory
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.render("index", { title: "Minyvinyl" });
});

// Remove app.listen - CodeSandbox handles the server
