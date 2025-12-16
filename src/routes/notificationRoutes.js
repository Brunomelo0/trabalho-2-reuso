const express = require("express");
const controller = require("../controllers/notificationController");

const router = express.Router();

router.post("/", controller.sendNotification);

module.exports = router;