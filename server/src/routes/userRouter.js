const express = require("express");
const userControler = require("../controllers/userController");

const router = express.Router();

router.post("/register", userControler.register);
router.post("/login", userControler.login);
router.post("/logout", userControler.logout);

module.exports = router;
