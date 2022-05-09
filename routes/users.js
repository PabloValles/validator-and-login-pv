const express = require("express");
const router = express.Router();

const usersController = require("../controllers/usersController");

// middlewares
const validateCreateUsers = require("../middlewares/registerMiddleware");
const uploadFiles = require("../middlewares/multerMiddleware");

router.get("/login", usersController.login);
router.get("/create", usersController.create);
router.post(
  "/create",
  uploadFiles.single("avatar"),
  validateCreateUsers,
  usersController.store
);

module.exports = router;
