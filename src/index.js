// REQUIREMENTS
const express = require("express");
const app = express();
const path = require("path");

// SETTINGS
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
app.set("views", path.join(__dirname, "views"))

// STATIC FILES
app.use(express.static(path.join(__dirname, "public")))

// ROUTES
app.use(require("./routes/index"));

// SERVER LISTENER
app.listen(app.get("port"), () => {
    console.log("Server works on port " + app.get("port"));
});