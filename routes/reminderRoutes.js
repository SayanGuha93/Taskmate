const router = require("express").Router();
const remCtrl = require("../controllers/reminderController");

router.post("/",remCtrl.createReminder);

module.exports = router;