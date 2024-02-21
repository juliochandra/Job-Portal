const express = require("express");
const userControler = require("../controllers/userController");
const informationController = require("../controllers/informationController");
const auth = require("../middlewares/auth");

const router = express.Router();

router.post("/register", userControler.register);
router.post("/login", userControler.login);
router.get("/logout", userControler.logout);

router.use(auth.authenticate);
router.post("/information", informationController.createInformation);

module.exports = router;
