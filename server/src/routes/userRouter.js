const express = require("express");
const userControler = require("../controllers/userController");
const informationController = require("../controllers/informationController");
const educationController = require("../controllers/educationController");
const auth = require("../middlewares/auth");

const router = express.Router();

router.post("/register", userControler.register);
router.post("/login", userControler.login);
router.get("/logout", userControler.logout);

router.use(auth.authenticate);
router.use(auth.isUser);

// user-information
router.post("/information", informationController.createInformation);
router.get("/information", informationController.findInformation);
router.put("/information", informationController.updateInformation);

// user-education
router.post("/education", educationController.createEducation);
router.get("/education", educationController.findEducation);
router.get(
     "/education/:educationId",
     educationController.findEducationById
);
router.put("/education/:educationId", educationController.updateEducation);
router.delete(
     "/education/:educationId",
     educationController.deleteEducation
);

module.exports = router;
