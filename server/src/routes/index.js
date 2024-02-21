const express = require("express");
const userRouter = require("./userRouter");

const router = express.Router();

router.get("/", (req, res) => {
     res.send("Hello World!");
});

router.use("/api/users", userRouter);

module.exports = router;
