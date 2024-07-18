const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const app = express();

// Set up Handlebars as the view engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Set the 'views' directory for your Handlebars templates
app.set("views", path.join(__dirname, "views"));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.render("index", { title: "MINY - Home" }); // Render 'index.handlebars'
});

// Add other routes for your pages (e.g., /features, /artists, etc.)

// No need for app.listen in CodeSandbox, it handles the server
