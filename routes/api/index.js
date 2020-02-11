const router = require("express").Router();
const contactRoutes = require("./contacts");

// todo routes
router.use("/todos", contactRoutes);

module.exports = router;
