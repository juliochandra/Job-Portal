const express = require("express");
const userControler = require("../controllers/userController");

const router = express.Router();

router.get("/", (req, res) => {
     res.send("Hello World! from user router");
});

router.post("/register", userControler.register);

module.exports = router;
