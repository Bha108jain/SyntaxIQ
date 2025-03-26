const express = require("express");
const aiController = require(__dirname + "/../controllers/ai.controller.js");

const router = express.Router();

router.post("/getreview", aiController.getReview);

module.exports = router;
