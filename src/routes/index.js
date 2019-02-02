const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index.html");
});

router.get("/fibonacci", (req, res) => {
    res.render("fibonacciArticle.html")
});

module.exports = router;