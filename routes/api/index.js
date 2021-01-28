const router = require("express").Router();
const apiRoutes = require("./apiRoutes");

// auth routes
// Route: /api/auth
router.use("/auth", apiRoutes);

module.exports = router;