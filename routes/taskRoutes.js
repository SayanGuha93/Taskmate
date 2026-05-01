const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const ctrl = require("../controllers/taskController");

router.post("/", auth,ctrl.createTask);
router.get("/", auth,ctrl.getTasks);
router.put("/:id",auth,ctrl.updateTask);
router.delete("/:id",auth,ctrl.deleteTask);

module.exports = router;