const emailService = require("../services/emailService");

exports.sendNotification = async (req, res) => {
  const { type, to, subject, message } = req.body;

  try {
    if (type !== "EMAIL") {
      return res.status(400).json({ error: "Unsupported notification type" });
    }

    await emailService.fire({ to, subject, message });

    res.json({
      status: "SENT",
      channel: "EMAIL",
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(503).json({
      status: "FAILED",
      reason: "Notification provider unavailable"
    });
  }
};